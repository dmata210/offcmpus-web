/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AcceptOrDeclineStudentInterest
// ====================================================

export interface AcceptOrDeclineStudentInterest_acceptOrDeclineStudentInterest_data_occupant_doc_auth_info {
  __typename: "CasAuthInfo";
  cas_id: string | null;
  institution_id: string | null;
}

export interface AcceptOrDeclineStudentInterest_acceptOrDeclineStudentInterest_data_occupant_doc_user_settings_push_subscriptions_keys {
  __typename: "PushSubscriptionKeys";
  p256dh: string;
  auth: string;
}

export interface AcceptOrDeclineStudentInterest_acceptOrDeclineStudentInterest_data_occupant_doc_user_settings_push_subscriptions {
  __typename: "PushSubscription";
  endpoint: string;
  keys: AcceptOrDeclineStudentInterest_acceptOrDeclineStudentInterest_data_occupant_doc_user_settings_push_subscriptions_keys;
}

export interface AcceptOrDeclineStudentInterest_acceptOrDeclineStudentInterest_data_occupant_doc_user_settings {
  __typename: "StudentUserSettings";
  recieve_email_notifications: boolean;
  push_subscriptions: AcceptOrDeclineStudentInterest_acceptOrDeclineStudentInterest_data_occupant_doc_user_settings_push_subscriptions[];
}

export interface AcceptOrDeclineStudentInterest_acceptOrDeclineStudentInterest_data_occupant_doc_search_status {
  __typename: "SearchStatus";
  date_updated: string;
  searching: boolean;
  search_start: string | null;
  search_end: string | null;
  price_start: number | null;
  price_end: number | null;
}

export interface AcceptOrDeclineStudentInterest_acceptOrDeclineStudentInterest_data_occupant_doc {
  __typename: "Student";
  _id: string;
  first_name: string;
  phone_number: string | null;
  last_name: string;
  email: string;
  elevated_privileges: string[] | null;
  auth_info: AcceptOrDeclineStudentInterest_acceptOrDeclineStudentInterest_data_occupant_doc_auth_info | null;
  user_settings: AcceptOrDeclineStudentInterest_acceptOrDeclineStudentInterest_data_occupant_doc_user_settings | null;
  search_status: AcceptOrDeclineStudentInterest_acceptOrDeclineStudentInterest_data_occupant_doc_search_status | null;
}

export interface AcceptOrDeclineStudentInterest_acceptOrDeclineStudentInterest_data_priority {
  __typename: "LeasePriority";
  level: number;
  start_date: string;
  end_date: string;
}

export interface AcceptOrDeclineStudentInterest_acceptOrDeclineStudentInterest_data_lease_history_review_of_property {
  __typename: "ReviewAndResponse";
  rating: number;
  review: string;
  response: string | null;
}

export interface AcceptOrDeclineStudentInterest_acceptOrDeclineStudentInterest_data_lease_history_review_of_landlord {
  __typename: "ReviewAndResponse";
  rating: number;
  review: string;
  response: string | null;
}

export interface AcceptOrDeclineStudentInterest_acceptOrDeclineStudentInterest_data_lease_history_property_images {
  __typename: "LeaseImageInfo";
  s3_key: string;
  date_uploaded: string;
}

export interface AcceptOrDeclineStudentInterest_acceptOrDeclineStudentInterest_data_lease_history {
  __typename: "LeaseHistory";
  price: number;
  student_id: string;
  start_date: string;
  end_date: string;
  review_of_property: AcceptOrDeclineStudentInterest_acceptOrDeclineStudentInterest_data_lease_history_review_of_property | null;
  review_of_landlord: AcceptOrDeclineStudentInterest_acceptOrDeclineStudentInterest_data_lease_history_review_of_landlord | null;
  property_images: AcceptOrDeclineStudentInterest_acceptOrDeclineStudentInterest_data_lease_history_property_images[];
}

export interface AcceptOrDeclineStudentInterest_acceptOrDeclineStudentInterest_data_student_interests {
  __typename: "StudentInterest";
  student_id: string;
  date: string;
  accepted: boolean | null;
}

export interface AcceptOrDeclineStudentInterest_acceptOrDeclineStudentInterest_data_students_that_declined {
  __typename: "DeclineInfo";
  date: string;
  student_id: string;
}

export interface AcceptOrDeclineStudentInterest_acceptOrDeclineStudentInterest_data {
  __typename: "Lease";
  _id: string;
  active: boolean;
  ownership_id: string;
  price_per_month: number;
  occupant_id: string | null;
  occupant_doc: AcceptOrDeclineStudentInterest_acceptOrDeclineStudentInterest_data_occupant_doc | null;
  external_occupant: boolean;
  priority: AcceptOrDeclineStudentInterest_acceptOrDeclineStudentInterest_data_priority | null;
  lease_document_id: string | null;
  lease_availability_start_date: string | null;
  lease_availability_end_date: string | null;
  lease_history: AcceptOrDeclineStudentInterest_acceptOrDeclineStudentInterest_data_lease_history[];
  student_interests: AcceptOrDeclineStudentInterest_acceptOrDeclineStudentInterest_data_student_interests[];
  students_that_declined: AcceptOrDeclineStudentInterest_acceptOrDeclineStudentInterest_data_students_that_declined[] | null;
}

export interface AcceptOrDeclineStudentInterest_acceptOrDeclineStudentInterest {
  __typename: "LeaseAPIResponse";
  success: boolean;
  error: string | null;
  data: AcceptOrDeclineStudentInterest_acceptOrDeclineStudentInterest_data | null;
}

export interface AcceptOrDeclineStudentInterest {
  acceptOrDeclineStudentInterest: AcceptOrDeclineStudentInterest_acceptOrDeclineStudentInterest;
}

export interface AcceptOrDeclineStudentInterestVariables {
  action: string;
  student_id: string;
  lease_id: string;
}
