/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PartialPropertyCollectionEntriesAPIResponseFields
// ====================================================

export interface PartialPropertyCollectionEntriesAPIResponseFields_data_collection_entries {
  __typename: "Property";
  _id: string;
}

export interface PartialPropertyCollectionEntriesAPIResponseFields_data {
  __typename: "PropertyCollectionEntries";
  collection_entries: PartialPropertyCollectionEntriesAPIResponseFields_data_collection_entries[];
}

export interface PartialPropertyCollectionEntriesAPIResponseFields {
  __typename: "PropertyCollectionEntriesAPIResponse";
  success: boolean;
  error: string | null;
  data: PartialPropertyCollectionEntriesAPIResponseFields_data | null;
}
