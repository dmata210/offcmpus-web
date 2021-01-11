/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: InstitutionListAPIResponseFields
// ====================================================

export interface InstitutionListAPIResponseFields_data_institutions_location {
  __typename: "InstitutionLocationInfo";
  address: string;
  city: string;
  state: string;
  zip: string;
}

export interface InstitutionListAPIResponseFields_data_institutions {
  __typename: "Institution";
  _id: string;
  name: string;
  s3_thumb_key: string | null;
  location: InstitutionListAPIResponseFields_data_institutions_location;
}

export interface InstitutionListAPIResponseFields_data {
  __typename: "InstitutionList";
  institutions: InstitutionListAPIResponseFields_data_institutions[];
}

export interface InstitutionListAPIResponseFields {
  __typename: "InstitutionListAPIResponse";
  success: boolean;
  error: string | null;
  data: InstitutionListAPIResponseFields_data | null;
}
