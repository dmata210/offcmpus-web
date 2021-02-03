/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddImagesToProperty
// ====================================================

export interface AddImagesToProperty_addImagesToProperty_data_details_property_images {
  __typename: "PropertyImageInfo";
  s3_key: string;
  date_uploaded: string;
}

export interface AddImagesToProperty_addImagesToProperty_data_details {
  __typename: "PropertyDetails";
  description: string;
  rooms: number;
  bathrooms: number;
  sq_ft: number;
  furnished: boolean;
  has_washer: boolean;
  has_heater: boolean;
  has_ac: boolean;
  property_images: AddImagesToProperty_addImagesToProperty_data_details_property_images[];
}

export interface AddImagesToProperty_addImagesToProperty_data_directions_foot_walking_directions {
  __typename: "DirectionCoordinates";
  distance: number;
  coordinates: number[][];
}

export interface AddImagesToProperty_addImagesToProperty_data_directions_driving_car_directions {
  __typename: "DirectionCoordinates";
  distance: number;
  coordinates: number[][];
}

export interface AddImagesToProperty_addImagesToProperty_data_directions_cycling_regular_directions {
  __typename: "DirectionCoordinates";
  distance: number;
  coordinates: number[][];
}

export interface AddImagesToProperty_addImagesToProperty_data_directions {
  __typename: "PropertyDirections";
  institution_id: string;
  foot_walking_directions: AddImagesToProperty_addImagesToProperty_data_directions_foot_walking_directions[] | null;
  driving_car_directions: AddImagesToProperty_addImagesToProperty_data_directions_driving_car_directions[] | null;
  cycling_regular_directions: AddImagesToProperty_addImagesToProperty_data_directions_cycling_regular_directions[] | null;
}

export interface AddImagesToProperty_addImagesToProperty_data {
  __typename: "Property";
  _id: string;
  landlord: string;
  address_line: string;
  address_line_2: string | null;
  city: string;
  state: string;
  zip: string;
  details: AddImagesToProperty_addImagesToProperty_data_details | null;
  directions: AddImagesToProperty_addImagesToProperty_data_directions[] | null;
}

export interface AddImagesToProperty_addImagesToProperty {
  __typename: "PropertyAPIResponse";
  success: boolean;
  error: string | null;
  data: AddImagesToProperty_addImagesToProperty_data | null;
}

export interface AddImagesToProperty {
  addImagesToProperty: AddImagesToProperty_addImagesToProperty;
}

export interface AddImagesToPropertyVariables {
  property_id: string;
  s3_keys: string[];
}
