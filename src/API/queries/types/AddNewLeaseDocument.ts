/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddNewLeaseDocument
// ====================================================

export interface AddNewLeaseDocument_addNewLeaseDocument_data_documents {
  __typename: "S3Document";
  mime_type: string;
  s3_key: string;
}

export interface AddNewLeaseDocument_addNewLeaseDocument_data {
  __typename: "LeaseDocument";
  _id: string;
  lease_name: string;
  documents: AddNewLeaseDocument_addNewLeaseDocument_data_documents[];
  landlord_id: string;
}

export interface AddNewLeaseDocument_addNewLeaseDocument {
  __typename: "LeaseDocumentAPIResponse";
  success: boolean;
  error: string | null;
  data: AddNewLeaseDocument_addNewLeaseDocument_data | null;
}

export interface AddNewLeaseDocument {
  addNewLeaseDocument: AddNewLeaseDocument_addNewLeaseDocument;
}

export interface AddNewLeaseDocumentVariables {
  lease_name: string;
  landlord_id: string;
  document_keys: string[];
  document_mimes: string[];
}
