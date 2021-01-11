/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ChangeOwnershipStatus
// ====================================================

export interface ChangeOwnershipStatus_changeOwnershipStatus_data_property_doc_details_property_images {
  __typename: "PropertyImageInfo";
  s3_key: string;
  date_uploaded: string;
}

export interface ChangeOwnershipStatus_changeOwnershipStatus_data_property_doc_details {
  __typename: "PropertyDetails";
  description: string;
  rooms: number;
  bathrooms: number;
  sq_ft: number;
  furnished: boolean;
  has_washer: boolean;
  has_heater: boolean;
  has_ac: boolean;
  property_images: ChangeOwnershipStatus_changeOwnershipStatus_data_property_doc_details_property_images[];
}

export interface ChangeOwnershipStatus_changeOwnershipStatus_data_property_doc {
  __typename: "Property";
  _id: string;
  landlord: string;
  address_line: string;
  address_line_2: string | null;
  city: string;
  state: string;
  zip: string;
  details: ChangeOwnershipStatus_changeOwnershipStatus_data_property_doc_details | null;
}

export interface ChangeOwnershipStatus_changeOwnershipStatus_data_landlord_doc {
  __typename: "Landlord";
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string | null;
}

export interface ChangeOwnershipStatus_changeOwnershipStatus_data_ownership_documents {
  __typename: "OwnershipDocument";
  s3_doc_key: string;
  format: string;
  date_uploaded: string;
}

export interface ChangeOwnershipStatus_changeOwnershipStatus_data_confirmation_activity {
  __typename: "ConfirmationActivity";
  user_id: string;
  user_type: string;
  message: string;
  date_submitted: string;
  full_name: string | null;
}

export interface ChangeOwnershipStatus_changeOwnershipStatus_data_status_change_history {
  __typename: "StatusChangeInfo";
  status_changer_user_id: string;
  status_changer_user_type: string;
  date_changed: string;
  changed_from: string;
  changed_to: string;
  status_changer_full_name: string | null;
}

export interface ChangeOwnershipStatus_changeOwnershipStatus_data {
  __typename: "Ownership";
  _id: string;
  property_id: string | null;
  landlord_id: string;
  date_submitted: string;
  status: string;
  property_doc: ChangeOwnershipStatus_changeOwnershipStatus_data_property_doc | null;
  landlord_doc: ChangeOwnershipStatus_changeOwnershipStatus_data_landlord_doc | null;
  ownership_documents: ChangeOwnershipStatus_changeOwnershipStatus_data_ownership_documents[];
  confirmation_activity: ChangeOwnershipStatus_changeOwnershipStatus_data_confirmation_activity[];
  status_change_history: ChangeOwnershipStatus_changeOwnershipStatus_data_status_change_history[];
}

export interface ChangeOwnershipStatus_changeOwnershipStatus {
  __typename: "OwnershipAPIResponse";
  success: boolean;
  error: string | null;
  data: ChangeOwnershipStatus_changeOwnershipStatus_data | null;
}

export interface ChangeOwnershipStatus {
  changeOwnershipStatus: ChangeOwnershipStatus_changeOwnershipStatus;
}

export interface ChangeOwnershipStatusVariables {
  ownership_id: string;
  new_status: string;
  status_changer_user_id: string;
  status_changer_user_type: string;
  with_landlord: boolean;
  with_property: boolean;
}
