/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAcceptedLeaseInfo
// ====================================================

export interface GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_lease_history_review_of_property {
  __typename: "ReviewAndResponse";
  rating: number;
  review: string;
  response: string | null;
}

export interface GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_lease_history_review_of_landlord {
  __typename: "ReviewAndResponse";
  rating: number;
  review: string;
  response: string | null;
}

export interface GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_lease_history_property_images {
  __typename: "LeaseImageInfo";
  s3_key: string;
  date_uploaded: string;
}

export interface GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_lease_history {
  __typename: "LeaseHistory";
  price: number;
  student_id: string;
  start_date: string;
  end_date: string;
  review_of_property: GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_lease_history_review_of_property | null;
  review_of_landlord: GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_lease_history_review_of_landlord | null;
  property_images: GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_lease_history_property_images[];
}

export interface GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_landlord {
  __typename: "Landlord";
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string | null;
}

export interface GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_lease_occupant_doc_auth_info {
  __typename: "CasAuthInfo";
  cas_id: string | null;
  institution_id: string | null;
}

export interface GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_lease_occupant_doc_user_settings_push_subscriptions_keys {
  __typename: "PushSubscriptionKeys";
  p256dh: string;
  auth: string;
}

export interface GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_lease_occupant_doc_user_settings_push_subscriptions {
  __typename: "PushSubscription";
  endpoint: string;
  keys: GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_lease_occupant_doc_user_settings_push_subscriptions_keys;
}

export interface GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_lease_occupant_doc_user_settings {
  __typename: "StudentUserSettings";
  recieve_email_notifications: boolean;
  push_subscriptions: GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_lease_occupant_doc_user_settings_push_subscriptions[];
}

export interface GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_lease_occupant_doc_search_status {
  __typename: "SearchStatus";
  date_updated: string;
  searching: boolean;
  search_start: string | null;
  search_end: string | null;
  price_start: number | null;
  price_end: number | null;
}

export interface GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_lease_occupant_doc {
  __typename: "Student";
  _id: string;
  first_name: string;
  phone_number: string | null;
  last_name: string;
  email: string | null;
  elevated_privileges: string[] | null;
  auth_info: GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_lease_occupant_doc_auth_info | null;
  user_settings: GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_lease_occupant_doc_user_settings | null;
  search_status: GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_lease_occupant_doc_search_status | null;
}

export interface GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_lease_priority {
  __typename: "LeasePriority";
  level: number;
  start_date: string;
  end_date: string;
}

export interface GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_lease_lease_history_review_of_property {
  __typename: "ReviewAndResponse";
  rating: number;
  review: string;
  response: string | null;
}

export interface GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_lease_lease_history_review_of_landlord {
  __typename: "ReviewAndResponse";
  rating: number;
  review: string;
  response: string | null;
}

export interface GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_lease_lease_history_property_images {
  __typename: "LeaseImageInfo";
  s3_key: string;
  date_uploaded: string;
}

export interface GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_lease_lease_history {
  __typename: "LeaseHistory";
  price: number;
  student_id: string;
  start_date: string;
  end_date: string;
  review_of_property: GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_lease_lease_history_review_of_property | null;
  review_of_landlord: GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_lease_lease_history_review_of_landlord | null;
  property_images: GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_lease_lease_history_property_images[];
}

export interface GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_lease_student_interests {
  __typename: "StudentInterest";
  student_id: string;
  date: string;
  accepted: boolean | null;
}

export interface GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_lease_students_that_declined {
  __typename: "DeclineInfo";
  date: string;
  student_id: string;
}

export interface GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_lease {
  __typename: "Lease";
  _id: string;
  active: boolean;
  ownership_id: string;
  price_per_month: number;
  occupant_id: string | null;
  occupant_doc: GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_lease_occupant_doc | null;
  external_occupant: boolean;
  priority: GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_lease_priority | null;
  lease_document_id: string | null;
  lease_availability_start_date: string | null;
  lease_availability_end_date: string | null;
  lease_history: GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_lease_lease_history[];
  student_interests: GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_lease_student_interests[];
  students_that_declined: GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_lease_students_that_declined[] | null;
}

export interface GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_property_details_property_images {
  __typename: "PropertyImageInfo";
  s3_key: string;
  date_uploaded: string;
}

export interface GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_property_details {
  __typename: "PropertyDetails";
  description: string;
  rooms: number;
  bathrooms: number;
  sq_ft: number;
  furnished: boolean;
  has_washer: boolean;
  has_heater: boolean;
  has_ac: boolean;
  property_images: GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_property_details_property_images[];
}

export interface GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_property_directions_foot_walking_directions {
  __typename: "DirectionCoordinates";
  distance: number;
  coordinates: number[][];
}

export interface GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_property_directions_driving_car_directions {
  __typename: "DirectionCoordinates";
  distance: number;
  coordinates: number[][];
}

export interface GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_property_directions_cycling_regular_directions {
  __typename: "DirectionCoordinates";
  distance: number;
  coordinates: number[][];
}

export interface GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_property_directions {
  __typename: "PropertyDirections";
  institution_id: string;
  foot_walking_directions: GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_property_directions_foot_walking_directions[] | null;
  driving_car_directions: GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_property_directions_driving_car_directions[] | null;
  cycling_regular_directions: GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_property_directions_cycling_regular_directions[] | null;
}

export interface GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_property {
  __typename: "Property";
  _id: string;
  landlord: string;
  address_line: string;
  address_line_2: string | null;
  city: string;
  state: string;
  zip: string;
  details: GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_property_details | null;
  directions: GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_property_directions[] | null;
}

export interface GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data {
  __typename: "LeaseHistorySummary";
  room_no: number;
  lease_history_id: string;
  lease_history: GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_lease_history;
  landlord: GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_landlord;
  lease: GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_lease;
  property: GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data_property;
}

export interface GetAcceptedLeaseInfo_getAcceptedLeaseInfo {
  __typename: "LeaseHistorySummaryAPIResponse";
  success: boolean;
  error: string | null;
  data: GetAcceptedLeaseInfo_getAcceptedLeaseInfo_data | null;
}

export interface GetAcceptedLeaseInfo {
  getAcceptedLeaseInfo: GetAcceptedLeaseInfo_getAcceptedLeaseInfo;
}

export interface GetAcceptedLeaseInfoVariables {
  student_id: string;
  lease_id: string;
  history_id: string;
}
