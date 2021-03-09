/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateStudentSearchStatus
// ====================================================

export interface UpdateStudentSearchStatus_updateStudentSearchStatus_data_auth_info {
  __typename: "CasAuthInfo";
  cas_id: string | null;
  institution_id: string | null;
}

export interface UpdateStudentSearchStatus_updateStudentSearchStatus_data_user_settings_push_subscriptions_keys {
  __typename: "PushSubscriptionKeys";
  p256dh: string;
  auth: string;
}

export interface UpdateStudentSearchStatus_updateStudentSearchStatus_data_user_settings_push_subscriptions {
  __typename: "PushSubscription";
  endpoint: string;
  keys: UpdateStudentSearchStatus_updateStudentSearchStatus_data_user_settings_push_subscriptions_keys;
}

export interface UpdateStudentSearchStatus_updateStudentSearchStatus_data_user_settings {
  __typename: "StudentUserSettings";
  recieve_email_notifications: boolean;
  push_subscriptions: UpdateStudentSearchStatus_updateStudentSearchStatus_data_user_settings_push_subscriptions[];
}

export interface UpdateStudentSearchStatus_updateStudentSearchStatus_data_search_status {
  __typename: "SearchStatus";
  date_updated: string;
  searching: boolean;
  search_start: string | null;
  search_end: string | null;
  price_start: number | null;
  price_end: number | null;
}

export interface UpdateStudentSearchStatus_updateStudentSearchStatus_data {
  __typename: "Student";
  _id: string;
  first_name: string;
  last_name: string;
  elevated_privileges: string[] | null;
  auth_info: UpdateStudentSearchStatus_updateStudentSearchStatus_data_auth_info | null;
  user_settings: UpdateStudentSearchStatus_updateStudentSearchStatus_data_user_settings | null;
  search_status: UpdateStudentSearchStatus_updateStudentSearchStatus_data_search_status | null;
}

export interface UpdateStudentSearchStatus_updateStudentSearchStatus {
  __typename: "StudentAPIResponse";
  data: UpdateStudentSearchStatus_updateStudentSearchStatus_data | null;
  success: boolean;
  error: string | null;
}

export interface UpdateStudentSearchStatus {
  updateStudentSearchStatus: UpdateStudentSearchStatus_updateStudentSearchStatus;
}

export interface UpdateStudentSearchStatusVariables {
  id: string;
  searching: boolean;
  search_start?: string | null;
  search_end?: string | null;
  price_start?: number | null;
  price_end?: number | null;
}
