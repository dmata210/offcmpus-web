/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CheckPasswordResetKey
// ====================================================

export interface CheckPasswordResetKey_checkPasswordResetKey {
  __typename: "LandlordAPIResponse";
  success: boolean;
}

export interface CheckPasswordResetKey {
  checkPasswordResetKey: CheckPasswordResetKey_checkPasswordResetKey;
}

export interface CheckPasswordResetKeyVariables {
  reset_key: string;
  email: string;
}
