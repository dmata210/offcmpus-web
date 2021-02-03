/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetOwnershipForProperty
// ====================================================

export interface GetOwnershipForProperty_getOwnershipForProperty_data_property_doc_details_property_images {
  __typename: "PropertyImageInfo";
  s3_key: string;
  date_uploaded: string;
}

export interface GetOwnershipForProperty_getOwnershipForProperty_data_property_doc_details {
  __typename: "PropertyDetails";
  description: string;
  rooms: number;
  bathrooms: number;
  sq_ft: number;
  furnished: boolean;
  has_washer: boolean;
  has_heater: boolean;
  has_ac: boolean;
  property_images: GetOwnershipForProperty_getOwnershipForProperty_data_property_doc_details_property_images[];
}

export interface GetOwnershipForProperty_getOwnershipForProperty_data_property_doc {
  __typename: "Property";
  _id: string;
  landlord: string;
  address_line: string;
  address_line_2: string | null;
  city: string;
  state: string;
  zip: string;
  details: GetOwnershipForProperty_getOwnershipForProperty_data_property_doc_details | null;
}

export interface GetOwnershipForProperty_getOwnershipForProperty_data_landlord_doc {
  __typename: "Landlord";
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string | null;
}

export interface GetOwnershipForProperty_getOwnershipForProperty_data_ownership_documents {
  __typename: "OwnershipDocument";
  s3_doc_key: string;
  format: string;
  date_uploaded: string;
}

export interface GetOwnershipForProperty_getOwnershipForProperty_data_confirmation_activity {
  __typename: "ConfirmationActivity";
  user_id: string;
  user_type: string;
  message: string;
  date_submitted: string;
  full_name: string | null;
}

export interface GetOwnershipForProperty_getOwnershipForProperty_data_status_change_history {
  __typename: "StatusChangeInfo";
  status_changer_user_id: string;
  status_changer_user_type: string;
  date_changed: string;
  changed_from: string;
  changed_to: string;
  status_changer_full_name: string | null;
}

export interface GetOwnershipForProperty_getOwnershipForProperty_data {
  __typename: "Ownership";
  _id: string;
  property_id: string | null;
  landlord_id: string;
  date_submitted: string;
  status: string;
  property_doc: GetOwnershipForProperty_getOwnershipForProperty_data_property_doc | null;
  landlord_doc: GetOwnershipForProperty_getOwnershipForProperty_data_landlord_doc | null;
  ownership_documents: GetOwnershipForProperty_getOwnershipForProperty_data_ownership_documents[];
  confirmation_activity: GetOwnershipForProperty_getOwnershipForProperty_data_confirmation_activity[];
  status_change_history: GetOwnershipForProperty_getOwnershipForProperty_data_status_change_history[];
}

export interface GetOwnershipForProperty_getOwnershipForProperty {
  __typename: "OwnershipAPIResponse";
  success: boolean;
  error: string | null;
  data: GetOwnershipForProperty_getOwnershipForProperty_data | null;
}

export interface GetOwnershipForProperty {
  getOwnershipForProperty: GetOwnershipForProperty_getOwnershipForProperty;
}

export interface GetOwnershipForPropertyVariables {
  property_id: string;
  landlord_id: string;
}
