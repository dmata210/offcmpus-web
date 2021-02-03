/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PropertyCollectionEntriesAPIResponseFields
// ====================================================

export interface PropertyCollectionEntriesAPIResponseFields_data_collection_entries_details_property_images {
  __typename: "PropertyImageInfo";
  s3_key: string;
  date_uploaded: string;
}

export interface PropertyCollectionEntriesAPIResponseFields_data_collection_entries_details {
  __typename: "PropertyDetails";
  description: string;
  rooms: number;
  bathrooms: number;
  sq_ft: number;
  furnished: boolean;
  has_washer: boolean;
  has_heater: boolean;
  has_ac: boolean;
  property_images: PropertyCollectionEntriesAPIResponseFields_data_collection_entries_details_property_images[];
}

export interface PropertyCollectionEntriesAPIResponseFields_data_collection_entries {
  __typename: "Property";
  _id: string;
  landlord: string;
  address_line: string;
  address_line_2: string | null;
  city: string;
  state: string;
  zip: string;
  details: PropertyCollectionEntriesAPIResponseFields_data_collection_entries_details | null;
}

export interface PropertyCollectionEntriesAPIResponseFields_data {
  __typename: "PropertyCollectionEntries";
  collection_entries: PropertyCollectionEntriesAPIResponseFields_data_collection_entries[];
}

export interface PropertyCollectionEntriesAPIResponseFields {
  __typename: "PropertyCollectionEntriesAPIResponse";
  success: boolean;
  error: string | null;
  data: PropertyCollectionEntriesAPIResponseFields_data | null;
}
