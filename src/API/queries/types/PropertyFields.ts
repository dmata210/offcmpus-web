/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PropertyFields
// ====================================================

export interface PropertyFields_details_property_images {
  __typename: "PropertyImageInfo";
  s3_key: string;
  date_uploaded: string;
}

export interface PropertyFields_details {
  __typename: "PropertyDetails";
  description: string;
  rooms: number;
  bathrooms: number;
  sq_ft: number;
  furnished: boolean;
  has_washer: boolean;
  has_heater: boolean;
  has_ac: boolean;
  property_images: PropertyFields_details_property_images[];
}

export interface PropertyFields_directions_foot_walking_directions {
  __typename: "DirectionCoordinates";
  distance: number;
  coordinates: number[][];
}

export interface PropertyFields_directions_driving_car_directions {
  __typename: "DirectionCoordinates";
  distance: number;
  coordinates: number[][];
}

export interface PropertyFields_directions_cycling_regular_directions {
  __typename: "DirectionCoordinates";
  distance: number;
  coordinates: number[][];
}

export interface PropertyFields_directions {
  __typename: "PropertyDirections";
  institution_id: string;
  foot_walking_directions: PropertyFields_directions_foot_walking_directions[] | null;
  driving_car_directions: PropertyFields_directions_driving_car_directions[] | null;
  cycling_regular_directions: PropertyFields_directions_cycling_regular_directions[] | null;
}

export interface PropertyFields {
  __typename: "Property";
  _id: string;
  landlord: string;
  address_line: string;
  address_line_2: string | null;
  city: string;
  state: string;
  zip: string;
  details: PropertyFields_details | null;
  directions: PropertyFields_directions[] | null;
}
