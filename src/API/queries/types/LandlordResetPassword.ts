/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LandlordResetPassword
// ====================================================

export interface LandlordResetPassword_resetPassword {
  __typename: "LandlordAPIResponse";
  success: boolean;
  error: string | null;
}

export interface LandlordResetPassword {
  resetPassword: LandlordResetPassword_resetPassword;
}

export interface LandlordResetPasswordVariables {
  email: string;
  reset_key: string;
  new_password: string;
}
