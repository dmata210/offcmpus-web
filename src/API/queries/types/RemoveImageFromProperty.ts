/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RemoveImageFromProperty
// ====================================================

export interface RemoveImageFromProperty_removeImageFromProperty_data_details_property_images {
  __typename: "PropertyImageInfo";
  s3_key: string;
  date_uploaded: string;
}

export interface RemoveImageFromProperty_removeImageFromProperty_data_details {
  __typename: "PropertyDetails";
  description: string;
  rooms: number;
  bathrooms: number;
  sq_ft: number;
  furnished: boolean;
  has_washer: boolean;
  has_heater: boolean;
  has_ac: boolean;
  property_images: RemoveImageFromProperty_removeImageFromProperty_data_details_property_images[];
}

export interface RemoveImageFromProperty_removeImageFromProperty_data {
  __typename: "Property";
  _id: string;
  landlord: string;
  address_line: string;
  address_line_2: string | null;
  city: string;
  state: string;
  zip: string;
  details: RemoveImageFromProperty_removeImageFromProperty_data_details | null;
}

export interface RemoveImageFromProperty_removeImageFromProperty {
  __typename: "PropertyAPIResponse";
  success: boolean;
  error: string | null;
  data: RemoveImageFromProperty_removeImageFromProperty_data | null;
}

export interface RemoveImageFromProperty {
  removeImageFromProperty: RemoveImageFromProperty_removeImageFromProperty;
}

export interface RemoveImageFromPropertyVariables {
  property_id: string;
  s3_key: string;
}
