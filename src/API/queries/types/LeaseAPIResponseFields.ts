/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: LeaseAPIResponseFields
// ====================================================

export interface LeaseAPIResponseFields_data_occupant_doc_auth_info {
  __typename: "CasAuthInfo";
  cas_id: string | null;
  institution_id: string | null;
}

export interface LeaseAPIResponseFields_data_occupant_doc_user_settings_push_subscriptions_keys {
  __typename: "PushSubscriptionKeys";
  p256dh: string;
  auth: string;
}

export interface LeaseAPIResponseFields_data_occupant_doc_user_settings_push_subscriptions {
  __typename: "PushSubscription";
  endpoint: string;
  keys: LeaseAPIResponseFields_data_occupant_doc_user_settings_push_subscriptions_keys;
}

export interface LeaseAPIResponseFields_data_occupant_doc_user_settings {
  __typename: "StudentUserSettings";
  recieve_email_notifications: boolean;
  push_subscriptions: LeaseAPIResponseFields_data_occupant_doc_user_settings_push_subscriptions[];
}

export interface LeaseAPIResponseFields_data_occupant_doc_search_status {
  __typename: "SearchStatus";
  date_updated: string;
  searching: boolean;
  search_start: string | null;
  search_end: string | null;
  price_start: number | null;
  price_end: number | null;
}

export interface LeaseAPIResponseFields_data_occupant_doc {
  __typename: "Student";
  _id: string;
  first_name: string;
  phone_number: string;
  last_name: string;
  email: string;
  elevated_privileges: string[] | null;
  auth_info: LeaseAPIResponseFields_data_occupant_doc_auth_info | null;
  user_settings: LeaseAPIResponseFields_data_occupant_doc_user_settings | null;
  search_status: LeaseAPIResponseFields_data_occupant_doc_search_status | null;
}

export interface LeaseAPIResponseFields_data_priority {
  __typename: "LeasePriority";
  level: number;
  start_date: string;
  end_date: string;
}

export interface LeaseAPIResponseFields_data {
  __typename: "Lease";
  _id: string;
  active: boolean;
  ownership_id: string;
  price_per_month: number;
  occupant_id: string | null;
  occupant_doc: LeaseAPIResponseFields_data_occupant_doc | null;
  external_occupant: boolean;
  priority: LeaseAPIResponseFields_data_priority | null;
  lease_document_id: string | null;
  lease_availability_start_date: string | null;
  lease_availability_end_date: string | null;
}

export interface LeaseAPIResponseFields {
  __typename: "LeaseAPIResponse";
  success: boolean;
  error: string | null;
  data: LeaseAPIResponseFields_data | null;
}
