/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: LeaseOccupant
// ====================================================

export interface LeaseOccupant_auth_info {
  __typename: "CasAuthInfo";
  cas_id: string | null;
  institution_id: string | null;
}

export interface LeaseOccupant_user_settings_push_subscriptions_keys {
  __typename: "PushSubscriptionKeys";
  p256dh: string;
  auth: string;
}

export interface LeaseOccupant_user_settings_push_subscriptions {
  __typename: "PushSubscription";
  endpoint: string;
  keys: LeaseOccupant_user_settings_push_subscriptions_keys;
}

export interface LeaseOccupant_user_settings {
  __typename: "StudentUserSettings";
  recieve_email_notifications: boolean;
  push_subscriptions: LeaseOccupant_user_settings_push_subscriptions[];
}

export interface LeaseOccupant_search_status {
  __typename: "SearchStatus";
  date_updated: string;
  searching: boolean;
  search_start: string | null;
  search_end: string | null;
  price_start: number | null;
  price_end: number | null;
}

export interface LeaseOccupant {
  __typename: "Student";
  _id: string;
  first_name: string;
  phone_number: string;
  last_name: string;
  email: string;
  elevated_privileges: string[] | null;
  auth_info: LeaseOccupant_auth_info | null;
  user_settings: LeaseOccupant_user_settings | null;
  search_status: LeaseOccupant_search_status | null;
}
