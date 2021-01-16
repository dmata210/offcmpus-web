/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ConfirmStudentEmail
// ====================================================

export interface ConfirmStudentEmail_confirmStudentEmail_data_auth_info {
  __typename: "CasAuthInfo";
  cas_id: string | null;
  institution_id: string | null;
}

export interface ConfirmStudentEmail_confirmStudentEmail_data_user_settings_push_subscriptions_keys {
  __typename: "PushSubscriptionKeys";
  p256dh: string;
  auth: string;
}

export interface ConfirmStudentEmail_confirmStudentEmail_data_user_settings_push_subscriptions {
  __typename: "PushSubscription";
  endpoint: string;
  keys: ConfirmStudentEmail_confirmStudentEmail_data_user_settings_push_subscriptions_keys;
}

export interface ConfirmStudentEmail_confirmStudentEmail_data_user_settings {
  __typename: "StudentUserSettings";
  recieve_email_notifications: boolean;
  push_subscriptions: ConfirmStudentEmail_confirmStudentEmail_data_user_settings_push_subscriptions[];
}

export interface ConfirmStudentEmail_confirmStudentEmail_data_search_status {
  __typename: "SearchStatus";
  date_updated: string;
  searching: boolean;
  search_start: string | null;
  search_end: string | null;
  price_start: number | null;
  price_end: number | null;
}

export interface ConfirmStudentEmail_confirmStudentEmail_data {
  __typename: "Student";
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  elevated_privileges: string[] | null;
  auth_info: ConfirmStudentEmail_confirmStudentEmail_data_auth_info | null;
  user_settings: ConfirmStudentEmail_confirmStudentEmail_data_user_settings | null;
  search_status: ConfirmStudentEmail_confirmStudentEmail_data_search_status | null;
}

export interface ConfirmStudentEmail_confirmStudentEmail {
  __typename: "StudentAPIResponse";
  data: ConfirmStudentEmail_confirmStudentEmail_data | null;
  success: boolean;
  error: string | null;
}

export interface ConfirmStudentEmail {
  confirmStudentEmail: ConfirmStudentEmail_confirmStudentEmail;
}

export interface ConfirmStudentEmailVariables {
  email: string;
  confirm_key: string;
}
