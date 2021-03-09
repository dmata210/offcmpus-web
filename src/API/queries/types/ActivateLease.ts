/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ActivateLease
// ====================================================

export interface ActivateLease_activateLease_data_occupant_doc_auth_info {
  __typename: "CasAuthInfo";
  cas_id: string | null;
  institution_id: string | null;
}

export interface ActivateLease_activateLease_data_occupant_doc_user_settings_push_subscriptions_keys {
  __typename: "PushSubscriptionKeys";
  p256dh: string;
  auth: string;
}

export interface ActivateLease_activateLease_data_occupant_doc_user_settings_push_subscriptions {
  __typename: "PushSubscription";
  endpoint: string;
  keys: ActivateLease_activateLease_data_occupant_doc_user_settings_push_subscriptions_keys;
}

export interface ActivateLease_activateLease_data_occupant_doc_user_settings {
  __typename: "StudentUserSettings";
  recieve_email_notifications: boolean;
  push_subscriptions: ActivateLease_activateLease_data_occupant_doc_user_settings_push_subscriptions[];
}

export interface ActivateLease_activateLease_data_occupant_doc_search_status {
  __typename: "SearchStatus";
  date_updated: string;
  searching: boolean;
  search_start: string | null;
  search_end: string | null;
  price_start: number | null;
  price_end: number | null;
}

export interface ActivateLease_activateLease_data_occupant_doc {
  __typename: "Student";
  _id: string;
  first_name: string;
  phone_number: string | null;
  last_name: string;
  email: string | null;
  elevated_privileges: string[] | null;
  auth_info: ActivateLease_activateLease_data_occupant_doc_auth_info | null;
  user_settings: ActivateLease_activateLease_data_occupant_doc_user_settings | null;
  search_status: ActivateLease_activateLease_data_occupant_doc_search_status | null;
}

export interface ActivateLease_activateLease_data_priority {
  __typename: "LeasePriority";
  level: number;
  start_date: string;
  end_date: string;
}

export interface ActivateLease_activateLease_data_lease_history_review_of_property {
  __typename: "ReviewAndResponse";
  rating: number;
  review: string;
  response: string | null;
}

export interface ActivateLease_activateLease_data_lease_history_review_of_landlord {
  __typename: "ReviewAndResponse";
  rating: number;
  review: string;
  response: string | null;
}

export interface ActivateLease_activateLease_data_lease_history_property_images {
  __typename: "LeaseImageInfo";
  s3_key: string;
  date_uploaded: string;
}

export interface ActivateLease_activateLease_data_lease_history {
  __typename: "LeaseHistory";
  price: number;
  student_id: string;
  start_date: string;
  end_date: string;
  review_of_property: ActivateLease_activateLease_data_lease_history_review_of_property | null;
  review_of_landlord: ActivateLease_activateLease_data_lease_history_review_of_landlord | null;
  property_images: ActivateLease_activateLease_data_lease_history_property_images[];
}

export interface ActivateLease_activateLease_data_student_interests {
  __typename: "StudentInterest";
  student_id: string;
  date: string;
  accepted: boolean | null;
}

export interface ActivateLease_activateLease_data_students_that_declined {
  __typename: "DeclineInfo";
  date: string;
  student_id: string;
}

export interface ActivateLease_activateLease_data {
  __typename: "Lease";
  _id: string;
  active: boolean;
  ownership_id: string;
  price_per_month: number;
  occupant_id: string | null;
  occupant_doc: ActivateLease_activateLease_data_occupant_doc | null;
  external_occupant: boolean;
  priority: ActivateLease_activateLease_data_priority | null;
  lease_document_id: string | null;
  lease_availability_start_date: string | null;
  lease_availability_end_date: string | null;
  lease_history: ActivateLease_activateLease_data_lease_history[];
  student_interests: ActivateLease_activateLease_data_student_interests[];
  students_that_declined: ActivateLease_activateLease_data_students_that_declined[] | null;
}

export interface ActivateLease_activateLease {
  __typename: "LeaseAPIResponse";
  success: boolean;
  error: string | null;
  data: ActivateLease_activateLease_data | null;
}

export interface ActivateLease {
  activateLease: ActivateLease_activateLease;
}

export interface ActivateLeaseVariables {
  lease_id: string;
  lease_document_id: string;
  price_per_month: number;
  lease_start_date: string;
  lease_end_date: string;
}
