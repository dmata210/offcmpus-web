/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SendPasswordReset
// ====================================================

export interface SendPasswordReset_sendPasswordReset {
  __typename: "LandlordAPIResponse";
  success: boolean;
}

export interface SendPasswordReset {
  sendPasswordReset: SendPasswordReset_sendPasswordReset;
}

export interface SendPasswordResetVariables {
  email: string;
}
