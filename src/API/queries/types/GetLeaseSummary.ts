/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetLeaseSummary
// ====================================================

export interface GetLeaseSummary_getLeaseSummary_data_property {
  __typename: "Property";
  _id: string;
  landlord: string;
  address_line: string;
  address_line_2: string | null;
  city: string;
  state: string;
  zip: string;
}

export interface GetLeaseSummary_getLeaseSummary_data_lease_priority {
  __typename: "LeasePriority";
  level: number;
  start_date: string;
  end_date: string;
}

export interface GetLeaseSummary_getLeaseSummary_data_lease_lease_history_review_of_property {
  __typename: "ReviewAndResponse";
  rating: number;
  review: string;
  response: string | null;
}

export interface GetLeaseSummary_getLeaseSummary_data_lease_lease_history_review_of_landlord {
  __typename: "ReviewAndResponse";
  rating: number;
  review: string;
  response: string | null;
}

export interface GetLeaseSummary_getLeaseSummary_data_lease_lease_history_property_images {
  __typename: "LeaseImageInfo";
  s3_key: string;
  date_uploaded: string;
}

export interface GetLeaseSummary_getLeaseSummary_data_lease_lease_history {
  __typename: "LeaseHistory";
  _id: string | null;
  price: number;
  student_id: string;
  start_date: string;
  end_date: string;
  review_of_property: GetLeaseSummary_getLeaseSummary_data_lease_lease_history_review_of_property | null;
  review_of_landlord: GetLeaseSummary_getLeaseSummary_data_lease_lease_history_review_of_landlord | null;
  property_images: GetLeaseSummary_getLeaseSummary_data_lease_lease_history_property_images[];
}

export interface GetLeaseSummary_getLeaseSummary_data_lease_student_interests {
  __typename: "StudentInterest";
  student_id: string;
  date: string;
  accepted: boolean | null;
}

export interface GetLeaseSummary_getLeaseSummary_data_lease_students_that_declined {
  __typename: "DeclineInfo";
  date: string;
  student_id: string;
}

export interface GetLeaseSummary_getLeaseSummary_data_lease {
  __typename: "Lease";
  _id: string;
  active: boolean;
  ownership_id: string;
  price_per_month: number;
  occupant_id: string | null;
  external_occupant: boolean;
  priority: GetLeaseSummary_getLeaseSummary_data_lease_priority | null;
  lease_document_id: string | null;
  lease_availability_start_date: string | null;
  lease_availability_end_date: string | null;
  lease_history: GetLeaseSummary_getLeaseSummary_data_lease_lease_history[];
  student_interests: GetLeaseSummary_getLeaseSummary_data_lease_student_interests[];
  students_that_declined: GetLeaseSummary_getLeaseSummary_data_lease_students_that_declined[] | null;
}

export interface GetLeaseSummary_getLeaseSummary_data_institutions_location {
  __typename: "InstitutionLocationInfo";
  address: string;
  city: string;
  state: string;
  zip: string;
  longitude: number;
  latitude: number;
}

export interface GetLeaseSummary_getLeaseSummary_data_institutions {
  __typename: "Institution";
  _id: string;
  name: string;
  s3_thumb_key: string | null;
  location: GetLeaseSummary_getLeaseSummary_data_institutions_location;
}

export interface GetLeaseSummary_getLeaseSummary_data_students_auth_info {
  __typename: "CasAuthInfo";
  institution_id: string | null;
}

export interface GetLeaseSummary_getLeaseSummary_data_students {
  __typename: "Student";
  _id: string;
  first_name: string;
  last_name: string;
  email: string | null;
  phone_number: string | null;
  auth_info: GetLeaseSummary_getLeaseSummary_data_students_auth_info | null;
}

export interface GetLeaseSummary_getLeaseSummary_data_lease_doc_documents {
  __typename: "S3Document";
  mime_type: string;
  s3_key: string;
}

export interface GetLeaseSummary_getLeaseSummary_data_lease_doc {
  __typename: "LeaseDocument";
  _id: string;
  lease_name: string;
  documents: GetLeaseSummary_getLeaseSummary_data_lease_doc_documents[];
  landlord_id: string;
}

export interface GetLeaseSummary_getLeaseSummary_data {
  __typename: "LeaseSummary";
  room_no: number;
  property: GetLeaseSummary_getLeaseSummary_data_property;
  lease: GetLeaseSummary_getLeaseSummary_data_lease;
  institutions: GetLeaseSummary_getLeaseSummary_data_institutions[];
  students: GetLeaseSummary_getLeaseSummary_data_students[];
  lease_doc: GetLeaseSummary_getLeaseSummary_data_lease_doc | null;
}

export interface GetLeaseSummary_getLeaseSummary {
  __typename: "LeaseSummaryAPIResponse";
  success: boolean;
  error: string | null;
  data: GetLeaseSummary_getLeaseSummary_data | null;
}

export interface GetLeaseSummary {
  getLeaseSummary: GetLeaseSummary_getLeaseSummary;
}

export interface GetLeaseSummaryVariables {
  lease_id: string;
}
