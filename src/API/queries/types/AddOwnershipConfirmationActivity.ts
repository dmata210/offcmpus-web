/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddOwnershipConfirmationActivity
// ====================================================

export interface AddOwnershipConfirmationActivity_addOwnershipConfirmationActivity_data_property_doc_details_property_images {
  __typename: "PropertyImageInfo";
  s3_key: string;
  date_uploaded: string;
}

export interface AddOwnershipConfirmationActivity_addOwnershipConfirmationActivity_data_property_doc_details {
  __typename: "PropertyDetails";
  description: string;
  rooms: number;
  bathrooms: number;
  sq_ft: number;
  furnished: boolean;
  has_washer: boolean;
  has_heater: boolean;
  has_ac: boolean;
  property_images: AddOwnershipConfirmationActivity_addOwnershipConfirmationActivity_data_property_doc_details_property_images[];
}

export interface AddOwnershipConfirmationActivity_addOwnershipConfirmationActivity_data_property_doc {
  __typename: "Property";
  _id: string;
  landlord: string;
  address_line: string;
  address_line_2: string | null;
  city: string;
  state: string;
  zip: string;
  details: AddOwnershipConfirmationActivity_addOwnershipConfirmationActivity_data_property_doc_details | null;
}

export interface AddOwnershipConfirmationActivity_addOwnershipConfirmationActivity_data_landlord_doc {
  __typename: "Landlord";
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string | null;
}

export interface AddOwnershipConfirmationActivity_addOwnershipConfirmationActivity_data_ownership_documents {
  __typename: "OwnershipDocument";
  s3_doc_key: string;
  format: string;
  date_uploaded: string;
}

export interface AddOwnershipConfirmationActivity_addOwnershipConfirmationActivity_data_confirmation_activity {
  __typename: "ConfirmationActivity";
  user_id: string;
  user_type: string;
  message: string;
  date_submitted: string;
  full_name: string | null;
}

export interface AddOwnershipConfirmationActivity_addOwnershipConfirmationActivity_data_status_change_history {
  __typename: "StatusChangeInfo";
  status_changer_user_id: string;
  status_changer_user_type: string;
  date_changed: string;
  changed_from: string;
  changed_to: string;
  status_changer_full_name: string | null;
}

export interface AddOwnershipConfirmationActivity_addOwnershipConfirmationActivity_data {
  __typename: "Ownership";
  _id: string;
  property_id: string | null;
  landlord_id: string;
  date_submitted: string;
  status: string;
  property_doc: AddOwnershipConfirmationActivity_addOwnershipConfirmationActivity_data_property_doc | null;
  landlord_doc: AddOwnershipConfirmationActivity_addOwnershipConfirmationActivity_data_landlord_doc | null;
  ownership_documents: AddOwnershipConfirmationActivity_addOwnershipConfirmationActivity_data_ownership_documents[];
  confirmation_activity: AddOwnershipConfirmationActivity_addOwnershipConfirmationActivity_data_confirmation_activity[];
  status_change_history: AddOwnershipConfirmationActivity_addOwnershipConfirmationActivity_data_status_change_history[];
}

export interface AddOwnershipConfirmationActivity_addOwnershipConfirmationActivity {
  __typename: "OwnershipAPIResponse";
  success: boolean;
  error: string | null;
  data: AddOwnershipConfirmationActivity_addOwnershipConfirmationActivity_data | null;
}

export interface AddOwnershipConfirmationActivity {
  addOwnershipConfirmationActivity: AddOwnershipConfirmationActivity_addOwnershipConfirmationActivity;
}

export interface AddOwnershipConfirmationActivityVariables {
  ownership_id: string;
  user_id: string;
  user_type: string;
  message: string;
  date_submitted: string;
}
