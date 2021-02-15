/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GgetLeaseSummary
// ====================================================

export interface GgetLeaseSummary_getLeaseSummary_data_property {
  __typename: "Property";
  _id: string;
  landlord: string;
  address_line: string;
  address_line_2: string | null;
  city: string;
  state: string;
  zip: string;
}

export interface GgetLeaseSummary_getLeaseSummary_data_lease_priority {
  __typename: "LeasePriority";
  level: number;
  start_date: string;
  end_date: string;
}

export interface GgetLeaseSummary_getLeaseSummary_data_lease_lease_history_review_of_property {
  __typename: "ReviewAndResponse";
  rating: number;
  review: string;
  response: string | null;
}

export interface GgetLeaseSummary_getLeaseSummary_data_lease_lease_history_review_of_landlord {
  __typename: "ReviewAndResponse";
  rating: number;
  review: string;
  response: string | null;
}

export interface GgetLeaseSummary_getLeaseSummary_data_lease_lease_history_property_images {
  __typename: "LeaseImageInfo";
  s3_key: string;
  date_uploaded: string;
}

export interface GgetLeaseSummary_getLeaseSummary_data_lease_lease_history {
  __typename: "LeaseHistory";
  price: number;
  student_id: string;
  start_date: string;
  end_date: string;
  review_of_property: GgetLeaseSummary_getLeaseSummary_data_lease_lease_history_review_of_property | null;
  review_of_landlord: GgetLeaseSummary_getLeaseSummary_data_lease_lease_history_review_of_landlord | null;
  property_images: GgetLeaseSummary_getLeaseSummary_data_lease_lease_history_property_images[];
}

export interface GgetLeaseSummary_getLeaseSummary_data_lease_student_interests {
  __typename: "StudentInterest";
  student_id: string;
  date: string;
}

export interface GgetLeaseSummary_getLeaseSummary_data_lease {
  __typename: "Lease";
  _id: string;
  active: boolean;
  ownership_id: string;
  price_per_month: number;
  occupant_id: string | null;
  external_occupant: boolean;
  priority: GgetLeaseSummary_getLeaseSummary_data_lease_priority | null;
  lease_document_id: string | null;
  lease_availability_start_date: string | null;
  lease_availability_end_date: string | null;
  lease_history: GgetLeaseSummary_getLeaseSummary_data_lease_lease_history[];
  student_interests: GgetLeaseSummary_getLeaseSummary_data_lease_student_interests[];
}

export interface GgetLeaseSummary_getLeaseSummary_data_institutions_location {
  __typename: "InstitutionLocationInfo";
  address: string;
  city: string;
  state: string;
  zip: string;
  longitude: number;
  latitude: number;
}

export interface GgetLeaseSummary_getLeaseSummary_data_institutions {
  __typename: "Institution";
  _id: string;
  name: string;
  s3_thumb_key: string | null;
  location: GgetLeaseSummary_getLeaseSummary_data_institutions_location;
}

export interface GgetLeaseSummary_getLeaseSummary_data_students {
  __typename: "Student";
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
}

export interface GgetLeaseSummary_getLeaseSummary_data {
  __typename: "LeaseSummary";
  room_no: number;
  property: GgetLeaseSummary_getLeaseSummary_data_property;
  lease: GgetLeaseSummary_getLeaseSummary_data_lease;
  institutions: GgetLeaseSummary_getLeaseSummary_data_institutions[];
  students: GgetLeaseSummary_getLeaseSummary_data_students[];
}

export interface GgetLeaseSummary_getLeaseSummary {
  __typename: "LeaseSummaryAPIResponse";
  success: boolean;
  error: string | null;
  data: GgetLeaseSummary_getLeaseSummary_data | null;
}

export interface GgetLeaseSummary {
  getLeaseSummary: GgetLeaseSummary_getLeaseSummary;
}

export interface GgetLeaseSummaryVariables {
  lease_id: string;
}
