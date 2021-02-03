/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: OnboardLandlord
// ====================================================

export interface OnboardLandlord_setLandlordOnboarded_data_user_settings_push_subscriptions_keys {
  __typename: "PushSubscriptionKeys";
  p256dh: string;
  auth: string;
}

export interface OnboardLandlord_setLandlordOnboarded_data_user_settings_push_subscriptions {
  __typename: "PushSubscription";
  endpoint: string;
  keys: OnboardLandlord_setLandlordOnboarded_data_user_settings_push_subscriptions_keys;
}

export interface OnboardLandlord_setLandlordOnboarded_data_user_settings {
  __typename: "LandlordUserSettings";
  recieve_email_notifications: boolean;
  push_subscriptions: OnboardLandlord_setLandlordOnboarded_data_user_settings_push_subscriptions[];
}

export interface OnboardLandlord_setLandlordOnboarded_data {
  __typename: "Landlord";
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string | null;
  user_settings: OnboardLandlord_setLandlordOnboarded_data_user_settings | null;
}

export interface OnboardLandlord_setLandlordOnboarded {
  __typename: "LandlordAPIResponse";
  success: boolean;
  error: string | null;
  data: OnboardLandlord_setLandlordOnboarded_data | null;
}

export interface OnboardLandlord {
  setLandlordOnboarded: OnboardLandlord_setLandlordOnboarded;
}

export interface OnboardLandlordVariables {
  landlord_id: string;
}
