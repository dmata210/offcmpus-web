/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PropertyWithLeaseFields
// ====================================================

export interface PropertyWithLeaseFields_details_property_images {
  __typename: "PropertyImageInfo";
  s3_key: string;
  date_uploaded: string;
}

export interface PropertyWithLeaseFields_details {
  __typename: "PropertyDetails";
  description: string;
  rooms: number;
  bathrooms: number;
  sq_ft: number;
  furnished: boolean;
  has_washer: boolean;
  has_heater: boolean;
  has_ac: boolean;
  property_images: PropertyWithLeaseFields_details_property_images[];
}

export interface PropertyWithLeaseFields_directions_foot_walking_directions {
  __typename: "DirectionCoordinates";
  distance: number;
  coordinates: number[][];
}

export interface PropertyWithLeaseFields_directions_driving_car_directions {
  __typename: "DirectionCoordinates";
  distance: number;
  coordinates: number[][];
}

export interface PropertyWithLeaseFields_directions_cycling_regular_directions {
  __typename: "DirectionCoordinates";
  distance: number;
  coordinates: number[][];
}

export interface PropertyWithLeaseFields_directions {
  __typename: "PropertyDirections";
  institution_id: string;
  foot_walking_directions: PropertyWithLeaseFields_directions_foot_walking_directions[] | null;
  driving_car_directions: PropertyWithLeaseFields_directions_driving_car_directions[] | null;
  cycling_regular_directions: PropertyWithLeaseFields_directions_cycling_regular_directions[] | null;
}

export interface PropertyWithLeaseFields_leases_lease_history_property_images {
  __typename: "LeaseImageInfo";
  s3_key: string;
  date_uploaded: string;
}

export interface PropertyWithLeaseFields_leases_lease_history {
  __typename: "LeaseHistory";
  price: number;
  student_id: string;
  start_date: string;
  end_date: string;
  property_images: PropertyWithLeaseFields_leases_lease_history_property_images[];
}

export interface PropertyWithLeaseFields_leases_student_interests {
  __typename: "StudentInterest";
  student_id: string;
  date: string;
}

export interface PropertyWithLeaseFields_leases {
  __typename: "Lease";
  _id: string;
  active: boolean;
  ownership_id: string;
  price_per_month: number;
  external_occupant: boolean;
  lease_availability_end_date: string | null;
  lease_availability_start_date: string | null;
  lease_document_id: string | null;
  lease_history: PropertyWithLeaseFields_leases_lease_history[];
  student_interests: PropertyWithLeaseFields_leases_student_interests[];
}

export interface PropertyWithLeaseFields {
  __typename: "Property";
  _id: string;
  landlord: string;
  address_line: string;
  address_line_2: string | null;
  city: string;
  state: string;
  zip: string;
  details: PropertyWithLeaseFields_details | null;
  directions: PropertyWithLeaseFields_directions[] | null;
  leases: PropertyWithLeaseFields_leases[] | null;
}
