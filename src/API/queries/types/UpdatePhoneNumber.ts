/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdatePhoneNumber
// ====================================================

export interface UpdatePhoneNumber_updatePhoneNumber_data_user_settings_push_subscriptions_keys {
  __typename: "PushSubscriptionKeys";
  p256dh: string;
  auth: string;
}

export interface UpdatePhoneNumber_updatePhoneNumber_data_user_settings_push_subscriptions {
  __typename: "PushSubscription";
  endpoint: string;
  keys: UpdatePhoneNumber_updatePhoneNumber_data_user_settings_push_subscriptions_keys;
}

export interface UpdatePhoneNumber_updatePhoneNumber_data_user_settings {
  __typename: "LandlordUserSettings";
  recieve_email_notifications: boolean;
  push_subscriptions: UpdatePhoneNumber_updatePhoneNumber_data_user_settings_push_subscriptions[];
}

export interface UpdatePhoneNumber_updatePhoneNumber_data {
  __typename: "Landlord";
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string | null;
  user_settings: UpdatePhoneNumber_updatePhoneNumber_data_user_settings | null;
}

export interface UpdatePhoneNumber_updatePhoneNumber {
  __typename: "LandlordAPIResponse";
  success: boolean;
  error: string | null;
  data: UpdatePhoneNumber_updatePhoneNumber_data | null;
}

export interface UpdatePhoneNumber {
  updatePhoneNumber: UpdatePhoneNumber_updatePhoneNumber;
}

export interface UpdatePhoneNumberVariables {
  landlord_id: string;
  phone_number: string;
}
