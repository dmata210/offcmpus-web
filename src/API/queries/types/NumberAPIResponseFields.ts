/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: NumberAPIResponseFields
// ====================================================

export interface NumberAPIResponseFields_data {
  __typename: "NumberValue";
  value: number;
}

export interface NumberAPIResponseFields {
  __typename: "NumberAPIResponse";
  success: boolean;
  error: string | null;
  data: NumberAPIResponseFields_data | null;
}
