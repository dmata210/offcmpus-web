/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdatePropertyDetails
// ====================================================

export interface UpdatePropertyDetails_updatePropertyDetails_data_details_property_images {
  __typename: "PropertyImageInfo";
  s3_key: string;
  date_uploaded: string;
}

export interface UpdatePropertyDetails_updatePropertyDetails_data_details {
  __typename: "PropertyDetails";
  description: string;
  rooms: number;
  bathrooms: number;
  sq_ft: number;
  furnished: boolean;
  has_washer: boolean;
  has_heater: boolean;
  has_ac: boolean;
  property_images: UpdatePropertyDetails_updatePropertyDetails_data_details_property_images[];
}

export interface UpdatePropertyDetails_updatePropertyDetails_data_directions_foot_walking_directions {
  __typename: "DirectionCoordinates";
  distance: number;
  coordinates: number[][];
}

export interface UpdatePropertyDetails_updatePropertyDetails_data_directions_driving_car_directions {
  __typename: "DirectionCoordinates";
  distance: number;
  coordinates: number[][];
}

export interface UpdatePropertyDetails_updatePropertyDetails_data_directions_cycling_regular_directions {
  __typename: "DirectionCoordinates";
  distance: number;
  coordinates: number[][];
}

export interface UpdatePropertyDetails_updatePropertyDetails_data_directions {
  __typename: "PropertyDirections";
  institution_id: string;
  foot_walking_directions: UpdatePropertyDetails_updatePropertyDetails_data_directions_foot_walking_directions[] | null;
  driving_car_directions: UpdatePropertyDetails_updatePropertyDetails_data_directions_driving_car_directions[] | null;
  cycling_regular_directions: UpdatePropertyDetails_updatePropertyDetails_data_directions_cycling_regular_directions[] | null;
}

export interface UpdatePropertyDetails_updatePropertyDetails_data {
  __typename: "Property";
  _id: string;
  landlord: string;
  address_line: string;
  address_line_2: string | null;
  city: string;
  state: string;
  zip: string;
  details: UpdatePropertyDetails_updatePropertyDetails_data_details | null;
  directions: UpdatePropertyDetails_updatePropertyDetails_data_directions[] | null;
}

export interface UpdatePropertyDetails_updatePropertyDetails {
  __typename: "PropertyAPIResponse";
  success: boolean;
  error: string | null;
  data: UpdatePropertyDetails_updatePropertyDetails_data | null;
}

export interface UpdatePropertyDetails {
  updatePropertyDetails: UpdatePropertyDetails_updatePropertyDetails;
}

export interface UpdatePropertyDetailsVariables {
  property_id: string;
  description?: string | null;
  rooms?: number | null;
  bathrooms?: number | null;
  sq_ft?: number | null;
  furnished?: boolean | null;
  has_washer?: boolean | null;
  has_heater?: boolean | null;
  has_ac?: boolean | null;
}
