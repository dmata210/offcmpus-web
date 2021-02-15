/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPropertySummary
// ====================================================

export interface GetPropertySummary_getPropertySummary_data_property_details_property_images {
  __typename: "PropertyImageInfo";
  s3_key: string;
  date_uploaded: string;
}

export interface GetPropertySummary_getPropertySummary_data_property_details {
  __typename: "PropertyDetails";
  description: string;
  rooms: number;
  bathrooms: number;
  sq_ft: number;
  furnished: boolean;
  has_washer: boolean;
  has_heater: boolean;
  has_ac: boolean;
  property_images: GetPropertySummary_getPropertySummary_data_property_details_property_images[];
}

export interface GetPropertySummary_getPropertySummary_data_property {
  __typename: "Property";
  _id: string;
  address_line: string;
  address_line_2: string | null;
  city: string;
  state: string;
  zip: string;
  details: GetPropertySummary_getPropertySummary_data_property_details | null;
}

export interface GetPropertySummary_getPropertySummary_data_leases_lease_lease_history_review_of_property {
  __typename: "ReviewAndResponse";
  rating: number;
  review: string;
  response: string | null;
}

export interface GetPropertySummary_getPropertySummary_data_leases_lease_lease_history_review_of_landlord {
  __typename: "ReviewAndResponse";
  rating: number;
  review: string;
  response: string | null;
}

export interface GetPropertySummary_getPropertySummary_data_leases_lease_lease_history_property_images {
  __typename: "LeaseImageInfo";
  s3_key: string;
  date_uploaded: string;
}

export interface GetPropertySummary_getPropertySummary_data_leases_lease_lease_history {
  __typename: "LeaseHistory";
  student_id: string;
  start_date: string;
  end_date: string;
  review_of_property: GetPropertySummary_getPropertySummary_data_leases_lease_lease_history_review_of_property | null;
  review_of_landlord: GetPropertySummary_getPropertySummary_data_leases_lease_lease_history_review_of_landlord | null;
  property_images: GetPropertySummary_getPropertySummary_data_leases_lease_lease_history_property_images[];
}

export interface GetPropertySummary_getPropertySummary_data_leases_lease_student_interests {
  __typename: "StudentInterest";
  student_id: string;
  date: string;
}

export interface GetPropertySummary_getPropertySummary_data_leases_lease_students_that_declined {
  __typename: "DeclineInfo";
  date: string;
  student_id: string;
}

export interface GetPropertySummary_getPropertySummary_data_leases_lease {
  __typename: "Lease";
  _id: string;
  price_per_month: number;
  lease_availability_start_date: string | null;
  lease_availability_end_date: string | null;
  lease_history: GetPropertySummary_getPropertySummary_data_leases_lease_lease_history[];
  student_interests: GetPropertySummary_getPropertySummary_data_leases_lease_student_interests[];
  students_that_declined: GetPropertySummary_getPropertySummary_data_leases_lease_students_that_declined[] | null;
}

export interface GetPropertySummary_getPropertySummary_data_leases {
  __typename: "LeaseAndAvailability";
  able_to_lease: boolean;
  lease: GetPropertySummary_getPropertySummary_data_leases_lease;
}

export interface GetPropertySummary_getPropertySummary_data_landlord {
  __typename: "Landlord";
  _id: string;
  first_name: string;
  last_name: string;
}

export interface GetPropertySummary_getPropertySummary_data {
  __typename: "PropertySummary";
  property: GetPropertySummary_getPropertySummary_data_property;
  leases: GetPropertySummary_getPropertySummary_data_leases[];
  landlord: GetPropertySummary_getPropertySummary_data_landlord;
}

export interface GetPropertySummary_getPropertySummary {
  __typename: "PropertySummaryAPIResponse";
  success: boolean;
  error: string | null;
  data: GetPropertySummary_getPropertySummary_data | null;
}

export interface GetPropertySummary {
  getPropertySummary: GetPropertySummary_getPropertySummary;
}

export interface GetPropertySummaryVariables {
  property_id: string;
  student_id: string;
}
