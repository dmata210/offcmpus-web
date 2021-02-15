/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddPropertyToStudentCollection
// ====================================================

export interface AddPropertyToStudentCollection_addPropertyToStudentCollection_data_collection_entries {
  __typename: "Property";
  _id: string;
  landlord: string;
  address_line: string;
  address_line_2: string | null;
  city: string;
  state: string;
  zip: string;
}

export interface AddPropertyToStudentCollection_addPropertyToStudentCollection_data {
  __typename: "PropertyCollectionEntries";
  collection_entries: AddPropertyToStudentCollection_addPropertyToStudentCollection_data_collection_entries[];
}

export interface AddPropertyToStudentCollection_addPropertyToStudentCollection {
  __typename: "PropertyCollectionEntriesAPIResponse";
  success: boolean;
  error: string | null;
  data: AddPropertyToStudentCollection_addPropertyToStudentCollection_data | null;
}

export interface AddPropertyToStudentCollection {
  addPropertyToStudentCollection: AddPropertyToStudentCollection_addPropertyToStudentCollection;
}

export interface AddPropertyToStudentCollectionVariables {
  student_id: string;
  property_id: string;
}
