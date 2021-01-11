/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OwnershipDocumentInput } from "./../../graphqlGlobalTypes";

// ====================================================
// GraphQL mutation operation: AddOwnershipDocuments
// ====================================================

export interface AddOwnershipDocuments_addOwnershipDocuments_data_property_doc_details_property_images {
  __typename: "PropertyImageInfo";
  s3_key: string;
  date_uploaded: string;
}

export interface AddOwnershipDocuments_addOwnershipDocuments_data_property_doc_details {
  __typename: "PropertyDetails";
  description: string;
  rooms: number;
  bathrooms: number;
  sq_ft: number;
  furnished: boolean;
  has_washer: boolean;
  has_heater: boolean;
  has_ac: boolean;
  property_images: AddOwnershipDocuments_addOwnershipDocuments_data_property_doc_details_property_images[];
}

export interface AddOwnershipDocuments_addOwnershipDocuments_data_property_doc {
  __typename: "Property";
  _id: string;
  landlord: string;
  address_line: string;
  address_line_2: string | null;
  city: string;
  state: string;
  zip: string;
  details: AddOwnershipDocuments_addOwnershipDocuments_data_property_doc_details | null;
}

export interface AddOwnershipDocuments_addOwnershipDocuments_data_landlord_doc {
  __typename: "Landlord";
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string | null;
}

export interface AddOwnershipDocuments_addOwnershipDocuments_data_ownership_documents {
  __typename: "OwnershipDocument";
  s3_doc_key: string;
  format: string;
  date_uploaded: string;
}

export interface AddOwnershipDocuments_addOwnershipDocuments_data_confirmation_activity {
  __typename: "ConfirmationActivity";
  user_id: string;
  user_type: string;
  message: string;
  date_submitted: string;
  full_name: string | null;
}

export interface AddOwnershipDocuments_addOwnershipDocuments_data_status_change_history {
  __typename: "StatusChangeInfo";
  status_changer_user_id: string;
  status_changer_user_type: string;
  date_changed: string;
  changed_from: string;
  changed_to: string;
  status_changer_full_name: string | null;
}

export interface AddOwnershipDocuments_addOwnershipDocuments_data {
  __typename: "Ownership";
  _id: string;
  property_id: string | null;
  landlord_id: string;
  date_submitted: string;
  status: string;
  property_doc: AddOwnershipDocuments_addOwnershipDocuments_data_property_doc | null;
  landlord_doc: AddOwnershipDocuments_addOwnershipDocuments_data_landlord_doc | null;
  ownership_documents: AddOwnershipDocuments_addOwnershipDocuments_data_ownership_documents[];
  confirmation_activity: AddOwnershipDocuments_addOwnershipDocuments_data_confirmation_activity[];
  status_change_history: AddOwnershipDocuments_addOwnershipDocuments_data_status_change_history[];
}

export interface AddOwnershipDocuments_addOwnershipDocuments {
  __typename: "OwnershipAPIResponse";
  success: boolean;
  error: string | null;
  data: AddOwnershipDocuments_addOwnershipDocuments_data | null;
}

export interface AddOwnershipDocuments {
  addOwnershipDocuments: AddOwnershipDocuments_addOwnershipDocuments;
}

export interface AddOwnershipDocumentsVariables {
  ownership_id: string;
  documents_info: OwnershipDocumentInput[];
}
