/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddReviewForLease
// ====================================================

export interface AddReviewForLease_addReviewForLease_data_occupant_doc_auth_info {
  __typename: "CasAuthInfo";
  cas_id: string | null;
  institution_id: string | null;
}

export interface AddReviewForLease_addReviewForLease_data_occupant_doc_user_settings_push_subscriptions_keys {
  __typename: "PushSubscriptionKeys";
  p256dh: string;
  auth: string;
}

export interface AddReviewForLease_addReviewForLease_data_occupant_doc_user_settings_push_subscriptions {
  __typename: "PushSubscription";
  endpoint: string;
  keys: AddReviewForLease_addReviewForLease_data_occupant_doc_user_settings_push_subscriptions_keys;
}

export interface AddReviewForLease_addReviewForLease_data_occupant_doc_user_settings {
  __typename: "StudentUserSettings";
  recieve_email_notifications: boolean;
  push_subscriptions: AddReviewForLease_addReviewForLease_data_occupant_doc_user_settings_push_subscriptions[];
}

export interface AddReviewForLease_addReviewForLease_data_occupant_doc_search_status {
  __typename: "SearchStatus";
  date_updated: string;
  searching: boolean;
  search_start: string | null;
  search_end: string | null;
  price_start: number | null;
  price_end: number | null;
}

export interface AddReviewForLease_addReviewForLease_data_occupant_doc {
  __typename: "Student";
  _id: string;
  first_name: string;
  phone_number: string | null;
  last_name: string;
  email: string;
  elevated_privileges: string[] | null;
  auth_info: AddReviewForLease_addReviewForLease_data_occupant_doc_auth_info | null;
  user_settings: AddReviewForLease_addReviewForLease_data_occupant_doc_user_settings | null;
  search_status: AddReviewForLease_addReviewForLease_data_occupant_doc_search_status | null;
}

export interface AddReviewForLease_addReviewForLease_data_priority {
  __typename: "LeasePriority";
  level: number;
  start_date: string;
  end_date: string;
}

export interface AddReviewForLease_addReviewForLease_data_lease_history_review_of_property {
  __typename: "ReviewAndResponse";
  rating: number;
  review: string;
  response: string | null;
}

export interface AddReviewForLease_addReviewForLease_data_lease_history_review_of_landlord {
  __typename: "ReviewAndResponse";
  rating: number;
  review: string;
  response: string | null;
}

export interface AddReviewForLease_addReviewForLease_data_lease_history_property_images {
  __typename: "LeaseImageInfo";
  s3_key: string;
  date_uploaded: string;
}

export interface AddReviewForLease_addReviewForLease_data_lease_history {
  __typename: "LeaseHistory";
  price: number;
  student_id: string;
  start_date: string;
  end_date: string;
  review_of_property: AddReviewForLease_addReviewForLease_data_lease_history_review_of_property | null;
  review_of_landlord: AddReviewForLease_addReviewForLease_data_lease_history_review_of_landlord | null;
  property_images: AddReviewForLease_addReviewForLease_data_lease_history_property_images[];
}

export interface AddReviewForLease_addReviewForLease_data_student_interests {
  __typename: "StudentInterest";
  student_id: string;
  date: string;
  accepted: boolean | null;
}

export interface AddReviewForLease_addReviewForLease_data_students_that_declined {
  __typename: "DeclineInfo";
  date: string;
  student_id: string;
}

export interface AddReviewForLease_addReviewForLease_data {
  __typename: "Lease";
  _id: string;
  active: boolean;
  ownership_id: string;
  price_per_month: number;
  occupant_id: string | null;
  occupant_doc: AddReviewForLease_addReviewForLease_data_occupant_doc | null;
  external_occupant: boolean;
  priority: AddReviewForLease_addReviewForLease_data_priority | null;
  lease_document_id: string | null;
  lease_availability_start_date: string | null;
  lease_availability_end_date: string | null;
  lease_history: AddReviewForLease_addReviewForLease_data_lease_history[];
  student_interests: AddReviewForLease_addReviewForLease_data_student_interests[];
  students_that_declined: AddReviewForLease_addReviewForLease_data_students_that_declined[] | null;
}

export interface AddReviewForLease_addReviewForLease {
  __typename: "LeaseAPIResponse";
  success: boolean;
  error: string | null;
  data: AddReviewForLease_addReviewForLease_data | null;
}

export interface AddReviewForLease {
  addReviewForLease: AddReviewForLease_addReviewForLease;
}

export interface AddReviewForLeaseVariables {
  lease_id: string;
  student_id: string;
  property_review: string;
  property_rating: number;
  landlord_review: string;
  landlord_rating: number;
  property_images: string[];
}
