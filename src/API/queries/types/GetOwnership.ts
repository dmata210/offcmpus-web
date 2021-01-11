/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetOwnership
// ====================================================

export interface GetOwnership_getOwnership_data_property_doc_details_property_images {
  __typename: "PropertyImageInfo";
  s3_key: string;
  date_uploaded: string;
}

export interface GetOwnership_getOwnership_data_property_doc_details {
  __typename: "PropertyDetails";
  description: string;
  rooms: number;
  bathrooms: number;
  sq_ft: number;
  furnished: boolean;
  has_washer: boolean;
  has_heater: boolean;
  has_ac: boolean;
  property_images: GetOwnership_getOwnership_data_property_doc_details_property_images[];
}

export interface GetOwnership_getOwnership_data_property_doc {
  __typename: "Property";
  _id: string;
  landlord: string;
  address_line: string;
  address_line_2: string | null;
  city: string;
  state: string;
  zip: string;
  details: GetOwnership_getOwnership_data_property_doc_details | null;
}

export interface GetOwnership_getOwnership_data_landlord_doc {
  __typename: "Landlord";
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string | null;
}

export interface GetOwnership_getOwnership_data_ownership_documents {
  __typename: "OwnershipDocument";
  s3_doc_key: string;
  format: string;
  date_uploaded: string;
}

export interface GetOwnership_getOwnership_data_confirmation_activity {
  __typename: "ConfirmationActivity";
  user_id: string;
  user_type: string;
  message: string;
  date_submitted: string;
  full_name: string | null;
}

export interface GetOwnership_getOwnership_data_status_change_history {
  __typename: "StatusChangeInfo";
  status_changer_user_id: string;
  status_changer_user_type: string;
  date_changed: string;
  changed_from: string;
  changed_to: string;
  status_changer_full_name: string | null;
}

export interface GetOwnership_getOwnership_data {
  __typename: "Ownership";
  _id: string;
  property_id: string | null;
  landlord_id: string;
  date_submitted: string;
  status: string;
  property_doc: GetOwnership_getOwnership_data_property_doc | null;
  landlord_doc: GetOwnership_getOwnership_data_landlord_doc | null;
  ownership_documents: GetOwnership_getOwnership_data_ownership_documents[];
  confirmation_activity: GetOwnership_getOwnership_data_confirmation_activity[];
  status_change_history: GetOwnership_getOwnership_data_status_change_history[];
}

export interface GetOwnership_getOwnership {
  __typename: "OwnershipAPIResponse";
  success: boolean;
  error: string | null;
  data: GetOwnership_getOwnership_data | null;
}

export interface GetOwnership {
  getOwnership: GetOwnership_getOwnership;
}

export interface GetOwnershipVariables {
  ownership_id: string;
}
