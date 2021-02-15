/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getPropertyForOwnership
// ====================================================

export interface getPropertyForOwnership_getPropertyForOwnership_data_details_property_images {
  __typename: "PropertyImageInfo";
  s3_key: string;
  date_uploaded: string;
}

export interface getPropertyForOwnership_getPropertyForOwnership_data_details {
  __typename: "PropertyDetails";
  description: string;
  rooms: number;
  bathrooms: number;
  sq_ft: number;
  furnished: boolean;
  has_washer: boolean;
  has_heater: boolean;
  has_ac: boolean;
  property_images: getPropertyForOwnership_getPropertyForOwnership_data_details_property_images[];
}

export interface getPropertyForOwnership_getPropertyForOwnership_data_directions_foot_walking_directions {
  __typename: "DirectionCoordinates";
  distance: number;
  coordinates: number[][];
}

export interface getPropertyForOwnership_getPropertyForOwnership_data_directions_driving_car_directions {
  __typename: "DirectionCoordinates";
  distance: number;
  coordinates: number[][];
}

export interface getPropertyForOwnership_getPropertyForOwnership_data_directions_cycling_regular_directions {
  __typename: "DirectionCoordinates";
  distance: number;
  coordinates: number[][];
}

export interface getPropertyForOwnership_getPropertyForOwnership_data_directions {
  __typename: "PropertyDirections";
  institution_id: string;
  foot_walking_directions: getPropertyForOwnership_getPropertyForOwnership_data_directions_foot_walking_directions[] | null;
  driving_car_directions: getPropertyForOwnership_getPropertyForOwnership_data_directions_driving_car_directions[] | null;
  cycling_regular_directions: getPropertyForOwnership_getPropertyForOwnership_data_directions_cycling_regular_directions[] | null;
}

export interface getPropertyForOwnership_getPropertyForOwnership_data {
  __typename: "Property";
  _id: string;
  landlord: string;
  address_line: string;
  address_line_2: string | null;
  city: string;
  state: string;
  zip: string;
  details: getPropertyForOwnership_getPropertyForOwnership_data_details | null;
  directions: getPropertyForOwnership_getPropertyForOwnership_data_directions[] | null;
}

export interface getPropertyForOwnership_getPropertyForOwnership {
  __typename: "PropertyAPIResponse";
  success: boolean;
  error: string | null;
  data: getPropertyForOwnership_getPropertyForOwnership_data | null;
}

export interface getPropertyForOwnership {
  getPropertyForOwnership: getPropertyForOwnership_getPropertyForOwnership;
}

export interface getPropertyForOwnershipVariables {
  ownership_id: string;
}
