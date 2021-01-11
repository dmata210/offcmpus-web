/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ConfirmEmail
// ====================================================

export interface ConfirmEmail_confirmEmail_data {
  __typename: "Landlord";
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string | null;
}

export interface ConfirmEmail_confirmEmail {
  __typename: "LandlordAPIResponse";
  success: boolean;
  error: string | null;
  data: ConfirmEmail_confirmEmail_data | null;
}

export interface ConfirmEmail {
  confirmEmail: ConfirmEmail_confirmEmail;
}

export interface ConfirmEmailVariables {
  email: string;
  confirm_key: string;
}
