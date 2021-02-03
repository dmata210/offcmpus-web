/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RemoveCollection
// ====================================================

export interface RemoveCollection_removePropertyFromStudentCollection_data_collection_entries {
  __typename: "Property";
  _id: string;
}

export interface RemoveCollection_removePropertyFromStudentCollection_data {
  __typename: "PropertyCollectionEntries";
  collection_entries: RemoveCollection_removePropertyFromStudentCollection_data_collection_entries[];
}

export interface RemoveCollection_removePropertyFromStudentCollection {
  __typename: "PropertyCollectionEntriesAPIResponse";
  success: boolean;
  error: string | null;
  data: RemoveCollection_removePropertyFromStudentCollection_data | null;
}

export interface RemoveCollection {
  removePropertyFromStudentCollection: RemoveCollection_removePropertyFromStudentCollection;
}

export interface RemoveCollectionVariables {
  student_id: string;
  property_id: string;
}
