/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SubmitFeedback
// ====================================================

export interface SubmitFeedback_submitFeedback_data {
  __typename: "Feedback";
  submitter_id: string;
  user_type: string;
  message: string;
  date_submitted: string;
  tags: string[];
}

export interface SubmitFeedback_submitFeedback {
  __typename: "FeedbackAPIResponse";
  success: boolean;
  error: string | null;
  data: SubmitFeedback_submitFeedback_data | null;
}

export interface SubmitFeedback {
  submitFeedback: SubmitFeedback_submitFeedback;
}

export interface SubmitFeedbackVariables {
  submitter_id: string;
  user_type: string;
  message: string;
  tags: string[];
}
