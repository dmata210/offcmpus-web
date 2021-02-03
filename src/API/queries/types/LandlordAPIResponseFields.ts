/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: LandlordAPIResponseFields
// ====================================================

export interface LandlordAPIResponseFields_data_user_settings_push_subscriptions_keys {
  __typename: "PushSubscriptionKeys";
  p256dh: string;
  auth: string;
}

export interface LandlordAPIResponseFields_data_user_settings_push_subscriptions {
  __typename: "PushSubscription";
  endpoint: string;
  keys: LandlordAPIResponseFields_data_user_settings_push_subscriptions_keys;
}

export interface LandlordAPIResponseFields_data_user_settings {
  __typename: "LandlordUserSettings";
  recieve_email_notifications: boolean;
  push_subscriptions: LandlordAPIResponseFields_data_user_settings_push_subscriptions[];
}

export interface LandlordAPIResponseFields_data {
  __typename: "Landlord";
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string | null;
  user_settings: LandlordAPIResponseFields_data_user_settings | null;
}

export interface LandlordAPIResponseFields {
  __typename: "LandlordAPIResponse";
  success: boolean;
  error: string | null;
  data: LandlordAPIResponseFields_data | null;
}
