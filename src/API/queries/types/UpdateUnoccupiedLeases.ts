/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LeaseUpdateInput } from "./../../graphqlGlobalTypes";

// ====================================================
// GraphQL mutation operation: UpdateUnoccupiedLeases
// ====================================================

export interface UpdateUnoccupiedLeases_updateUnoccupiedLeases_data_leases_occupant_doc_auth_info {
  __typename: "CasAuthInfo";
  cas_id: string | null;
  institution_id: string | null;
}

export interface UpdateUnoccupiedLeases_updateUnoccupiedLeases_data_leases_occupant_doc_user_settings_push_subscriptions_keys {
  __typename: "PushSubscriptionKeys";
  p256dh: string;
  auth: string;
}

export interface UpdateUnoccupiedLeases_updateUnoccupiedLeases_data_leases_occupant_doc_user_settings_push_subscriptions {
  __typename: "PushSubscription";
  endpoint: string;
  keys: UpdateUnoccupiedLeases_updateUnoccupiedLeases_data_leases_occupant_doc_user_settings_push_subscriptions_keys;
}

export interface UpdateUnoccupiedLeases_updateUnoccupiedLeases_data_leases_occupant_doc_user_settings {
  __typename: "StudentUserSettings";
  recieve_email_notifications: boolean;
  push_subscriptions: UpdateUnoccupiedLeases_updateUnoccupiedLeases_data_leases_occupant_doc_user_settings_push_subscriptions[];
}

export interface UpdateUnoccupiedLeases_updateUnoccupiedLeases_data_leases_occupant_doc_search_status {
  __typename: "SearchStatus";
  date_updated: string;
  searching: boolean;
  search_start: string | null;
  search_end: string | null;
  price_start: number | null;
  price_end: number | null;
}

export interface UpdateUnoccupiedLeases_updateUnoccupiedLeases_data_leases_occupant_doc {
  __typename: "Student";
  _id: string;
  first_name: string;
  phone_number: string | null;
  last_name: string;
  email: string | null;
  elevated_privileges: string[] | null;
  auth_info: UpdateUnoccupiedLeases_updateUnoccupiedLeases_data_leases_occupant_doc_auth_info | null;
  user_settings: UpdateUnoccupiedLeases_updateUnoccupiedLeases_data_leases_occupant_doc_user_settings | null;
  search_status: UpdateUnoccupiedLeases_updateUnoccupiedLeases_data_leases_occupant_doc_search_status | null;
}

export interface UpdateUnoccupiedLeases_updateUnoccupiedLeases_data_leases_priority {
  __typename: "LeasePriority";
  level: number;
  start_date: string;
  end_date: string;
}

export interface UpdateUnoccupiedLeases_updateUnoccupiedLeases_data_leases_lease_history_review_of_property {
  __typename: "ReviewAndResponse";
  rating: number;
  review: string;
  response: string | null;
}

export interface UpdateUnoccupiedLeases_updateUnoccupiedLeases_data_leases_lease_history_review_of_landlord {
  __typename: "ReviewAndResponse";
  rating: number;
  review: string;
  response: string | null;
}

export interface UpdateUnoccupiedLeases_updateUnoccupiedLeases_data_leases_lease_history_property_images {
  __typename: "LeaseImageInfo";
  s3_key: string;
  date_uploaded: string;
}

export interface UpdateUnoccupiedLeases_updateUnoccupiedLeases_data_leases_lease_history {
  __typename: "LeaseHistory";
  price: number;
  student_id: string;
  start_date: string;
  end_date: string;
  review_of_property: UpdateUnoccupiedLeases_updateUnoccupiedLeases_data_leases_lease_history_review_of_property | null;
  review_of_landlord: UpdateUnoccupiedLeases_updateUnoccupiedLeases_data_leases_lease_history_review_of_landlord | null;
  property_images: UpdateUnoccupiedLeases_updateUnoccupiedLeases_data_leases_lease_history_property_images[];
}

export interface UpdateUnoccupiedLeases_updateUnoccupiedLeases_data_leases_student_interests {
  __typename: "StudentInterest";
  student_id: string;
  date: string;
  accepted: boolean | null;
}

export interface UpdateUnoccupiedLeases_updateUnoccupiedLeases_data_leases_students_that_declined {
  __typename: "DeclineInfo";
  date: string;
  student_id: string;
}

export interface UpdateUnoccupiedLeases_updateUnoccupiedLeases_data_leases {
  __typename: "Lease";
  _id: string;
  active: boolean;
  ownership_id: string;
  price_per_month: number;
  occupant_id: string | null;
  occupant_doc: UpdateUnoccupiedLeases_updateUnoccupiedLeases_data_leases_occupant_doc | null;
  external_occupant: boolean;
  priority: UpdateUnoccupiedLeases_updateUnoccupiedLeases_data_leases_priority | null;
  lease_document_id: string | null;
  lease_availability_start_date: string | null;
  lease_availability_end_date: string | null;
  lease_history: UpdateUnoccupiedLeases_updateUnoccupiedLeases_data_leases_lease_history[];
  student_interests: UpdateUnoccupiedLeases_updateUnoccupiedLeases_data_leases_student_interests[];
  students_that_declined: UpdateUnoccupiedLeases_updateUnoccupiedLeases_data_leases_students_that_declined[] | null;
}

export interface UpdateUnoccupiedLeases_updateUnoccupiedLeases_data {
  __typename: "LeaseCollection";
  leases: UpdateUnoccupiedLeases_updateUnoccupiedLeases_data_leases[];
}

export interface UpdateUnoccupiedLeases_updateUnoccupiedLeases {
  __typename: "LeaseCollectionAPIResponse";
  success: boolean;
  error: string | null;
  data: UpdateUnoccupiedLeases_updateUnoccupiedLeases_data | null;
}

export interface UpdateUnoccupiedLeases {
  updateUnoccupiedLeases: UpdateUnoccupiedLeases_updateUnoccupiedLeases;
}

export interface UpdateUnoccupiedLeasesVariables {
  ownership_id: string;
  leases_info: LeaseUpdateInput[];
}
