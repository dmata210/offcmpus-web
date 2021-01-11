/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetInstitution
// ====================================================

export interface GetInstitution_getInstitution_data_location {
  __typename: "InstitutionLocationInfo";
  address: string;
  city: string;
  state: string;
  zip: string;
}

export interface GetInstitution_getInstitution_data {
  __typename: "Institution";
  _id: string;
  name: string;
  s3_thumb_key: string | null;
  location: GetInstitution_getInstitution_data_location;
}

export interface GetInstitution_getInstitution {
  __typename: "InstitutionAPIResponse";
  success: boolean;
  error: string | null;
  data: GetInstitution_getInstitution_data | null;
}

export interface GetInstitution {
  getInstitution: GetInstitution_getInstitution;
}

export interface GetInstitutionVariables {
  id: string;
}
