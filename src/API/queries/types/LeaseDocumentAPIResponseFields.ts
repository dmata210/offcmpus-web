/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: LeaseDocumentAPIResponseFields
// ====================================================

export interface LeaseDocumentAPIResponseFields_data_documents {
  __typename: "S3Document";
  mime_type: string;
  s3_key: string;
}

export interface LeaseDocumentAPIResponseFields_data {
  __typename: "LeaseDocument";
  _id: string;
  lease_name: string;
  documents: LeaseDocumentAPIResponseFields_data_documents[];
  landlord_id: string;
}

export interface LeaseDocumentAPIResponseFields {
  __typename: "LeaseDocumentAPIResponse";
  success: boolean;
  error: string | null;
  data: LeaseDocumentAPIResponseFields_data | null;
}
