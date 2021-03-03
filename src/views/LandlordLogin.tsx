import React, { useState, useEffect } from 'react'
import {useHistory} from 'react-router'
import {Link} from 'react-router-dom'
import {Helmet} from "react-helmet";

import LandlordAPI from '../API/LandlordAPI'
import Centered from '../components/toolbox/layout/Centered'
import Logo from '../components/Logo'
import Input, {useInput, Validators} from '../components/toolbox/form/Input'
import Button from '../components/toolbox/form/Button'
import LeftAndRight from '../components/toolbox/layout/LeftAndRight'
import { BsAt } from "react-icons/bs";
import { BiKey } from "react-icons/bi";
import {useMediaQuery} from 'react-responsive'
import Error from '../components/toolbox/form/Error'

import {useDispatch, useSelector} from 'react-redux'
import {fetchUser} from '../redux/actions/user'
import queryString from 'query-string'
import urlencode from 'urlencode'
import Cookies from 'universal-cookie'

interface ILoginFields {
  email: string
  password: string
}

interface IFormError {
  hasError: boolean
  message: string
}

const {email: emailValidator, minLen: minLenValidator} = Validators;

const LandlordLogin = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 500px)' })

  const history = useHistory()
  const dispatch = useDispatch()
  const user = useSelector((state: any) => state.user)
  const isSmallScreen = useMediaQuery({ query: '(max-width: 800px)'})
  const [formError, setFormError] = useState<IFormError>({
    hasError: false, message: ""
  })
  const [formValidity, setFormValidity] = useState<{email: boolean, password: boolean}>({email: false, password: false})
  const [loginFields, setLoginFields] = useState<ILoginFields>({
    email: "", password: ""
  })

  const [emailInputState, emailInputView] = useInput({
    label: "email",
    icon: <BsAt />,
    validators:[
      {errorMsg: "Must input an email", validator: emailValidator}
    ]
  });

  const [passwordInputState, passwordInputView] = useInput({
    label: "password",
    type: "password",
    icon: <BiKey />,
    validators: [
      {errorMsg: "Password too short", validator: minLenValidator(5)}
    ]
  });

  useEffect (() => {

    const submitOnEnter = (e: KeyboardEvent) => {
      if (e.key === "Enter") handleLogin()
    }

    window.addEventListener('keypress', submitOnEnter)
    
    return () => {
      window.removeEventListener('keypress', submitOnEnter)
    }
  }, [])

  const handleLogin = () => {

    // if (loginFields.email.length === 0 || loginFields.password.length === 0) {
    if ((emailInputState as any).value.length === 0 || 
        (passwordInputState as any).value.length === 0) {
      setFormError({
        hasError: true,
        message: "Fields must not be left empty"
      })
    }
    else if (
      !(emailInputState as any).valid ||
      !(passwordInputState as any).valid
    ) {
      setFormError({
        hasError: true,
        message: "One of the fields has an error"
      })
    }
    else {
      setFormError({
        hasError: false, message: ""
      })
      LandlordAPI.login((emailInputState as any).value, (passwordInputState as any).value)
      .then(res => {
        if (res.data.success) { 

          handleRedirect ();
          dispatch(fetchUser(user, {update: true}))
        }
      })
      .catch(err => {
        setFormError({
          hasError: true,
          message: "Error logging in."
        })
      })
    }

  }

  /** 
   * If there is a redirect url in the url query parameters, parse it and
   * store it as a cookie. Once the user is authenticated, the redirect will be parsed from the cookie
   * and the landlord will be taken to the page
  */
  const handleRedirect = () => {
    let params = queryString.parse(window.location.search);

    if (Object.prototype.hasOwnProperty.call(params, `redirect`)) {
      const cookies = new Cookies();
      cookies.set('landlord_redirect', params['redirect'], {path: '/'});
    }
  }

  const fieldCallback = (field_name: 'email' | 'password') => {
    return (new_value: string) => {

      

      let currentFields: any = loginFields
      currentFields[field_name] = new_value
      setLoginFields(currentFields)
    }
  }

  const clearError = () => {
    setFormError({
      hasError: false,
      message: ''
    })
  }

  const isValid = () => formValidity.email && formValidity.password;

  return (<Centered width={isMobile ? 300 : 400} height={500}>
    <div>
      
      <Helmet>
          <meta charSet="utf-8" />
          <title>offcmpus | Landlord Login</title>
      </Helmet>

      {/* Error Area */}

      {/* Header */}
      <div className="padded upper" style={{display: 'flex'}}>
        <div style={{width: '40px', height: '40px'}}>
          <Logo />
        </div>
        <div style={{
          fontWeight: 600,
          fontSize: '1rem',
          lineHeight: '45px',
          marginLeft: '10px'
        }}>
          Landlord Login
        </div>
      </div>

      {formError.hasError && 
      <Error 
        message={formError.message}
        type='error'
      />}

      <div className="padded upper">
        {/* <Input 
          label="email"
          onChange={fieldCallback('email')}
          onValidate={(valid: boolean) => {
            let validity = {...formValidity};
            validity.password = valid;
            setFormValidity(validity);
          }}
          icon={<BsAt />}
          validators={[
            {errorMsg: "Must input an email", validator: emailValidator}
          ]}
        /> */}
        {emailInputView}
      </div>
      <div className="padded upper">
        {/* <Input 
          label="password"
          type="password"
          icon={<BiKey />}
          validators={[
            {errorMsg: "Password too short", validator: minLenValidator(5)}
          ]}
          onChange={fieldCallback('password')}
          onValidate={(valid: boolean) => {
            console.log(`[password] onValidate recieved => ${valid}`);
          }}
        /> */}
        {passwordInputView}
      </div>

      <div className="padded upper">
        <LeftAndRight
          left={<Link to="/landlord/forgot-password"><div style={{fontSize: '0.8rem'}}>Forgot password?</div></Link>}
          right={<Button 
            text="Login"
            bold={true}
            large={isSmallScreen}
            onClick={handleLogin}
            textColor="white"
            background="#E0777D"
            iconLocation="right"
          />}
        />
      </div>

      {/* Horizontal Line */}
      <div className="padded upper">
        <div className="horizontal-line">
          <div className="label">or</div>
        </div>
      </div>

      <div className="padded upper">
        <LeftAndRight 
          left={<div style={{fontSize: '0.8rem'}}>
            Don't have an account?
          </div>}
          right={<Button 
            text="Sign Up"
            bold={true}
            large={isSmallScreen}
            textColor="white"
            background="#3B4353"
            onClick={() => history.push('/landlord/register')}
          />}
        />
      </div>

    </div>
  </Centered>)
}

export default LandlordLogin