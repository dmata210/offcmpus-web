/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PropertyListAPIResponseFields
// ====================================================

export interface PropertyListAPIResponseFields_data_properties_details_property_images {
  __typename: "PropertyImageInfo";
  s3_key: string;
  date_uploaded: string;
}

export interface PropertyListAPIResponseFields_data_properties_details {
  __typename: "PropertyDetails";
  description: string;
  rooms: number;
  bathrooms: number;
  sq_ft: number;
  furnished: boolean;
  has_washer: boolean;
  has_heater: boolean;
  has_ac: boolean;
  property_images: PropertyListAPIResponseFields_data_properties_details_property_images[];
}

export interface PropertyListAPIResponseFields_data_properties_directions_foot_walking_directions {
  __typename: "DirectionCoordinates";
  distance: number;
  coordinates: number[][];
}

export interface PropertyListAPIResponseFields_data_properties_directions_driving_car_directions {
  __typename: "DirectionCoordinates";
  distance: number;
  coordinates: number[][];
}

export interface PropertyListAPIResponseFields_data_properties_directions_cycling_regular_directions {
  __typename: "DirectionCoordinates";
  distance: number;
  coordinates: number[][];
}

export interface PropertyListAPIResponseFields_data_properties_directions {
  __typename: "PropertyDirections";
  institution_id: string;
  foot_walking_directions: PropertyListAPIResponseFields_data_properties_directions_foot_walking_directions[] | null;
  driving_car_directions: PropertyListAPIResponseFields_data_properties_directions_driving_car_directions[] | null;
  cycling_regular_directions: PropertyListAPIResponseFields_data_properties_directions_cycling_regular_directions[] | null;
}

export interface PropertyListAPIResponseFields_data_properties {
  __typename: "Property";
  _id: string;
  landlord: string;
  address_line: string;
  address_line_2: string | null;
  city: string;
  state: string;
  zip: string;
  details: PropertyListAPIResponseFields_data_properties_details | null;
  directions: PropertyListAPIResponseFields_data_properties_directions[] | null;
}

export interface PropertyListAPIResponseFields_data {
  __typename: "PropertyList";
  properties: PropertyListAPIResponseFields_data_properties[];
}

export interface PropertyListAPIResponseFields {
  __typename: "PropertyListAPIResponse";
  success: boolean;
  error: string | null;
  data: PropertyListAPIResponseFields_data | null;
}
