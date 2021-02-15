import React, { useEffect, useState } from 'react'
import {Route, Redirect} from 'react-router'
import AccessLevels from './accessLevels.json'
// import AuthAPI from '../../API/AuthAPI'
import Cookies from 'universal-cookie'
import {useHistory, useLocation} from 'react-router'
import NoInternetConnection from '../../views/NoInternetConnection'
import {pushRedirect} from '../../components/hooks/usePushRedirect'
import urlencode from 'urlencode'

import _ from 'lodash'

// redux
import {fetchUser, setInstitution} from '../../redux/actions/user'
import {ReduxState} from '../../redux/reducers/all_reducers'
import {useDispatch, useSelector} from 'react-redux'
import {useGetInstitutionLazyQuery} from '../../API/queries/types/graphqlFragmentTypes'

const AuthRoute = ({component: Component, accessLevel, ...rest}: any) => {

  const history = useHistory()
  const location = useLocation()
  const cookie = new Cookies()
  const [pageReachTimeout, setPageRechTimeout] = useState<boolean>(false)

  const getUserType = (): number => {
    if (!user) return -1;
    if (!user.authenticated) return AccessLevels.UNAUTH
    if (user.authenticated) {
      if (user.type == "landlord") return AccessLevels.LANDLORD;
      if (user.type == "student") {

        let level_ = AccessLevels.STUDENT;
        // check their elevated privileges
        if (user.user && user.user.elevated_privileges) {
          // augment with elevated_privileges flags
          for (let i = 0; i < user.user.elevated_privileges.length; ++i) {
            switch (user.user.elevated_privileges[i]) {
              case "ownership_reviewer":
                level_ = level_ | AccessLevels.OWNERSHIP_REVIEWER
            }
          }
        } // end if
        return level_
      }
    }
    return AccessLevels.UNAUTH
  }
  
  const defaultRoute = (user_type: number): string => {
    if ((user_type & AccessLevels.STUDENT) != 0) return '/feed'
    if ((user_type & AccessLevels.LANDLORD) != 0) return '/landlord/dashboard'
    if ((user_type & AccessLevels.UNAUTH) != 0) return '/'
    return '/'
  }
  const dispatch = useDispatch()
  const user = useSelector((state: ReduxState) => state.user)
  const institution = useSelector((state: ReduxState) => state.institution)

  const [institutionId, setInstitutionId] = useState<string | null>(null)
  const [getInstitution, {data: instutionData, loading: institutionLoading}] = useGetInstitutionLazyQuery({variables: {id: institutionId == null ? "" : institutionId}})

  useEffect(() => {

    console.log(`Page: ${window.location.href}`)

    let t_ = setTimeout(() => {
      setPageRechTimeout(true);
    }, 10000)

    return () => {
      clearTimeout(t_);
    }
  }, [])

  useEffect(() => {

    // get the user if the user does not exist
    dispatch(fetchUser(user, {update: false}))

  }, [dispatch, user])

  useEffect(() => {

    // dispatch setInstitution
    if (!institutionLoading && instutionData && instutionData.getInstitution.data && instutionData.getInstitution.success) {
      dispatch(setInstitution(instutionData.getInstitution.data))
    }

  }, [institutionLoading])

  useEffect(() => {
    // only fetch the institution if we don't already have one saved
    if (institution == null && institutionId != null) {
      cookie.set('inst', institutionId, {path: '/'})
      getInstitution()
    }
  }, [institutionId])

  useEffect(() => {

    // if this is a student, check the institution id
    if (user && user.user && user.type && user.type == "student") {

      // if the student does not have all their information, redirect them to complete registration
      if (!Object.prototype.hasOwnProperty.call(user.user, 'first_name')
      || !Object.prototype.hasOwnProperty.call(user.user, 'last_name')
      || !Object.prototype.hasOwnProperty.call(user.user, 'email')
      || user.user.first_name == undefined
      || user.user.last_name == undefined
      || user.user.email == undefined ) {
        history.push('/student/register/complete');
      }
      
      // check when the student last updated their status.
      // If it has been a month, take them to the status update page.
      else if (!user.user.search_status 
        || new Date().getTime() - new Date(user.user.search_status.date_updated).getTime() >= 1000 * 60 * 60 * 24 * 30) {
        pushRedirect(history, '/s/status', '/');
      }

      if (user.user && user.user.auth_info && user.user.auth_info.institution_id) {
        let institution_id: string | null = user.user.auth_info.institution_id
        setInstitutionId(institution_id)
      }
    }
    

  }, [user])

  const userInfoIsLoaded = (): boolean => {
    if (accessLevel == AccessLevels.UNAUTH) return true;
    if (user != null) {
      if (user.authenticated) {

        if (user && user.type == "student") {
          // students also need institution information to load
          if (!institution) return false;
        }
        return true;
      }
      else {
        return true;
      }
    }
    return false;
  }

  const hasAccess = (access_flag: number): boolean => ( accessLevel & access_flag ) != 0

  // Get the link to the student login page with the redirect query parameter
  // set to the current page so that once the student successfully logs in, they will
  // be redirected back to this page.
  const getLoginRedirectLink = (): string => {
    let redirect_path: string = urlencode(window.location.pathname);
    return `/student/login?redirect=${redirect_path}`
  }

  /**
   * @desc Given the access parameters of the route in accessLevel,
   * determine based on the value of getUserType, whether the user has
   * all the possible permissions to access this page
   */
  const canAccess = (): boolean => {
    let user_perm_flags = getUserType()
    return (accessLevel & user_perm_flags) != 0
  }

  return (<Route {...rest} render={(props) => {

    // if this route is set for any user level (no restriction)
    if (accessLevel === AccessLevels.ANY) return <Component {...props} />

    else if (userInfoIsLoaded() && user != null) {
      // If I am authenticated, I can access components with accessLevel of authenticated user
      if (user.authenticated) {
        if (canAccess()) {
          return <Component {...props} />
        }
        else {

          return (<Redirect to={defaultRoute(getUserType())} />);
        }

      }
      else {
        if (hasAccess(AccessLevels.UNAUTH)) return <Component {...props} />

        // if the student isn't logged in and they try to access a route that is restricted to 
        // only students, redirect them to the student login view with the `redirect` query parameter
        // set to this page.
        else if ((accessLevel & AccessLevels.STUDENT) != 0) return <Redirect to={getLoginRedirectLink()} />

        else return <Redirect to={defaultRoute(getUserType())} />

      }
    }
    else {
      return pageReachTimeout ? <NoInternetConnection />: <div />;
    }
    
  }} 
  />)
}

export default AuthRoute