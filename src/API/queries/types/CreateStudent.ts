/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateStudent
// ====================================================

export interface CreateStudent_createStudent_data_auth_info {
  __typename: "CasAuthInfo";
  cas_id: string | null;
  institution_id: string | null;
}

export interface CreateStudent_createStudent_data_user_settings_push_subscriptions_keys {
  __typename: "PushSubscriptionKeys";
  p256dh: string;
  auth: string;
}

export interface CreateStudent_createStudent_data_user_settings_push_subscriptions {
  __typename: "PushSubscription";
  endpoint: string;
  keys: CreateStudent_createStudent_data_user_settings_push_subscriptions_keys;
}

export interface CreateStudent_createStudent_data_user_settings {
  __typename: "StudentUserSettings";
  recieve_email_notifications: boolean;
  push_subscriptions: CreateStudent_createStudent_data_user_settings_push_subscriptions[];
}

export interface CreateStudent_createStudent_data_search_status {
  __typename: "SearchStatus";
  date_updated: string;
  searching: boolean;
  search_start: string | null;
  search_end: string | null;
  price_start: number | null;
  price_end: number | null;
}

export interface CreateStudent_createStudent_data {
  __typename: "Student";
  _id: string;
  first_name: string;
  last_name: string;
  elevated_privileges: string[] | null;
  auth_info: CreateStudent_createStudent_data_auth_info | null;
  user_settings: CreateStudent_createStudent_data_user_settings | null;
  search_status: CreateStudent_createStudent_data_search_status | null;
}

export interface CreateStudent_createStudent {
  __typename: "StudentAPIResponse";
  data: CreateStudent_createStudent_data | null;
  success: boolean;
  error: string | null;
}

export interface CreateStudent {
  createStudent: CreateStudent_createStudent;
}

export interface CreateStudentVariables {
  first_name: string;
  last_name: string;
  email: string;
  preferred_email?: string | null;
}
