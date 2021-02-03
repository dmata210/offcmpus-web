/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ActivateLease
// ====================================================

export interface ActivateLease_activateLease_data_occupant_doc_auth_info {
  __typename: "CasAuthInfo";
  cas_id: string | null;
  institution_id: string | null;
}

export interface ActivateLease_activateLease_data_occupant_doc_user_settings_push_subscriptions_keys {
  __typename: "PushSubscriptionKeys";
  p256dh: string;
  auth: string;
}

export interface ActivateLease_activateLease_data_occupant_doc_user_settings_push_subscriptions {
  __typename: "PushSubscription";
  endpoint: string;
  keys: ActivateLease_activateLease_data_occupant_doc_user_settings_push_subscriptions_keys;
}

export interface ActivateLease_activateLease_data_occupant_doc_user_settings {
  __typename: "StudentUserSettings";
  recieve_email_notifications: boolean;
  push_subscriptions: ActivateLease_activateLease_data_occupant_doc_user_settings_push_subscriptions[];
}

export interface ActivateLease_activateLease_data_occupant_doc_search_status {
  __typename: "SearchStatus";
  date_updated: string;
  searching: boolean;
  search_start: string | null;
  search_end: string | null;
  price_start: number | null;
  price_end: number | null;
}

export interface ActivateLease_activateLease_data_occupant_doc {
  __typename: "Student";
  _id: string;
  first_name: string;
  phone_number: string;
  last_name: string;
  email: string;
  elevated_privileges: string[] | null;
  auth_info: ActivateLease_activateLease_data_occupant_doc_auth_info | null;
  user_settings: ActivateLease_activateLease_data_occupant_doc_user_settings | null;
  search_status: ActivateLease_activateLease_data_occupant_doc_search_status | null;
}

export interface ActivateLease_activateLease_data_priority {
  __typename: "LeasePriority";
  level: number;
  start_date: string;
  end_date: string;
}

export interface ActivateLease_activateLease_data {
  __typename: "Lease";
  _id: string;
  active: boolean;
  ownership_id: string;
  price_per_month: number;
  occupant_id: string | null;
  occupant_doc: ActivateLease_activateLease_data_occupant_doc | null;
  external_occupant: boolean;
  priority: ActivateLease_activateLease_data_priority | null;
  lease_document_id: string | null;
  lease_availability_start_date: string | null;
  lease_availability_end_date: string | null;
}

export interface ActivateLease_activateLease {
  __typename: "LeaseAPIResponse";
  success: boolean;
  error: string | null;
  data: ActivateLease_activateLease_data | null;
}

export interface ActivateLease {
  activateLease: ActivateLease_activateLease;
}

export interface ActivateLeaseVariables {
  lease_id: string;
  lease_document_id: string;
  price_per_month: number;
  lease_start_date: string;
  lease_end_date: string;
}
