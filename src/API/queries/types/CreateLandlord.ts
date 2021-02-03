/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateLandlord
// ====================================================

export interface CreateLandlord_createLandlord_data_user_settings_push_subscriptions_keys {
  __typename: "PushSubscriptionKeys";
  p256dh: string;
  auth: string;
}

export interface CreateLandlord_createLandlord_data_user_settings_push_subscriptions {
  __typename: "PushSubscription";
  endpoint: string;
  keys: CreateLandlord_createLandlord_data_user_settings_push_subscriptions_keys;
}

export interface CreateLandlord_createLandlord_data_user_settings {
  __typename: "LandlordUserSettings";
  recieve_email_notifications: boolean;
  push_subscriptions: CreateLandlord_createLandlord_data_user_settings_push_subscriptions[];
}

export interface CreateLandlord_createLandlord_data {
  __typename: "Landlord";
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string | null;
  user_settings: CreateLandlord_createLandlord_data_user_settings | null;
}

export interface CreateLandlord_createLandlord {
  __typename: "LandlordAPIResponse";
  success: boolean;
  error: string | null;
  data: CreateLandlord_createLandlord_data | null;
}

export interface CreateLandlord {
  createLandlord: CreateLandlord_createLandlord;
}

export interface CreateLandlordVariables {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}
