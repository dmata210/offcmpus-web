/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SaveConveniencePreferences
// ====================================================

export interface SaveConveniencePreferences_saveConveniencePreferences_data_auth_info {
  __typename: "CasAuthInfo";
  cas_id: string | null;
  institution_id: string | null;
}

export interface SaveConveniencePreferences_saveConveniencePreferences_data_user_settings_push_subscriptions_keys {
  __typename: "PushSubscriptionKeys";
  p256dh: string;
  auth: string;
}

export interface SaveConveniencePreferences_saveConveniencePreferences_data_user_settings_push_subscriptions {
  __typename: "PushSubscription";
  endpoint: string;
  keys: SaveConveniencePreferences_saveConveniencePreferences_data_user_settings_push_subscriptions_keys;
}

export interface SaveConveniencePreferences_saveConveniencePreferences_data_user_settings {
  __typename: "StudentUserSettings";
  recieve_email_notifications: boolean;
  push_subscriptions: SaveConveniencePreferences_saveConveniencePreferences_data_user_settings_push_subscriptions[];
}

export interface SaveConveniencePreferences_saveConveniencePreferences_data_search_status {
  __typename: "SearchStatus";
  date_updated: string;
  searching: boolean;
  search_start: string | null;
  search_end: string | null;
  price_start: number | null;
  price_end: number | null;
}

export interface SaveConveniencePreferences_saveConveniencePreferences_data {
  __typename: "Student";
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  elevated_privileges: string[] | null;
  auth_info: SaveConveniencePreferences_saveConveniencePreferences_data_auth_info | null;
  user_settings: SaveConveniencePreferences_saveConveniencePreferences_data_user_settings | null;
  search_status: SaveConveniencePreferences_saveConveniencePreferences_data_search_status | null;
}

export interface SaveConveniencePreferences_saveConveniencePreferences {
  __typename: "StudentAPIResponse";
  data: SaveConveniencePreferences_saveConveniencePreferences_data | null;
  success: boolean;
  error: string | null;
}

export interface SaveConveniencePreferences {
  saveConveniencePreferences: SaveConveniencePreferences_saveConveniencePreferences;
}

export interface SaveConveniencePreferencesVariables {
  preferences: string[];
}
