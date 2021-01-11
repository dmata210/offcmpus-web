/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetInstitutions
// ====================================================

export interface GetInstitutions_getMatchingInstitutions_data_institutions_location {
  __typename: "InstitutionLocationInfo";
  address: string;
  city: string;
  state: string;
  zip: string;
}

export interface GetInstitutions_getMatchingInstitutions_data_institutions {
  __typename: "Institution";
  _id: string;
  name: string;
  s3_thumb_key: string | null;
  location: GetInstitutions_getMatchingInstitutions_data_institutions_location;
}

export interface GetInstitutions_getMatchingInstitutions_data {
  __typename: "InstitutionList";
  institutions: GetInstitutions_getMatchingInstitutions_data_institutions[];
}

export interface GetInstitutions_getMatchingInstitutions {
  __typename: "InstitutionListAPIResponse";
  success: boolean;
  error: string | null;
  data: GetInstitutions_getMatchingInstitutions_data | null;
}

export interface GetInstitutions {
  getMatchingInstitutions: GetInstitutions_getMatchingInstitutions;
}

export interface GetInstitutionsVariables {
  partial_name: string;
}
