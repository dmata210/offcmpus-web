/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: LeaseDocumentFields
// ====================================================

export interface LeaseDocumentFields_documents {
  __typename: "S3Document";
  mime_type: string;
  s3_key: string;
}

export interface LeaseDocumentFields {
  __typename: "LeaseDocument";
  _id: string;
  lease_name: string;
  documents: LeaseDocumentFields_documents[];
  landlord_id: string;
}
