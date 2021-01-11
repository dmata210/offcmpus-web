/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddCollection
// ====================================================

export interface AddCollection_addPropertyToStudentCollection_data_collection_entries {
  __typename: "Property";
  _id: string;
}

export interface AddCollection_addPropertyToStudentCollection_data {
  __typename: "PropertyCollectionEntries";
  collection_entries: AddCollection_addPropertyToStudentCollection_data_collection_entries[];
}

export interface AddCollection_addPropertyToStudentCollection {
  __typename: "PropertyCollectionEntriesAPIResponse";
  success: boolean;
  error: string | null;
  data: AddCollection_addPropertyToStudentCollection_data | null;
}

export interface AddCollection {
  addPropertyToStudentCollection: AddCollection_addPropertyToStudentCollection;
}

export interface AddCollectionVariables {
  student_id: string;
  property_id: string;
}
