/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ConfirmLandlordEmail
// ====================================================

export interface ConfirmLandlordEmail_confirmLandlordEmail_data_user_settings_push_subscriptions_keys {
  __typename: "PushSubscriptionKeys";
  p256dh: string;
  auth: string;
}

export interface ConfirmLandlordEmail_confirmLandlordEmail_data_user_settings_push_subscriptions {
  __typename: "PushSubscription";
  endpoint: string;
  keys: ConfirmLandlordEmail_confirmLandlordEmail_data_user_settings_push_subscriptions_keys;
}

export interface ConfirmLandlordEmail_confirmLandlordEmail_data_user_settings {
  __typename: "LandlordUserSettings";
  recieve_email_notifications: boolean;
  push_subscriptions: ConfirmLandlordEmail_confirmLandlordEmail_data_user_settings_push_subscriptions[];
}

export interface ConfirmLandlordEmail_confirmLandlordEmail_data {
  __typename: "Landlord";
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string | null;
  user_settings: ConfirmLandlordEmail_confirmLandlordEmail_data_user_settings | null;
}

export interface ConfirmLandlordEmail_confirmLandlordEmail {
  __typename: "LandlordAPIResponse";
  success: boolean;
  error: string | null;
  data: ConfirmLandlordEmail_confirmLandlordEmail_data | null;
}

export interface ConfirmLandlordEmail {
  confirmLandlordEmail: ConfirmLandlordEmail_confirmLandlordEmail;
}

export interface ConfirmLandlordEmailVariables {
  email: string;
  confirm_key: string;
}
