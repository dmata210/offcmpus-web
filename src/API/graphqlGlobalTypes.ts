/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * Input for describing the creation of a lease
 */
export interface LeaseUpdateInput {
  lease_id: string;
  price_per_month?: number | null;
  external_occupant?: boolean | null;
  active?: boolean | null;
  lease_priority?: number | null;
  priority_start_date?: string | null;
  priority_end_date?: string | null;
}

/**
 * Input for adding ownership documents
 */
export interface OwnershipDocumentInput {
  s3_doc_key: string;
  format: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
