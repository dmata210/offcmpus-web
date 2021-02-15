/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetLandlord
// ====================================================

export interface GetLandlord_getLandlord_data_user_settings_push_subscriptions_keys {
  __typename: "PushSubscriptionKeys";
  p256dh: string;
  auth: string;
}

export interface GetLandlord_getLandlord_data_user_settings_push_subscriptions {
  __typename: "PushSubscription";
  endpoint: string;
  keys: GetLandlord_getLandlord_data_user_settings_push_subscriptions_keys;
}

export interface GetLandlord_getLandlord_data_user_settings {
  __typename: "LandlordUserSettings";
  recieve_email_notifications: boolean;
  push_subscriptions: GetLandlord_getLandlord_data_user_settings_push_subscriptions[];
}

export interface GetLandlord_getLandlord_data {
  __typename: "Landlord";
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string | null;
  user_settings: GetLandlord_getLandlord_data_user_settings | null;
}

export interface GetLandlord_getLandlord {
  __typename: "LandlordAPIResponse";
  success: boolean;
  error: string | null;
  data: GetLandlord_getLandlord_data | null;
}

export interface GetLandlord {
  getLandlord: GetLandlord_getLandlord;
}

export interface GetLandlordVariables {
  landlord_id: string;
}
