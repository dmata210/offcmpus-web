import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import AuthRoute from './modules/auth/AuthRoute'
import AccessLevels from './modules/auth/accessLevels.json'
import { config, backendPath } from './config'

// stylesheets
import './assets/css/style.scss'
import './assets/css/layout.scss'
import './assets/css/fonts.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'shards-ui/dist/css/shards.min.css'
import 'antd/dist/antd.css';

// router paths
import SearchView_ from './views/SearchView'
import SearchView from './views/Search'
import LandlordLoginView from './views/LandlordLogin'
import LandlordRegisterView from './views/LandlordRegister'
// import CollectionView from './views/Collection'
// import StudentRegisterView from './views/StudentRegister'
import NotFound from './views/NotFound'
import LandingView from './views/Landing'
import AlertContext from './components/context/AlertContext'
import AlertController from './components/AlertController'
import PropertyView from './views/PropertyView'
import StudentLoginView from './views/StudentLoginView'
import StudentRegisterComplete from './views/StudentRegisterCompleteView'
import LandlordDashboard from './views/LandlordDashboard'
import CollectionView from './views/CollectionView'
import StudentCASAuth from './modules/redirects/StudentCASAuth'
import LandlordNewProperty from './views/LandlordNewProperty'
import LandlordOwnershipDocuments from './views/LandlordOwnershipDocuments'
import OwnershipReview from './views/OwnershipReview'
import ModConsole from './views/ModConsole'
import OwnershipDoc from './views/OwnershipDoc'
import PhoneVerifyView from './views/PhoneVerifyView'
import PropertyDetails from './views/PropertyDetails'
import PropertyInitialDetails from './views/PropertyInitialDetails'
import LandlordConfirmEmail from './views/LandlordConfirmEmail'
import StudentConfirmEmail from './views/StudentConfirmEmail'
import LandlordOnboarding from './views/LandlordOnboarding'
import PushNotificationsPrompt from './views/PushNotificationsPrompt'
import StudentStatus from './views/StudentStatus'
import NewLeaseView from './views/NewLeaseView'
import PriorityFeatureCreationVew from './views/PriorityFeatureCreationVew'
import StudentFeed from './views/StudentFeed'
import StudentPropertyInfoView from './views/StudentPropertyInfoView'
import LandlordAllLeasesView from './views/LandlordAllLeasesView'
import LandlordLeaseInfoView from './views/LandlordLeaseInfoView'
import StudentNotificationsView from './views/StudentNotificationsView'
import StudentLeaseAgreementView from './views/StudentLeaseAgreement'
import StudentAcceptedLeasesView from './views/StudentAcceptedLeasesView'
import StudentAcceptedLeaseInfoView from './views/StudentAcceptedLeaseInfoView'
import StudentLoginViewRPI from './views/StudentLoginRPI'
import LandlordForgotPasswordView from './views/LandlordForgotPasswordView'
import LandlordPasswordResetView from './views/LandlordPasswordResetView'
import StudentConvenience from './views/StudentConvenienceView'
import StudentStandardRegisterView from './views/StudentStandardRegisterView'
import StudentStandardLoginView from './views/StudentStandardLoginView'
import StudentRestrictedView from './views/StudentRestrictedView'

import Testing from './views/Testing'

// Redux setup
import store from './redux/store'
import { Provider } from 'react-redux'

// Apollo GraphQL Providers
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/client'

// setup routes
const Routes = () => {

  const [alertCtxValue, setAlertCtxValue] = useState({ id: 0, value: "", data: null })
  const successAlert = (data) => {
    setAlertCtxValue({
      id: alertCtxValue.id + 1,
      type: 'success',
      data
    })
  }

  const errorAlert = (msg) => {
    setAlertCtxValue({
      id: alertCtxValue.id + 1,
      value: msg,
      type: 'error'
    })
  }

  return (<Router>
    <AlertContext.Provider value={{
      successAlert: successAlert,
      errorAlert: errorAlert
    }}>
      <AlertController alertInfo={alertCtxValue} />
      <Switch>

        <AuthRoute accessLevel={AccessLevels.ANY} exact path="/testing_" component={Testing} />
        <Route exact path="/landlord/confirm/:confirm_key" component={({ match }) => (<LandlordConfirmEmail confirm_key={match.params.confirm_key} />)} />
        <Route exact path="/student/confirm/:confirm_key" component={({ match }) => (<StudentConfirmEmail confirm_key={match.params.confirm_key} />)} />

        {/* Unrestricted Paths */}
        <AuthRoute accessLevel={AccessLevels.UNAUTH} exact path="/" component={LandingView} />
        <AuthRoute accessLevel={AccessLevels.UNAUTH} exact path="/student/auth-cas" component={StudentCASAuth} />
        <AuthRoute accessLevel={AccessLevels.UNAUTH} exact path="/landlord/login" component={LandlordLoginView} />
        <AuthRoute accessLevel={AccessLevels.UNAUTH} exact path="/student/login" component={StudentLoginViewRPI} />
        <AuthRoute accessLevel={AccessLevels.UNAUTH} exact path="/student/standard/register" component={StudentStandardRegisterView} />
        <AuthRoute accessLevel={AccessLevels.UNAUTH} exact path="/student/standard/login" component={StudentStandardLoginView} />
        <AuthRoute accessLevel={AccessLevels.UNAUTH} exact path="/landlord/register" component={LandlordRegisterView} />
        <AuthRoute accessLevel={AccessLevels.UNAUTH} exact path="/landlord/forgot-password" component={LandlordForgotPasswordView} />
        <AuthRoute accessLevel={AccessLevels.UNAUTH} exact path="/landlord/password-reset/:reset_key" component={({ match }) => <LandlordPasswordResetView reset_key={match.params.reset_key} />} />

        {/* Restricted Paths */}
        {/* Student Only  */}
        <AuthRoute accessLevel={AccessLevels.STUDENT} exact path="/student/register/complete" component={StudentRegisterComplete} />
        <AuthRoute accessLevel={AccessLevels.STUDENT} exact path="/search" component={SearchView_} />
        <AuthRoute accessLevel={AccessLevels.STUDENT} exact path="/collection" component={CollectionView} />
        <AuthRoute accessLevel={AccessLevels.STUDENT} exact path="/s/status" component={StudentStatus} />
        <AuthRoute accessLevel={AccessLevels.STUDENT} exact path="/s/convenience" component={StudentConvenience} />
        <AuthRoute accessLevel={AccessLevels.STUDENT} exact path="/feed" component={StudentFeed} />
        <AuthRoute accessLevel={AccessLevels.STUDENT} exact path="/info/property/:id" component={({ match }) => (<StudentPropertyInfoView property_id={match.params.id} />)} />
        <AuthRoute accessLevel={AccessLevels.STUDENT} exact path="/student/notifications" component={StudentNotificationsView} />
        <AuthRoute accessLevel={AccessLevels.STUDENT} exact path="/student/lease/:id" component={({ match }) => (<StudentLeaseAgreementView lease_id={match.params.id} />)} />
        <AuthRoute accessLevel={AccessLevels.STUDENT} exact path="/student/accepted_leases" component={StudentAcceptedLeasesView} />
        <AuthRoute accessLevel={AccessLevels.STUDENT} exact path="/student/lease/info/:lease_id/:history_id" component={({ match }) => <StudentAcceptedLeaseInfoView lease_id={match.params.lease_id} history_id={match.params.history_id} />} />
        <AuthRoute accessLevel={AccessLevels.STUDENT} exact path="/student/restricted" component={StudentRestrictedView} />

        {/* Mod Console (Ownership Reviewer) */}
        <AuthRoute accessLevel={AccessLevels.OWNERSHIP_REVIEWER} exact path="/ownership/review" component={OwnershipReview} />
        <AuthRoute accessLevel={AccessLevels.OWNERSHIP_REVIEWER} exact path="/mod/console" component={ModConsole} />
        <AuthRoute accessLevel={AccessLevels.OWNERSHIP_REVIEWER} exact path="/ownership/review/:id" component={({ match }) => (<OwnershipDoc ownership_id={match.params.id} />)} />

        {/* Landlord Only */}
        <AuthRoute accessLevel={AccessLevels.LANDLORD} exact path="/landlord/welcome" component={LandlordOnboarding} />
        <AuthRoute accessLevel={AccessLevels.LANDLORD} exact path="/landlord/dashboard" component={LandlordDashboard} />
        <AuthRoute accessLevel={AccessLevels.LANDLORD} exact path="/landlord/new-property" component={LandlordNewProperty} />
        <AuthRoute accessLevel={AccessLevels.LANDLORD} exact path="/landlord/ownership-documents/:id" component={({ match }) => (<LandlordOwnershipDocuments ownership_id={match.params.id} />)} />
        <AuthRoute accessLevel={AccessLevels.LANDLORD} exact path="/verify/phone-number" component={PhoneVerifyView} />
        <AuthRoute accessLevel={AccessLevels.LANDLORD} exact path="/landlord/property/:id" component={({ match }) => (<PropertyDetails property_id={match.params.id} />)} />
        <AuthRoute accessLevel={AccessLevels.LANDLORD} exact path="/landlord/property/:id/new" component={({ match }) => (<PropertyInitialDetails property_id={match.params.id} />)} />
        <AuthRoute accessLevel={AccessLevels.LANDLORD} exact path="/landlord/property/lease/new/:id" component={({ match }) => (<NewLeaseView property_id={match.params.id} />)} />
        <AuthRoute accessLevel={AccessLevels.LANDLORD} exact path="/landlord/property/lease/priority/:id" component={({ match }) => (<PriorityFeatureCreationVew property_id={match.params.id} />)} />
        <AuthRoute accessLevel={AccessLevels.LANDLORD} exact path="/landlord/leases" component={LandlordAllLeasesView} />
        <AuthRoute accessLevel={AccessLevels.LANDLORD} exact path="/landlord/lease/:property_id/:lease_id" component={({ match }) => (<LandlordLeaseInfoView property_id={match.params.property_id} lease_id={match.params.lease_id} />)} />

        {/* Landlord and Student */}
        <AuthRoute accessLevel={AccessLevels.STUDENT | AccessLevels.LANDLORD} exact path="/property/:id" component={({ match }) => (<PropertyView property_id={match.params.id} />)} />
        <AuthRoute accessLevel={AccessLevels.STUDENT | AccessLevels.LANDLORD} exact path="/notifications/enable" component={PushNotificationsPrompt} />

        {/* 404 */}
        <Route component={NotFound} />
      </Switch>
    </AlertContext.Provider>
  </Router>)
}

config()

const _client = new ApolloClient({
  uri: backendPath('/graphql'),
  credentials: 'include'
})

ReactDOM.render(
  <ApolloProvider client={_client}>
    <Provider store={store}>
      <Routes />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
