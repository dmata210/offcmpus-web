/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetOwnerships
// ====================================================

export interface GetOwnerships_getOwnershipsForLandlord_data_ownerships {
  __typename: "Ownership";
  _id: string;
  property_id: string | null;
  landlord_id: string;
  date_submitted: string;
  status: string;
  ownership_doc_s3_keys: string[];
}

export interface GetOwnerships_getOwnershipsForLandlord_data {
  __typename: "OwnershipCollection";
  ownerships: GetOwnerships_getOwnershipsForLandlord_data_ownerships[];
}

export interface GetOwnerships_getOwnershipsForLandlord {
  __typename: "OwnershipCollectionAPIResponse";
  success: boolean;
  error: string | null;
  data: GetOwnerships_getOwnershipsForLandlord_data | null;
}

export interface GetOwnerships {
  getOwnershipsForLandlord: GetOwnerships_getOwnershipsForLandlord;
}

export interface GetOwnershipsVariables {
  landlord_id: string;
}
