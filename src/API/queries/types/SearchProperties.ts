/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchProperties
// ====================================================

export interface SearchProperties_searchProperties_data_properties_details_property_images {
  __typename: "PropertyImageInfo";
  s3_key: string;
  date_uploaded: string;
}

export interface SearchProperties_searchProperties_data_properties_details {
  __typename: "PropertyDetails";
  description: string;
  rooms: number;
  bathrooms: number;
  sq_ft: number;
  furnished: boolean;
  has_washer: boolean;
  has_heater: boolean;
  has_ac: boolean;
  property_images: SearchProperties_searchProperties_data_properties_details_property_images[];
}

export interface SearchProperties_searchProperties_data_properties {
  __typename: "Property";
  _id: string;
  landlord: string;
  address_line: string;
  address_line_2: string | null;
  city: string;
  state: string;
  zip: string;
  details: SearchProperties_searchProperties_data_properties_details | null;
}

export interface SearchProperties_searchProperties_data {
  __typename: "PropertyList";
  properties: SearchProperties_searchProperties_data_properties[];
}

export interface SearchProperties_searchProperties {
  __typename: "PropertyListAPIResponse";
  success: boolean;
  error: string | null;
  data: SearchProperties_searchProperties_data | null;
}

export interface SearchProperties {
  searchProperties: SearchProperties_searchProperties;
}

export interface SearchPropertiesVariables {
  offset: number;
  count: number;
}
