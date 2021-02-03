/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FeedbackAPIResponseFields
// ====================================================

export interface FeedbackAPIResponseFields_data {
  __typename: "Feedback";
  submitter_id: string;
  user_type: string;
  message: string;
  date_submitted: string;
  tags: string[];
}

export interface FeedbackAPIResponseFields {
  __typename: "FeedbackAPIResponse";
  success: boolean;
  error: string | null;
  data: FeedbackAPIResponseFields_data | null;
}
