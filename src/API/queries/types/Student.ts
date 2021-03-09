/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Student
// ====================================================

export interface Student_getStudent_data_auth_info {
  __typename: "CasAuthInfo";
  cas_id: string | null;
  institution_id: string | null;
}

export interface Student_getStudent_data_user_settings_push_subscriptions_keys {
  __typename: "PushSubscriptionKeys";
  p256dh: string;
  auth: string;
}

export interface Student_getStudent_data_user_settings_push_subscriptions {
  __typename: "PushSubscription";
  endpoint: string;
  keys: Student_getStudent_data_user_settings_push_subscriptions_keys;
}

export interface Student_getStudent_data_user_settings {
  __typename: "StudentUserSettings";
  recieve_email_notifications: boolean;
  push_subscriptions: Student_getStudent_data_user_settings_push_subscriptions[];
}

export interface Student_getStudent_data_search_status {
  __typename: "SearchStatus";
  date_updated: string;
  searching: boolean;
  search_start: string | null;
  search_end: string | null;
  price_start: number | null;
  price_end: number | null;
}

export interface Student_getStudent_data {
  __typename: "Student";
  _id: string;
  first_name: string;
  last_name: string;
  elevated_privileges: string[] | null;
  auth_info: Student_getStudent_data_auth_info | null;
  user_settings: Student_getStudent_data_user_settings | null;
  search_status: Student_getStudent_data_search_status | null;
}

export interface Student_getStudent {
  __typename: "StudentAPIResponse";
  data: Student_getStudent_data | null;
  success: boolean;
  error: string | null;
}

export interface Student {
  getStudent: Student_getStudent;
}

export interface StudentVariables {
  id: string;
}
