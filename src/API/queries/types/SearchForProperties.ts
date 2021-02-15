/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchForProperties
// ====================================================

export interface SearchForProperties_searchForProperties_data_search_results_property_details_property_images {
  __typename: "PropertyImageInfo";
  s3_key: string;
  date_uploaded: string;
}

export interface SearchForProperties_searchForProperties_data_search_results_property_details {
  __typename: "PropertyDetails";
  description: string;
  rooms: number;
  bathrooms: number;
  sq_ft: number;
  furnished: boolean;
  has_washer: boolean;
  has_heater: boolean;
  has_ac: boolean;
  property_images: SearchForProperties_searchForProperties_data_search_results_property_details_property_images[];
}

export interface SearchForProperties_searchForProperties_data_search_results_property_directions_foot_walking_directions {
  __typename: "DirectionCoordinates";
  distance: number;
  coordinates: number[][];
}

export interface SearchForProperties_searchForProperties_data_search_results_property_directions_driving_car_directions {
  __typename: "DirectionCoordinates";
  distance: number;
  coordinates: number[][];
}

export interface SearchForProperties_searchForProperties_data_search_results_property_directions_cycling_regular_directions {
  __typename: "DirectionCoordinates";
  distance: number;
  coordinates: number[][];
}

export interface SearchForProperties_searchForProperties_data_search_results_property_directions {
  __typename: "PropertyDirections";
  institution_id: string;
  foot_walking_directions: SearchForProperties_searchForProperties_data_search_results_property_directions_foot_walking_directions[] | null;
  driving_car_directions: SearchForProperties_searchForProperties_data_search_results_property_directions_driving_car_directions[] | null;
  cycling_regular_directions: SearchForProperties_searchForProperties_data_search_results_property_directions_cycling_regular_directions[] | null;
}

export interface SearchForProperties_searchForProperties_data_search_results_property {
  __typename: "Property";
  _id: string;
  landlord: string;
  address_line: string;
  address_line_2: string | null;
  city: string;
  state: string;
  zip: string;
  details: SearchForProperties_searchForProperties_data_search_results_property_details | null;
  directions: SearchForProperties_searchForProperties_data_search_results_property_directions[] | null;
}

export interface SearchForProperties_searchForProperties_data_search_results {
  __typename: "PropertySearchResult";
  property: SearchForProperties_searchForProperties_data_search_results_property;
  landlord_first_name: string;
  landlord_last_name: string;
  price_range: number[];
  lease_count: number;
  landlord_rating_avg: number;
  property_rating_avg: number;
  landlord_rating_count: number;
  property_rating_count: number;
}

export interface SearchForProperties_searchForProperties_data {
  __typename: "PropertySearchResultCollection";
  search_results: SearchForProperties_searchForProperties_data_search_results[];
}

export interface SearchForProperties_searchForProperties {
  __typename: "PropertySearchResultCollectionAPIResult";
  success: boolean;
  error: string | null;
  data: SearchForProperties_searchForProperties_data | null;
}

export interface SearchForProperties {
  searchForProperties: SearchForProperties_searchForProperties;
}

export interface SearchForPropertiesVariables {
  price_start: number;
  price_end: number;
  rooms: number;
  distance: number;
}
