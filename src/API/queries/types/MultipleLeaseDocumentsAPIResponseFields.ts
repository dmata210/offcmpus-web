/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: MultipleLeaseDocumentsAPIResponseFields
// ====================================================

export interface MultipleLeaseDocumentsAPIResponseFields_data_lease_documents_documents {
  __typename: "S3Document";
  mime_type: string;
  s3_key: string;
}

export interface MultipleLeaseDocumentsAPIResponseFields_data_lease_documents {
  __typename: "LeaseDocument";
  _id: string;
  lease_name: string;
  documents: MultipleLeaseDocumentsAPIResponseFields_data_lease_documents_documents[];
  landlord_id: string;
}

export interface MultipleLeaseDocumentsAPIResponseFields_data {
  __typename: "MultipleLeaseDocuments";
  lease_documents: MultipleLeaseDocumentsAPIResponseFields_data_lease_documents[];
}

export interface MultipleLeaseDocumentsAPIResponseFields {
  __typename: "MultipleLeaseDocumentsAPIResponse";
  success: boolean;
  error: string | null;
  data: MultipleLeaseDocumentsAPIResponseFields_data | null;
}
