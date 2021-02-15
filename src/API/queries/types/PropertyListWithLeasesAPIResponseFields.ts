/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PropertyListWithLeasesAPIResponseFields
// ====================================================

export interface PropertyListWithLeasesAPIResponseFields_data_properties_details_property_images {
  __typename: "PropertyImageInfo";
  s3_key: string;
  date_uploaded: string;
}

export interface PropertyListWithLeasesAPIResponseFields_data_properties_details {
  __typename: "PropertyDetails";
  description: string;
  rooms: number;
  bathrooms: number;
  sq_ft: number;
  furnished: boolean;
  has_washer: boolean;
  has_heater: boolean;
  has_ac: boolean;
  property_images: PropertyListWithLeasesAPIResponseFields_data_properties_details_property_images[];
}

export interface PropertyListWithLeasesAPIResponseFields_data_properties_directions_foot_walking_directions {
  __typename: "DirectionCoordinates";
  distance: number;
  coordinates: number[][];
}

export interface PropertyListWithLeasesAPIResponseFields_data_properties_directions_driving_car_directions {
  __typename: "DirectionCoordinates";
  distance: number;
  coordinates: number[][];
}

export interface PropertyListWithLeasesAPIResponseFields_data_properties_directions_cycling_regular_directions {
  __typename: "DirectionCoordinates";
  distance: number;
  coordinates: number[][];
}

export interface PropertyListWithLeasesAPIResponseFields_data_properties_directions {
  __typename: "PropertyDirections";
  institution_id: string;
  foot_walking_directions: PropertyListWithLeasesAPIResponseFields_data_properties_directions_foot_walking_directions[] | null;
  driving_car_directions: PropertyListWithLeasesAPIResponseFields_data_properties_directions_driving_car_directions[] | null;
  cycling_regular_directions: PropertyListWithLeasesAPIResponseFields_data_properties_directions_cycling_regular_directions[] | null;
}

export interface PropertyListWithLeasesAPIResponseFields_data_properties_leases_lease_history_review_of_property {
  __typename: "ReviewAndResponse";
  rating: number;
  review: string;
  response: string | null;
}

export interface PropertyListWithLeasesAPIResponseFields_data_properties_leases_lease_history_review_of_landlord {
  __typename: "ReviewAndResponse";
  rating: number;
  review: string;
  response: string | null;
}

export interface PropertyListWithLeasesAPIResponseFields_data_properties_leases_lease_history_property_images {
  __typename: "LeaseImageInfo";
  s3_key: string;
  date_uploaded: string;
}

export interface PropertyListWithLeasesAPIResponseFields_data_properties_leases_lease_history {
  __typename: "LeaseHistory";
  price: number;
  student_id: string;
  start_date: string;
  end_date: string;
  review_of_property: PropertyListWithLeasesAPIResponseFields_data_properties_leases_lease_history_review_of_property | null;
  review_of_landlord: PropertyListWithLeasesAPIResponseFields_data_properties_leases_lease_history_review_of_landlord | null;
  property_images: PropertyListWithLeasesAPIResponseFields_data_properties_leases_lease_history_property_images[];
}

export interface PropertyListWithLeasesAPIResponseFields_data_properties_leases_student_interests {
  __typename: "StudentInterest";
  student_id: string;
  date: string;
}

export interface PropertyListWithLeasesAPIResponseFields_data_properties_leases {
  __typename: "Lease";
  _id: string;
  active: boolean;
  ownership_id: string;
  price_per_month: number;
  occupant_id: string | null;
  external_occupant: boolean;
  lease_document_id: string | null;
  lease_availability_start_date: string | null;
  lease_availability_end_date: string | null;
  lease_history: PropertyListWithLeasesAPIResponseFields_data_properties_leases_lease_history[];
  student_interests: PropertyListWithLeasesAPIResponseFields_data_properties_leases_student_interests[];
}

export interface PropertyListWithLeasesAPIResponseFields_data_properties {
  __typename: "Property";
  _id: string;
  landlord: string;
  address_line: string;
  address_line_2: string | null;
  city: string;
  state: string;
  zip: string;
  details: PropertyListWithLeasesAPIResponseFields_data_properties_details | null;
  directions: PropertyListWithLeasesAPIResponseFields_data_properties_directions[] | null;
  leases: PropertyListWithLeasesAPIResponseFields_data_properties_leases[] | null;
}

export interface PropertyListWithLeasesAPIResponseFields_data {
  __typename: "PropertyList";
  properties: PropertyListWithLeasesAPIResponseFields_data_properties[];
}

export interface PropertyListWithLeasesAPIResponseFields {
  __typename: "PropertyListAPIResponse";
  success: boolean;
  error: string | null;
  data: PropertyListWithLeasesAPIResponseFields_data | null;
}
