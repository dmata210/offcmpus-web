/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: AddressVerificationAPIResponseFields
// ====================================================

export interface AddressVerificationAPIResponseFields_data {
  __typename: "AddressVerification";
  address_1: string;
  address_2: string;
  city: string;
  state: string;
  zip: string;
}

export interface AddressVerificationAPIResponseFields {
  __typename: "AddressVerificationAPIResponse";
  success: boolean;
  error: string | null;
  data: AddressVerificationAPIResponseFields_data | null;
}
