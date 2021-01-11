/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: InstitutionAPIResponseFields
// ====================================================

export interface InstitutionAPIResponseFields_data_location {
  __typename: "InstitutionLocationInfo";
  address: string;
  city: string;
  state: string;
  zip: string;
}

export interface InstitutionAPIResponseFields_data {
  __typename: "Institution";
  _id: string;
  name: string;
  s3_thumb_key: string | null;
  location: InstitutionAPIResponseFields_data_location;
}

export interface InstitutionAPIResponseFields {
  __typename: "InstitutionAPIResponse";
  success: boolean;
  error: string | null;
  data: InstitutionAPIResponseFields_data | null;
}
