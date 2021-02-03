/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ResendEmailConfirmation
// ====================================================

export interface ResendEmailConfirmation_resendEamilConfirmation {
  __typename: "LandlordAPIResponse";
  success: boolean;
  error: string | null;
}

export interface ResendEmailConfirmation {
  resendEamilConfirmation: ResendEmailConfirmation_resendEamilConfirmation;
}

export interface ResendEmailConfirmationVariables {
  landlord_id: string;
}
