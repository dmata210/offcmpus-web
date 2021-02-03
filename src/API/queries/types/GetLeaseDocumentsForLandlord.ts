/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetLeaseDocumentsForLandlord
// ====================================================

export interface GetLeaseDocumentsForLandlord_getLeaseDocumentsForLandlord_data_lease_documents_documents {
  __typename: "S3Document";
  mime_type: string;
  s3_key: string;
}

export interface GetLeaseDocumentsForLandlord_getLeaseDocumentsForLandlord_data_lease_documents {
  __typename: "LeaseDocument";
  _id: string;
  lease_name: string;
  documents: GetLeaseDocumentsForLandlord_getLeaseDocumentsForLandlord_data_lease_documents_documents[];
  landlord_id: string;
}

export interface GetLeaseDocumentsForLandlord_getLeaseDocumentsForLandlord_data {
  __typename: "MultipleLeaseDocuments";
  lease_documents: GetLeaseDocumentsForLandlord_getLeaseDocumentsForLandlord_data_lease_documents[];
}

export interface GetLeaseDocumentsForLandlord_getLeaseDocumentsForLandlord {
  __typename: "MultipleLeaseDocumentsAPIResponse";
  success: boolean;
  error: string | null;
  data: GetLeaseDocumentsForLandlord_getLeaseDocumentsForLandlord_data | null;
}

export interface GetLeaseDocumentsForLandlord {
  getLeaseDocumentsForLandlord: GetLeaseDocumentsForLandlord_getLeaseDocumentsForLandlord;
}

export interface GetLeaseDocumentsForLandlordVariables {
  landlord_id: string;
}
