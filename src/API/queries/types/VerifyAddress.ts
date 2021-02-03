/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: VerifyAddress
// ====================================================

export interface VerifyAddress_verifyAddress_data {
  __typename: "AddressVerification";
  address_1: string;
  address_2: string;
  city: string;
  state: string;
  zip: string;
}

export interface VerifyAddress_verifyAddress {
  __typename: "AddressVerificationAPIResponse";
  success: boolean;
  error: string | null;
  data: VerifyAddress_verifyAddress_data | null;
}

export interface VerifyAddress {
  verifyAddress: VerifyAddress_verifyAddress;
}

export interface VerifyAddressVariables {
  address_1: string;
  address_2: string;
  zip: string;
  state: string;
  city: string;
}
