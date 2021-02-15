/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CanAddReview
// ====================================================

export interface CanAddReview_canAddReview_data {
  __typename: "Digit";
  value: number;
}

export interface CanAddReview_canAddReview {
  __typename: "DigitAPIResponse";
  success: boolean;
  error: string | null;
  data: CanAddReview_canAddReview_data | null;
}

export interface CanAddReview {
  canAddReview: CanAddReview_canAddReview;
}

export interface CanAddReviewVariables {
  student_id: string;
  property_id: string;
}
