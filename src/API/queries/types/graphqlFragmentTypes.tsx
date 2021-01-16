import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  getLandlord: LandlordApiResponse;
  resendEamilConfirmation: LandlordApiResponse;
  getStudent: StudentApiResponse;
  getStudentSavedCollection: PropertyCollectionEntriesApiResponse;
  getProperty: PropertyApiResponse;
  getPropertyOwnedByLandlord: PropertyApiResponse;
  searchProperties: PropertyListApiResponse;
  getPropertiesForLandlord: PropertyListApiResponse;
  verifyAddress: AddressVerificationApiResponse;
  getInstitution: InstitutionApiResponse;
  getMatchingInstitutions: InstitutionListApiResponse;
  getOwnership: OwnershipApiResponse;
  getOwnershipsInReview: OwnershipCollectionApiResponse;
  getOwnershipsForLandlord: OwnershipCollectionApiResponse;
  getOwnershipConflicts: OwnershipCollectionApiResponse;
  getFeedback: FeedbackCollectionApiResponse;
};


export type QueryGetLandlordArgs = {
  _id: Scalars['String'];
};


export type QueryResendEamilConfirmationArgs = {
  landlord_id: Scalars['String'];
};


export type QueryGetStudentArgs = {
  _id: Scalars['String'];
};


export type QueryGetStudentSavedCollectionArgs = {
  collectionOptions: CollectionFetchInput;
  _id: Scalars['String'];
};


export type QueryGetPropertyArgs = {
  withLandlord: Scalars['Boolean'];
  reviewOptions: PropertyReviewInput;
  _id: Scalars['String'];
};


export type QueryGetPropertyOwnedByLandlordArgs = {
  landlord_id: Scalars['String'];
  property_id: Scalars['String'];
};


export type QuerySearchPropertiesArgs = {
  searchOptions: PropertySearchInput;
};


export type QueryGetPropertiesForLandlordArgs = {
  status?: Maybe<Scalars['String']>;
  landlord_id: Scalars['String'];
};


export type QueryVerifyAddressArgs = {
  zip: Scalars['String'];
  state: Scalars['String'];
  city: Scalars['String'];
  address_2: Scalars['String'];
  address_1: Scalars['String'];
};


export type QueryGetInstitutionArgs = {
  _id: Scalars['String'];
};


export type QueryGetMatchingInstitutionsArgs = {
  partial_name: Scalars['String'];
};


export type QueryGetOwnershipArgs = {
  _id: Scalars['String'];
};


export type QueryGetOwnershipsForLandlordArgs = {
  with_landlord?: Maybe<Scalars['Boolean']>;
  with_properties?: Maybe<Scalars['Boolean']>;
  landlord_id: Scalars['String'];
};


export type QueryGetOwnershipConflictsArgs = {
  ownership_id: Scalars['String'];
};


export type QueryGetFeedbackArgs = {
  limit: Scalars['Float'];
  offset: Scalars['Float'];
};

export type LandlordApiResponse = {
  __typename?: 'LandlordAPIResponse';
  success: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  data?: Maybe<Landlord>;
};

/** Landlord model */
export type Landlord = {
  __typename?: 'Landlord';
  _id: Scalars['ID'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  email: Scalars['String'];
  phone_number?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  confirmation_key?: Maybe<Scalars['String']>;
  onboarded?: Maybe<Scalars['Boolean']>;
  user_settings?: Maybe<LandlordUserSettings>;
};

/** Landlord User Settings */
export type LandlordUserSettings = {
  __typename?: 'LandlordUserSettings';
  recieve_email_notifications: Scalars['Boolean'];
  push_subscriptions: Array<PushSubscription>;
};

/** Push Subscription Details */
export type PushSubscription = {
  __typename?: 'PushSubscription';
  endpoint: Scalars['String'];
  keys: PushSubscriptionKeys;
};

/** Keys for push subscription */
export type PushSubscriptionKeys = {
  __typename?: 'PushSubscriptionKeys';
  p256dh: Scalars['String'];
  auth: Scalars['String'];
};

export type StudentApiResponse = {
  __typename?: 'StudentAPIResponse';
  success: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  data?: Maybe<Student>;
};

/** Student model */
export type Student = {
  __typename?: 'Student';
  _id: Scalars['ID'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  email: Scalars['String'];
  phone_number: Scalars['String'];
  auth_info?: Maybe<CasAuthInfo>;
  saved_collection?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<Scalars['String']>;
  elevated_privileges?: Maybe<Array<Scalars['String']>>;
  confirmation_key?: Maybe<Array<Scalars['String']>>;
  user_settings?: Maybe<StudentUserSettings>;
  search_status?: Maybe<SearchStatus>;
};

/** Cas Auth Information */
export type CasAuthInfo = {
  __typename?: 'CasAuthInfo';
  cas_id?: Maybe<Scalars['String']>;
  institution_id?: Maybe<Scalars['String']>;
};

/** Student User Settinhs */
export type StudentUserSettings = {
  __typename?: 'StudentUserSettings';
  recieve_email_notifications: Scalars['Boolean'];
  push_subscriptions: Array<PushSubscription>;
};

/** Status of student search */
export type SearchStatus = {
  __typename?: 'SearchStatus';
  date_updated: Scalars['String'];
  searching: Scalars['Boolean'];
  search_start?: Maybe<Scalars['String']>;
  search_end?: Maybe<Scalars['String']>;
  price_start?: Maybe<Scalars['Float']>;
  price_end?: Maybe<Scalars['Float']>;
};

export type PropertyCollectionEntriesApiResponse = {
  __typename?: 'PropertyCollectionEntriesAPIResponse';
  success: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  data?: Maybe<PropertyCollectionEntries>;
};

/** An array of collection entries */
export type PropertyCollectionEntries = {
  __typename?: 'PropertyCollectionEntries';
  collection_entries: Array<Property>;
};

/** Property model */
export type Property = {
  __typename?: 'Property';
  _id: Scalars['ID'];
  landlord: Scalars['String'];
  landlord_doc?: Maybe<Landlord>;
  address_line: Scalars['String'];
  address_line_2?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  state: Scalars['String'];
  zip: Scalars['String'];
  details?: Maybe<PropertyDetails>;
};

/** Details describing the property */
export type PropertyDetails = {
  __typename?: 'PropertyDetails';
  description: Scalars['String'];
  rooms: Scalars['Int'];
  bathrooms: Scalars['Int'];
  sq_ft: Scalars['Float'];
  furnished: Scalars['Boolean'];
  has_washer: Scalars['Boolean'];
  has_heater: Scalars['Boolean'];
  has_ac: Scalars['Boolean'];
  property_images: Array<PropertyImageInfo>;
};

/** Property Image info */
export type PropertyImageInfo = {
  __typename?: 'PropertyImageInfo';
  s3_key: Scalars['String'];
  date_uploaded: Scalars['String'];
};

export type CollectionFetchInput = {
  offset: Scalars['Int'];
  count: Scalars['Int'];
};

export type PropertyApiResponse = {
  __typename?: 'PropertyAPIResponse';
  success: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  data?: Maybe<Property>;
};

export type PropertyReviewInput = {
  withReviews: Scalars['Boolean'];
  offset?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
};

export type PropertyListApiResponse = {
  __typename?: 'PropertyListAPIResponse';
  success: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  data?: Maybe<PropertyList>;
};

/** Collection of properties */
export type PropertyList = {
  __typename?: 'PropertyList';
  properties: Array<Property>;
};

export type PropertySearchInput = {
  offset?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
};

export type AddressVerificationApiResponse = {
  __typename?: 'AddressVerificationAPIResponse';
  success: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  data?: Maybe<AddressVerification>;
};

/** Response from USPS Address Verify API */
export type AddressVerification = {
  __typename?: 'AddressVerification';
  address_1: Scalars['String'];
  address_2: Scalars['String'];
  city: Scalars['String'];
  state: Scalars['String'];
  zip: Scalars['String'];
};

export type InstitutionApiResponse = {
  __typename?: 'InstitutionAPIResponse';
  success: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  data?: Maybe<Institution>;
};

/** Institution Model */
export type Institution = {
  __typename?: 'Institution';
  _id: Scalars['ID'];
  name: Scalars['String'];
  location: InstitutionLocationInfo;
  s3_thumb_key?: Maybe<Scalars['String']>;
};

/** Institution Location */
export type InstitutionLocationInfo = {
  __typename?: 'InstitutionLocationInfo';
  address: Scalars['String'];
  city: Scalars['String'];
  state: Scalars['String'];
  zip: Scalars['String'];
};

export type InstitutionListApiResponse = {
  __typename?: 'InstitutionListAPIResponse';
  success: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  data?: Maybe<InstitutionList>;
};

/** A collection of Institutions */
export type InstitutionList = {
  __typename?: 'InstitutionList';
  institutions: Array<Institution>;
};

export type OwnershipApiResponse = {
  __typename?: 'OwnershipAPIResponse';
  success: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  data?: Maybe<Ownership>;
};

/** Property Ownership Document Information */
export type Ownership = {
  __typename?: 'Ownership';
  _id: Scalars['ID'];
  property_id?: Maybe<Scalars['String']>;
  property_doc?: Maybe<Property>;
  landlord_id: Scalars['String'];
  landlord_doc?: Maybe<Landlord>;
  date_submitted: Scalars['String'];
  status: Scalars['String'];
  ownership_documents: Array<OwnershipDocument>;
  confirmation_activity: Array<ConfirmationActivity>;
  status_change_history: Array<StatusChangeInfo>;
};

/** Ownership Document Information */
export type OwnershipDocument = {
  __typename?: 'OwnershipDocument';
  s3_doc_key: Scalars['String'];
  format: Scalars['String'];
  date_uploaded: Scalars['String'];
};

/** Ownership Confirmation Activity */
export type ConfirmationActivity = {
  __typename?: 'ConfirmationActivity';
  user_id: Scalars['String'];
  user_type: Scalars['String'];
  message: Scalars['String'];
  date_submitted: Scalars['String'];
  full_name?: Maybe<Scalars['String']>;
};

/** Describes a status change in an ownership */
export type StatusChangeInfo = {
  __typename?: 'StatusChangeInfo';
  status_changer_user_id: Scalars['String'];
  status_changer_user_type: Scalars['String'];
  date_changed: Scalars['String'];
  changed_from: Scalars['String'];
  changed_to: Scalars['String'];
  status_changer_full_name?: Maybe<Scalars['String']>;
};

export type OwnershipCollectionApiResponse = {
  __typename?: 'OwnershipCollectionAPIResponse';
  success: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  data?: Maybe<OwnershipCollection>;
};

/** Property Ownership Collection */
export type OwnershipCollection = {
  __typename?: 'OwnershipCollection';
  ownerships: Array<Ownership>;
};

export type FeedbackCollectionApiResponse = {
  __typename?: 'FeedbackCollectionAPIResponse';
  success: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  data?: Maybe<FeedbackCollection>;
};

/** a collection of feedback response */
export type FeedbackCollection = {
  __typename?: 'FeedbackCollection';
  feedback_collection: Array<Feedback>;
};

/** Feedback submission entry */
export type Feedback = {
  __typename?: 'Feedback';
  submitter_id: Scalars['String'];
  user_type: Scalars['String'];
  message: Scalars['String'];
  date_submitted: Scalars['String'];
  tags: Array<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createLandlord: LandlordApiResponse;
  updatePhoneNumber: LandlordApiResponse;
  confirmLandlordEmail: LandlordApiResponse;
  setLandlordOnboarded: LandlordApiResponse;
  updateStudentSearchStatus: StudentApiResponse;
  addPropertyToStudentCollection: PropertyCollectionEntriesApiResponse;
  removePropertyFromStudentCollection: PropertyCollectionEntriesApiResponse;
  updateStudent: StudentApiResponse;
  confirmStudentEmail: StudentApiResponse;
  updatePropertyDetails: PropertyApiResponse;
  addImagesToProperty: PropertyApiResponse;
  removeImageFromProperty: PropertyApiResponse;
  createOwnershipReview: OwnershipApiResponse;
  addOwnershipDocuments: OwnershipApiResponse;
  addOwnershipConfirmationActivity: OwnershipApiResponse;
  changeOwnershipStatus: OwnershipApiResponse;
  submitFeedback: FeedbackApiResponse;
};


export type MutationCreateLandlordArgs = {
  new_landlord: LandlordInput;
};


export type MutationUpdatePhoneNumberArgs = {
  phone_number: Scalars['String'];
  landlord_id: Scalars['String'];
};


export type MutationConfirmLandlordEmailArgs = {
  confirm_key: Scalars['String'];
  email: Scalars['String'];
};


export type MutationSetLandlordOnboardedArgs = {
  landlord_id: Scalars['String'];
};


export type MutationUpdateStudentSearchStatusArgs = {
  price_end?: Maybe<Scalars['Float']>;
  price_start?: Maybe<Scalars['Float']>;
  search_end?: Maybe<Scalars['String']>;
  search_start?: Maybe<Scalars['String']>;
  searching: Scalars['Boolean'];
  id: Scalars['String'];
};


export type MutationAddPropertyToStudentCollectionArgs = {
  property_id: Scalars['String'];
  student_id: Scalars['String'];
};


export type MutationRemovePropertyFromStudentCollectionArgs = {
  property_id: Scalars['String'];
  student_id: Scalars['String'];
};


export type MutationUpdateStudentArgs = {
  new_student: StudentInput;
  _id: Scalars['String'];
};


export type MutationConfirmStudentEmailArgs = {
  confirm_key: Scalars['String'];
  email: Scalars['String'];
};


export type MutationUpdatePropertyDetailsArgs = {
  has_ac?: Maybe<Scalars['Boolean']>;
  has_heater?: Maybe<Scalars['Boolean']>;
  has_washer?: Maybe<Scalars['Boolean']>;
  furnished?: Maybe<Scalars['Boolean']>;
  sq_ft?: Maybe<Scalars['Int']>;
  bathrooms?: Maybe<Scalars['Int']>;
  rooms?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  property_id: Scalars['String'];
};


export type MutationAddImagesToPropertyArgs = {
  s3_keys: Array<Scalars['String']>;
  property_id: Scalars['String'];
};


export type MutationRemoveImageFromPropertyArgs = {
  s3_key: Scalars['String'];
  property_id: Scalars['String'];
};


export type MutationCreateOwnershipReviewArgs = {
  zip_code: Scalars['String'];
  state: Scalars['String'];
  city: Scalars['String'];
  address_line_2: Scalars['String'];
  address_line: Scalars['String'];
  landlord_id: Scalars['String'];
};


export type MutationAddOwnershipDocumentsArgs = {
  ownership_id: Scalars['String'];
  documents_info: Array<OwnershipDocumentInput>;
};


export type MutationAddOwnershipConfirmationActivityArgs = {
  date_submitted: Scalars['String'];
  message: Scalars['String'];
  user_type: Scalars['String'];
  user_id: Scalars['String'];
  ownership_id: Scalars['String'];
};


export type MutationChangeOwnershipStatusArgs = {
  with_property: Scalars['Boolean'];
  with_landlord: Scalars['Boolean'];
  status_changer_user_type: Scalars['String'];
  status_changer_user_id: Scalars['String'];
  new_status: Scalars['String'];
  ownership_id: Scalars['String'];
};


export type MutationSubmitFeedbackArgs = {
  tags: Array<Scalars['String']>;
  message: Scalars['String'];
  user_type: Scalars['String'];
  submitter_id: Scalars['String'];
};

export type LandlordInput = {
  _id?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type StudentInput = {
  _id?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

/** Input for adding ownership documents */
export type OwnershipDocumentInput = {
  s3_doc_key: Scalars['String'];
  format: Scalars['String'];
};

export type FeedbackApiResponse = {
  __typename?: 'FeedbackAPIResponse';
  success: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  data?: Maybe<Feedback>;
};

export type CollectionQueryVariables = Exact<{
  id: Scalars['String'];
  offset: Scalars['Int'];
  count: Scalars['Int'];
}>;


export type CollectionQuery = (
  { __typename?: 'Query' }
  & { getStudentSavedCollection: (
    { __typename?: 'PropertyCollectionEntriesAPIResponse' }
    & PropertyCollectionEntriesApiResponseFieldsFragment
  ) }
);

export type AddCollectionMutationVariables = Exact<{
  student_id: Scalars['String'];
  property_id: Scalars['String'];
}>;


export type AddCollectionMutation = (
  { __typename?: 'Mutation' }
  & { addPropertyToStudentCollection: (
    { __typename?: 'PropertyCollectionEntriesAPIResponse' }
    & PartialPropertyCollectionEntriesApiResponseFieldsFragment
  ) }
);

export type RemoveCollectionMutationVariables = Exact<{
  student_id: Scalars['String'];
  property_id: Scalars['String'];
}>;


export type RemoveCollectionMutation = (
  { __typename?: 'Mutation' }
  & { removePropertyFromStudentCollection: (
    { __typename?: 'PropertyCollectionEntriesAPIResponse' }
    & PartialPropertyCollectionEntriesApiResponseFieldsFragment
  ) }
);

export type PropertyCollectionEntriesApiResponseFieldsFragment = (
  { __typename?: 'PropertyCollectionEntriesAPIResponse' }
  & Pick<PropertyCollectionEntriesApiResponse, 'success' | 'error'>
  & { data?: Maybe<(
    { __typename?: 'PropertyCollectionEntries' }
    & { collection_entries: Array<(
      { __typename?: 'Property' }
      & Pick<Property, '_id' | 'landlord' | 'address_line' | 'address_line_2' | 'city' | 'state' | 'zip'>
      & { details?: Maybe<(
        { __typename?: 'PropertyDetails' }
        & Pick<PropertyDetails, 'description' | 'rooms' | 'bathrooms' | 'sq_ft' | 'furnished' | 'has_washer' | 'has_heater' | 'has_ac'>
        & { property_images: Array<(
          { __typename?: 'PropertyImageInfo' }
          & Pick<PropertyImageInfo, 's3_key' | 'date_uploaded'>
        )> }
      )> }
    )> }
  )> }
);

export type PartialPropertyCollectionEntriesApiResponseFieldsFragment = (
  { __typename?: 'PropertyCollectionEntriesAPIResponse' }
  & Pick<PropertyCollectionEntriesApiResponse, 'success' | 'error'>
  & { data?: Maybe<(
    { __typename?: 'PropertyCollectionEntries' }
    & { collection_entries: Array<(
      { __typename?: 'Property' }
      & Pick<Property, '_id'>
    )> }
  )> }
);

export type SubmitFeedbackMutationVariables = Exact<{
  submitter_id: Scalars['String'];
  user_type: Scalars['String'];
  message: Scalars['String'];
  tags: Array<Scalars['String']> | Scalars['String'];
}>;


export type SubmitFeedbackMutation = (
  { __typename?: 'Mutation' }
  & { submitFeedback: (
    { __typename?: 'FeedbackAPIResponse' }
    & FeedbackApiResponseFieldsFragment
  ) }
);

export type FeedbackApiResponseFieldsFragment = (
  { __typename?: 'FeedbackAPIResponse' }
  & Pick<FeedbackApiResponse, 'success' | 'error'>
  & { data?: Maybe<(
    { __typename?: 'Feedback' }
    & Pick<Feedback, 'submitter_id' | 'user_type' | 'message' | 'date_submitted' | 'tags'>
  )> }
);

export type GetInstitutionsQueryVariables = Exact<{
  partial_name: Scalars['String'];
}>;


export type GetInstitutionsQuery = (
  { __typename?: 'Query' }
  & { getMatchingInstitutions: (
    { __typename?: 'InstitutionListAPIResponse' }
    & InstitutionListApiResponseFieldsFragment
  ) }
);

export type GetInstitutionQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetInstitutionQuery = (
  { __typename?: 'Query' }
  & { getInstitution: (
    { __typename?: 'InstitutionAPIResponse' }
    & InstitutionApiResponseFieldsFragment
  ) }
);

export type InstitutionApiResponseFieldsFragment = (
  { __typename?: 'InstitutionAPIResponse' }
  & Pick<InstitutionApiResponse, 'success' | 'error'>
  & { data?: Maybe<(
    { __typename?: 'Institution' }
    & Pick<Institution, '_id' | 'name' | 's3_thumb_key'>
    & { location: (
      { __typename?: 'InstitutionLocationInfo' }
      & Pick<InstitutionLocationInfo, 'address' | 'city' | 'state' | 'zip'>
    ) }
  )> }
);

export type InstitutionListApiResponseFieldsFragment = (
  { __typename?: 'InstitutionListAPIResponse' }
  & Pick<InstitutionListApiResponse, 'success' | 'error'>
  & { data?: Maybe<(
    { __typename?: 'InstitutionList' }
    & { institutions: Array<(
      { __typename?: 'Institution' }
      & Pick<Institution, '_id' | 'name' | 's3_thumb_key'>
      & { location: (
        { __typename?: 'InstitutionLocationInfo' }
        & Pick<InstitutionLocationInfo, 'address' | 'city' | 'state' | 'zip'>
      ) }
    )> }
  )> }
);

export type CreateLandlordMutationVariables = Exact<{
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateLandlordMutation = (
  { __typename?: 'Mutation' }
  & { createLandlord: (
    { __typename?: 'LandlordAPIResponse' }
    & LandlordApiResponseFieldsFragment
  ) }
);

export type ResendEmailConfirmationQueryVariables = Exact<{
  landlord_id: Scalars['String'];
}>;


export type ResendEmailConfirmationQuery = (
  { __typename?: 'Query' }
  & { resendEamilConfirmation: (
    { __typename?: 'LandlordAPIResponse' }
    & Pick<LandlordApiResponse, 'success' | 'error'>
  ) }
);

export type UpdatePhoneNumberMutationVariables = Exact<{
  landlord_id: Scalars['String'];
  phone_number: Scalars['String'];
}>;


export type UpdatePhoneNumberMutation = (
  { __typename?: 'Mutation' }
  & { updatePhoneNumber: (
    { __typename?: 'LandlordAPIResponse' }
    & LandlordApiResponseFieldsFragment
  ) }
);

export type ConfirmLandlordEmailMutationVariables = Exact<{
  email: Scalars['String'];
  confirm_key: Scalars['String'];
}>;


export type ConfirmLandlordEmailMutation = (
  { __typename?: 'Mutation' }
  & { confirmLandlordEmail: (
    { __typename?: 'LandlordAPIResponse' }
    & LandlordApiResponseFieldsFragment
  ) }
);

export type OnboardLandlordMutationVariables = Exact<{
  landlord_id: Scalars['String'];
}>;


export type OnboardLandlordMutation = (
  { __typename?: 'Mutation' }
  & { setLandlordOnboarded: (
    { __typename?: 'LandlordAPIResponse' }
    & LandlordApiResponseFieldsFragment
  ) }
);

export type LandlordApiResponseFieldsFragment = (
  { __typename?: 'LandlordAPIResponse' }
  & Pick<LandlordApiResponse, 'success' | 'error'>
  & { data?: Maybe<(
    { __typename?: 'Landlord' }
    & Pick<Landlord, '_id' | 'first_name' | 'last_name' | 'email' | 'phone_number'>
    & { user_settings?: Maybe<(
      { __typename?: 'LandlordUserSettings' }
      & Pick<LandlordUserSettings, 'recieve_email_notifications'>
      & { push_subscriptions: Array<(
        { __typename?: 'PushSubscription' }
        & Pick<PushSubscription, 'endpoint'>
        & { keys: (
          { __typename?: 'PushSubscriptionKeys' }
          & Pick<PushSubscriptionKeys, 'p256dh' | 'auth'>
        ) }
      )> }
    )> }
  )> }
);

export type GetOwnershipsForLandlordQueryVariables = Exact<{
  landlord_id: Scalars['String'];
  with_properties?: Maybe<Scalars['Boolean']>;
  with_landlord?: Maybe<Scalars['Boolean']>;
}>;


export type GetOwnershipsForLandlordQuery = (
  { __typename?: 'Query' }
  & { getOwnershipsForLandlord: (
    { __typename?: 'OwnershipCollectionAPIResponse' }
    & OwnershipCollectionApiResponseFieldsFragment
  ) }
);

export type GetOwnershipQueryVariables = Exact<{
  ownership_id: Scalars['String'];
}>;


export type GetOwnershipQuery = (
  { __typename?: 'Query' }
  & { getOwnership: (
    { __typename?: 'OwnershipAPIResponse' }
    & OwnershipApiResponseFieldsFragment
  ) }
);

export type GetOwnershipsInReviewQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOwnershipsInReviewQuery = (
  { __typename?: 'Query' }
  & { getOwnershipsInReview: (
    { __typename?: 'OwnershipCollectionAPIResponse' }
    & OwnershipCollectionApiResponseFieldsFragment
  ) }
);

export type GetOwnershipConflictsQueryVariables = Exact<{
  ownership_id: Scalars['String'];
}>;


export type GetOwnershipConflictsQuery = (
  { __typename?: 'Query' }
  & { getOwnershipConflicts: (
    { __typename?: 'OwnershipCollectionAPIResponse' }
    & OwnershipCollectionApiResponseFieldsFragment
  ) }
);

export type AddOwnershipConfirmationActivityMutationVariables = Exact<{
  ownership_id: Scalars['String'];
  user_id: Scalars['String'];
  user_type: Scalars['String'];
  message: Scalars['String'];
  date_submitted: Scalars['String'];
}>;


export type AddOwnershipConfirmationActivityMutation = (
  { __typename?: 'Mutation' }
  & { addOwnershipConfirmationActivity: (
    { __typename?: 'OwnershipAPIResponse' }
    & OwnershipApiResponseFieldsFragment
  ) }
);

export type AddOwnershipDocumentsMutationVariables = Exact<{
  ownership_id: Scalars['String'];
  documents_info: Array<OwnershipDocumentInput> | OwnershipDocumentInput;
}>;


export type AddOwnershipDocumentsMutation = (
  { __typename?: 'Mutation' }
  & { addOwnershipDocuments: (
    { __typename?: 'OwnershipAPIResponse' }
    & OwnershipApiResponseFieldsFragment
  ) }
);

export type ChangeOwnershipStatusMutationVariables = Exact<{
  ownership_id: Scalars['String'];
  new_status: Scalars['String'];
  status_changer_user_id: Scalars['String'];
  status_changer_user_type: Scalars['String'];
  with_landlord: Scalars['Boolean'];
  with_property: Scalars['Boolean'];
}>;


export type ChangeOwnershipStatusMutation = (
  { __typename?: 'Mutation' }
  & { changeOwnershipStatus: (
    { __typename?: 'OwnershipAPIResponse' }
    & OwnershipApiResponseFieldsFragment
  ) }
);

export type CreateOwnershipMutationVariables = Exact<{
  landlord_id: Scalars['String'];
  address_line: Scalars['String'];
  address_line_2: Scalars['String'];
  city: Scalars['String'];
  state: Scalars['String'];
  zip_code: Scalars['String'];
}>;


export type CreateOwnershipMutation = (
  { __typename?: 'Mutation' }
  & { createOwnershipReview: (
    { __typename?: 'OwnershipAPIResponse' }
    & OwnershipApiResponseFieldsFragment
  ) }
);

export type OwnershipApiResponseFieldsFragment = (
  { __typename?: 'OwnershipAPIResponse' }
  & Pick<OwnershipApiResponse, 'success' | 'error'>
  & { data?: Maybe<(
    { __typename?: 'Ownership' }
    & Pick<Ownership, '_id' | 'property_id' | 'landlord_id' | 'date_submitted' | 'status'>
    & { property_doc?: Maybe<(
      { __typename?: 'Property' }
      & Pick<Property, '_id' | 'landlord' | 'address_line' | 'address_line_2' | 'city' | 'state' | 'zip'>
      & { details?: Maybe<(
        { __typename?: 'PropertyDetails' }
        & Pick<PropertyDetails, 'description' | 'rooms' | 'bathrooms' | 'sq_ft' | 'furnished' | 'has_washer' | 'has_heater' | 'has_ac'>
        & { property_images: Array<(
          { __typename?: 'PropertyImageInfo' }
          & Pick<PropertyImageInfo, 's3_key' | 'date_uploaded'>
        )> }
      )> }
    )>, landlord_doc?: Maybe<(
      { __typename?: 'Landlord' }
      & LandlordFieldsFragment
    )>, ownership_documents: Array<(
      { __typename?: 'OwnershipDocument' }
      & OwnershipDocumentFieldsFragment
    )>, confirmation_activity: Array<(
      { __typename?: 'ConfirmationActivity' }
      & ConfirmationActivityFieldsFragment
    )>, status_change_history: Array<(
      { __typename?: 'StatusChangeInfo' }
      & StatusChangeInfoFieldsFragment
    )> }
  )> }
);

export type OwnershipCollectionApiResponseFieldsFragment = (
  { __typename?: 'OwnershipCollectionAPIResponse' }
  & Pick<OwnershipCollectionApiResponse, 'success' | 'error'>
  & { data?: Maybe<(
    { __typename?: 'OwnershipCollection' }
    & { ownerships: Array<(
      { __typename?: 'Ownership' }
      & Pick<Ownership, '_id' | 'property_id' | 'landlord_id' | 'date_submitted' | 'status'>
      & { confirmation_activity: Array<(
        { __typename?: 'ConfirmationActivity' }
        & ConfirmationActivityFieldsFragment
        & ConfirmationActivityFieldsFragment
      )>, property_doc?: Maybe<(
        { __typename?: 'Property' }
        & Pick<Property, '_id' | 'address_line' | 'address_line_2' | 'city' | 'state' | 'zip' | 'landlord'>
        & { details?: Maybe<(
          { __typename?: 'PropertyDetails' }
          & Pick<PropertyDetails, 'description' | 'rooms' | 'bathrooms' | 'sq_ft' | 'furnished' | 'has_washer' | 'has_heater' | 'has_ac'>
          & { property_images: Array<(
            { __typename?: 'PropertyImageInfo' }
            & Pick<PropertyImageInfo, 's3_key' | 'date_uploaded'>
          )> }
        )> }
      )>, landlord_doc?: Maybe<(
        { __typename?: 'Landlord' }
        & LandlordFieldsFragment
      )>, ownership_documents: Array<(
        { __typename?: 'OwnershipDocument' }
        & OwnershipDocumentFieldsFragment
      )>, status_change_history: Array<(
        { __typename?: 'StatusChangeInfo' }
        & StatusChangeInfoFieldsFragment
      )> }
    )> }
  )> }
);

export type OwnershipDocumentFieldsFragment = (
  { __typename?: 'OwnershipDocument' }
  & Pick<OwnershipDocument, 's3_doc_key' | 'format' | 'date_uploaded'>
);

export type ConfirmationActivityFieldsFragment = (
  { __typename?: 'ConfirmationActivity' }
  & Pick<ConfirmationActivity, 'user_id' | 'user_type' | 'message' | 'date_submitted' | 'full_name'>
);

export type StatusChangeInfoFieldsFragment = (
  { __typename?: 'StatusChangeInfo' }
  & Pick<StatusChangeInfo, 'status_changer_user_id' | 'status_changer_user_type' | 'date_changed' | 'changed_from' | 'changed_to' | 'status_changer_full_name'>
);

export type LandlordFieldsFragment = (
  { __typename?: 'Landlord' }
  & Pick<Landlord, '_id' | 'first_name' | 'last_name' | 'email' | 'phone_number'>
);

export type SearchPropertiesQueryVariables = Exact<{
  offset: Scalars['Int'];
  count: Scalars['Int'];
}>;


export type SearchPropertiesQuery = (
  { __typename?: 'Query' }
  & { searchProperties: (
    { __typename?: 'PropertyListAPIResponse' }
    & PropertyListApiResponseFieldsFragment
  ) }
);

export type GetPropertyQueryVariables = Exact<{
  id: Scalars['String'];
  withLandlord: Scalars['Boolean'];
  withReviews: Scalars['Boolean'];
  reviewCount: Scalars['Int'];
  reviewOffset: Scalars['Int'];
}>;


export type GetPropertyQuery = (
  { __typename?: 'Query' }
  & { getProperty: (
    { __typename?: 'PropertyAPIResponse' }
    & PropertyApiResponseFieldsFragment
  ) }
);

export type GetPropertyOwnedByLandlordQueryVariables = Exact<{
  property_id: Scalars['String'];
  landlord_id: Scalars['String'];
}>;


export type GetPropertyOwnedByLandlordQuery = (
  { __typename?: 'Query' }
  & { getPropertyOwnedByLandlord: (
    { __typename?: 'PropertyAPIResponse' }
    & PropertyApiResponseFieldsFragment
  ) }
);

export type GetPropertiesForLandlordQueryVariables = Exact<{
  landlord_id: Scalars['String'];
  status?: Maybe<Scalars['String']>;
}>;


export type GetPropertiesForLandlordQuery = (
  { __typename?: 'Query' }
  & { getPropertiesForLandlord: (
    { __typename?: 'PropertyListAPIResponse' }
    & PropertyListApiResponseFieldsFragment
  ) }
);

export type VerifyAddressQueryVariables = Exact<{
  address_1: Scalars['String'];
  address_2: Scalars['String'];
  zip: Scalars['String'];
  state: Scalars['String'];
  city: Scalars['String'];
}>;


export type VerifyAddressQuery = (
  { __typename?: 'Query' }
  & { verifyAddress: (
    { __typename?: 'AddressVerificationAPIResponse' }
    & AddressVerificationApiResponseFieldsFragment
  ) }
);

export type AddImagesToPropertyMutationVariables = Exact<{
  property_id: Scalars['String'];
  s3_keys: Array<Scalars['String']> | Scalars['String'];
}>;


export type AddImagesToPropertyMutation = (
  { __typename?: 'Mutation' }
  & { addImagesToProperty: (
    { __typename?: 'PropertyAPIResponse' }
    & PropertyApiResponseFieldsFragment
  ) }
);

export type RemoveImageFromPropertyMutationVariables = Exact<{
  property_id: Scalars['String'];
  s3_key: Scalars['String'];
}>;


export type RemoveImageFromPropertyMutation = (
  { __typename?: 'Mutation' }
  & { removeImageFromProperty: (
    { __typename?: 'PropertyAPIResponse' }
    & PropertyApiResponseFieldsFragment
  ) }
);

export type UpdatePropertyDetailsMutationVariables = Exact<{
  property_id: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  rooms?: Maybe<Scalars['Int']>;
  bathrooms?: Maybe<Scalars['Int']>;
  sq_ft?: Maybe<Scalars['Int']>;
  furnished?: Maybe<Scalars['Boolean']>;
  has_washer?: Maybe<Scalars['Boolean']>;
  has_heater?: Maybe<Scalars['Boolean']>;
  has_ac?: Maybe<Scalars['Boolean']>;
}>;


export type UpdatePropertyDetailsMutation = (
  { __typename?: 'Mutation' }
  & { updatePropertyDetails: (
    { __typename?: 'PropertyAPIResponse' }
    & PropertyApiResponseFieldsFragment
  ) }
);

export type PropertyApiResponseFieldsFragment = (
  { __typename?: 'PropertyAPIResponse' }
  & Pick<PropertyApiResponse, 'success' | 'error'>
  & { data?: Maybe<(
    { __typename?: 'Property' }
    & Pick<Property, '_id' | 'landlord' | 'address_line' | 'address_line_2' | 'city' | 'state' | 'zip'>
    & { details?: Maybe<(
      { __typename?: 'PropertyDetails' }
      & Pick<PropertyDetails, 'description' | 'rooms' | 'bathrooms' | 'sq_ft' | 'furnished' | 'has_washer' | 'has_heater' | 'has_ac'>
      & { property_images: Array<(
        { __typename?: 'PropertyImageInfo' }
        & Pick<PropertyImageInfo, 's3_key' | 'date_uploaded'>
      )> }
    )> }
  )> }
);

export type PropertyListApiResponseFieldsFragment = (
  { __typename?: 'PropertyListAPIResponse' }
  & Pick<PropertyListApiResponse, 'success' | 'error'>
  & { data?: Maybe<(
    { __typename?: 'PropertyList' }
    & { properties: Array<(
      { __typename?: 'Property' }
      & Pick<Property, '_id' | 'landlord' | 'address_line' | 'address_line_2' | 'city' | 'state' | 'zip'>
      & { details?: Maybe<(
        { __typename?: 'PropertyDetails' }
        & Pick<PropertyDetails, 'description' | 'rooms' | 'bathrooms' | 'sq_ft' | 'furnished' | 'has_washer' | 'has_heater' | 'has_ac'>
        & { property_images: Array<(
          { __typename?: 'PropertyImageInfo' }
          & Pick<PropertyImageInfo, 's3_key' | 'date_uploaded'>
        )> }
      )> }
    )> }
  )> }
);

export type AddressVerificationApiResponseFieldsFragment = (
  { __typename?: 'AddressVerificationAPIResponse' }
  & Pick<AddressVerificationApiResponse, 'success' | 'error'>
  & { data?: Maybe<(
    { __typename?: 'AddressVerification' }
    & Pick<AddressVerification, 'address_1' | 'address_2' | 'city' | 'state' | 'zip'>
  )> }
);

export type StudentQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type StudentQuery = (
  { __typename?: 'Query' }
  & { getStudent: (
    { __typename?: 'StudentAPIResponse' }
    & StudentApiResponseFieldsFragment
  ) }
);

export type UpdateStudentMutationVariables = Exact<{
  id: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  email: Scalars['String'];
}>;


export type UpdateStudentMutation = (
  { __typename?: 'Mutation' }
  & { updateStudent: (
    { __typename?: 'StudentAPIResponse' }
    & StudentApiResponseFieldsFragment
  ) }
);

export type ConfirmStudentEmailMutationVariables = Exact<{
  email: Scalars['String'];
  confirm_key: Scalars['String'];
}>;


export type ConfirmStudentEmailMutation = (
  { __typename?: 'Mutation' }
  & { confirmStudentEmail: (
    { __typename?: 'StudentAPIResponse' }
    & StudentApiResponseFieldsFragment
  ) }
);

export type UpdateStudentSearchStatusMutationVariables = Exact<{
  id: Scalars['String'];
  searching: Scalars['Boolean'];
  search_start?: Maybe<Scalars['String']>;
  search_end?: Maybe<Scalars['String']>;
  price_start?: Maybe<Scalars['Float']>;
  price_end?: Maybe<Scalars['Float']>;
}>;


export type UpdateStudentSearchStatusMutation = (
  { __typename?: 'Mutation' }
  & { updateStudentSearchStatus: (
    { __typename?: 'StudentAPIResponse' }
    & StudentApiResponseFieldsFragment
  ) }
);

export type StudentApiResponseFieldsFragment = (
  { __typename?: 'StudentAPIResponse' }
  & Pick<StudentApiResponse, 'success' | 'error'>
  & { data?: Maybe<(
    { __typename?: 'Student' }
    & Pick<Student, '_id' | 'first_name' | 'last_name' | 'email' | 'elevated_privileges'>
    & { auth_info?: Maybe<(
      { __typename?: 'CasAuthInfo' }
      & Pick<CasAuthInfo, 'cas_id' | 'institution_id'>
    )>, user_settings?: Maybe<(
      { __typename?: 'StudentUserSettings' }
      & Pick<StudentUserSettings, 'recieve_email_notifications'>
      & { push_subscriptions: Array<(
        { __typename?: 'PushSubscription' }
        & Pick<PushSubscription, 'endpoint'>
        & { keys: (
          { __typename?: 'PushSubscriptionKeys' }
          & Pick<PushSubscriptionKeys, 'p256dh' | 'auth'>
        ) }
      )> }
    )>, search_status?: Maybe<(
      { __typename?: 'SearchStatus' }
      & Pick<SearchStatus, 'date_updated' | 'searching' | 'search_start' | 'search_end' | 'price_start' | 'price_end'>
    )> }
  )> }
);

export const PropertyCollectionEntriesApiResponseFieldsFragmentDoc = gql`
    fragment PropertyCollectionEntriesAPIResponseFields on PropertyCollectionEntriesAPIResponse {
  success
  error
  data {
    collection_entries {
      _id
      landlord
      address_line
      address_line_2
      city
      state
      zip
      details {
        description
        rooms
        bathrooms
        sq_ft
        furnished
        has_washer
        has_heater
        has_ac
        property_images {
          s3_key
          date_uploaded
        }
      }
    }
  }
}
    `;
export const PartialPropertyCollectionEntriesApiResponseFieldsFragmentDoc = gql`
    fragment PartialPropertyCollectionEntriesAPIResponseFields on PropertyCollectionEntriesAPIResponse {
  success
  error
  data {
    collection_entries {
      _id
    }
  }
}
    `;
export const FeedbackApiResponseFieldsFragmentDoc = gql`
    fragment FeedbackAPIResponseFields on FeedbackAPIResponse {
  success
  error
  data {
    submitter_id
    user_type
    message
    date_submitted
    tags
  }
}
    `;
export const InstitutionApiResponseFieldsFragmentDoc = gql`
    fragment InstitutionAPIResponseFields on InstitutionAPIResponse {
  success
  error
  data {
    _id
    name
    s3_thumb_key
    location {
      address
      city
      state
      zip
    }
  }
}
    `;
export const InstitutionListApiResponseFieldsFragmentDoc = gql`
    fragment InstitutionListAPIResponseFields on InstitutionListAPIResponse {
  success
  error
  data {
    institutions {
      _id
      name
      s3_thumb_key
      location {
        address
        city
        state
        zip
      }
    }
  }
}
    `;
export const LandlordApiResponseFieldsFragmentDoc = gql`
    fragment LandlordAPIResponseFields on LandlordAPIResponse {
  success
  error
  data {
    _id
    first_name
    last_name
    email
    phone_number
    user_settings {
      recieve_email_notifications
      push_subscriptions {
        endpoint
        keys {
          p256dh
          auth
        }
      }
    }
  }
}
    `;
export const LandlordFieldsFragmentDoc = gql`
    fragment LandlordFields on Landlord {
  _id
  first_name
  last_name
  email
  phone_number
}
    `;
export const OwnershipDocumentFieldsFragmentDoc = gql`
    fragment ownershipDocumentFields on OwnershipDocument {
  s3_doc_key
  format
  date_uploaded
}
    `;
export const ConfirmationActivityFieldsFragmentDoc = gql`
    fragment confirmationActivityFields on ConfirmationActivity {
  user_id
  user_type
  message
  date_submitted
  full_name
}
    `;
export const StatusChangeInfoFieldsFragmentDoc = gql`
    fragment statusChangeInfoFields on StatusChangeInfo {
  status_changer_user_id
  status_changer_user_type
  date_changed
  changed_from
  changed_to
  status_changer_full_name
}
    `;
export const OwnershipApiResponseFieldsFragmentDoc = gql`
    fragment OwnershipAPIResponseFields on OwnershipAPIResponse {
  success
  error
  data {
    _id
    property_id
    landlord_id
    date_submitted
    status
    property_doc {
      _id
      landlord
      address_line
      address_line_2
      city
      state
      zip
      details {
        description
        rooms
        bathrooms
        sq_ft
        furnished
        has_washer
        has_heater
        has_ac
        property_images {
          s3_key
          date_uploaded
        }
      }
    }
    landlord_doc {
      ...LandlordFields
    }
    ownership_documents {
      ...ownershipDocumentFields
    }
    confirmation_activity {
      ...confirmationActivityFields
    }
    status_change_history {
      ...statusChangeInfoFields
    }
  }
}
    ${LandlordFieldsFragmentDoc}
${OwnershipDocumentFieldsFragmentDoc}
${ConfirmationActivityFieldsFragmentDoc}
${StatusChangeInfoFieldsFragmentDoc}`;
export const OwnershipCollectionApiResponseFieldsFragmentDoc = gql`
    fragment OwnershipCollectionAPIResponseFields on OwnershipCollectionAPIResponse {
  success
  error
  data {
    ownerships {
      _id
      property_id
      confirmation_activity {
        ...confirmationActivityFields
        ...confirmationActivityFields
      }
      property_doc {
        _id
        address_line
        address_line_2
        city
        state
        zip
        landlord
        details {
          description
          rooms
          bathrooms
          sq_ft
          furnished
          has_washer
          has_heater
          has_ac
          property_images {
            s3_key
            date_uploaded
          }
        }
      }
      landlord_id
      landlord_doc {
        ...LandlordFields
      }
      date_submitted
      status
      ownership_documents {
        ...ownershipDocumentFields
      }
      confirmation_activity {
        ...confirmationActivityFields
      }
      status_change_history {
        ...statusChangeInfoFields
      }
    }
  }
}
    ${ConfirmationActivityFieldsFragmentDoc}
${LandlordFieldsFragmentDoc}
${OwnershipDocumentFieldsFragmentDoc}
${StatusChangeInfoFieldsFragmentDoc}`;
export const PropertyApiResponseFieldsFragmentDoc = gql`
    fragment PropertyAPIResponseFields on PropertyAPIResponse {
  success
  error
  data {
    _id
    landlord
    address_line
    address_line_2
    city
    state
    zip
    details {
      description
      rooms
      bathrooms
      sq_ft
      furnished
      has_washer
      has_heater
      has_ac
      property_images {
        s3_key
        date_uploaded
      }
    }
  }
}
    `;
export const PropertyListApiResponseFieldsFragmentDoc = gql`
    fragment PropertyListAPIResponseFields on PropertyListAPIResponse {
  success
  error
  data {
    properties {
      _id
      landlord
      address_line
      address_line_2
      city
      state
      zip
      details {
        description
        rooms
        bathrooms
        sq_ft
        furnished
        has_washer
        has_heater
        has_ac
        property_images {
          s3_key
          date_uploaded
        }
      }
    }
  }
}
    `;
export const AddressVerificationApiResponseFieldsFragmentDoc = gql`
    fragment AddressVerificationAPIResponseFields on AddressVerificationAPIResponse {
  success
  error
  data {
    address_1
    address_2
    city
    state
    zip
  }
}
    `;
export const StudentApiResponseFieldsFragmentDoc = gql`
    fragment StudentAPIResponseFields on StudentAPIResponse {
  data {
    _id
    first_name
    last_name
    email
    elevated_privileges
    auth_info {
      cas_id
      institution_id
    }
    user_settings {
      recieve_email_notifications
      push_subscriptions {
        endpoint
        keys {
          p256dh
          auth
        }
      }
    }
    search_status {
      date_updated
      searching
      search_start
      search_end
      price_start
      price_end
    }
  }
  success
  error
}
    `;
export const CollectionDocument = gql`
    query Collection($id: String!, $offset: Int!, $count: Int!) {
  getStudentSavedCollection(
    _id: $id
    collectionOptions: {offset: $offset, count: $count}
  ) {
    ...PropertyCollectionEntriesAPIResponseFields
  }
}
    ${PropertyCollectionEntriesApiResponseFieldsFragmentDoc}`;

/**
 * __useCollectionQuery__
 *
 * To run a query within a React component, call `useCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionQuery({
 *   variables: {
 *      id: // value for 'id'
 *      offset: // value for 'offset'
 *      count: // value for 'count'
 *   },
 * });
 */
export function useCollectionQuery(baseOptions: Apollo.QueryHookOptions<CollectionQuery, CollectionQueryVariables>) {
        return Apollo.useQuery<CollectionQuery, CollectionQueryVariables>(CollectionDocument, baseOptions);
      }
export function useCollectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CollectionQuery, CollectionQueryVariables>) {
          return Apollo.useLazyQuery<CollectionQuery, CollectionQueryVariables>(CollectionDocument, baseOptions);
        }
export type CollectionQueryHookResult = ReturnType<typeof useCollectionQuery>;
export type CollectionLazyQueryHookResult = ReturnType<typeof useCollectionLazyQuery>;
export type CollectionQueryResult = Apollo.QueryResult<CollectionQuery, CollectionQueryVariables>;
export const AddCollectionDocument = gql`
    mutation AddCollection($student_id: String!, $property_id: String!) {
  addPropertyToStudentCollection(
    student_id: $student_id
    property_id: $property_id
  ) {
    ...PartialPropertyCollectionEntriesAPIResponseFields
  }
}
    ${PartialPropertyCollectionEntriesApiResponseFieldsFragmentDoc}`;
export type AddCollectionMutationFn = Apollo.MutationFunction<AddCollectionMutation, AddCollectionMutationVariables>;

/**
 * __useAddCollectionMutation__
 *
 * To run a mutation, you first call `useAddCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCollectionMutation, { data, loading, error }] = useAddCollectionMutation({
 *   variables: {
 *      student_id: // value for 'student_id'
 *      property_id: // value for 'property_id'
 *   },
 * });
 */
export function useAddCollectionMutation(baseOptions?: Apollo.MutationHookOptions<AddCollectionMutation, AddCollectionMutationVariables>) {
        return Apollo.useMutation<AddCollectionMutation, AddCollectionMutationVariables>(AddCollectionDocument, baseOptions);
      }
export type AddCollectionMutationHookResult = ReturnType<typeof useAddCollectionMutation>;
export type AddCollectionMutationResult = Apollo.MutationResult<AddCollectionMutation>;
export type AddCollectionMutationOptions = Apollo.BaseMutationOptions<AddCollectionMutation, AddCollectionMutationVariables>;
export const RemoveCollectionDocument = gql`
    mutation RemoveCollection($student_id: String!, $property_id: String!) {
  removePropertyFromStudentCollection(
    student_id: $student_id
    property_id: $property_id
  ) {
    ...PartialPropertyCollectionEntriesAPIResponseFields
  }
}
    ${PartialPropertyCollectionEntriesApiResponseFieldsFragmentDoc}`;
export type RemoveCollectionMutationFn = Apollo.MutationFunction<RemoveCollectionMutation, RemoveCollectionMutationVariables>;

/**
 * __useRemoveCollectionMutation__
 *
 * To run a mutation, you first call `useRemoveCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeCollectionMutation, { data, loading, error }] = useRemoveCollectionMutation({
 *   variables: {
 *      student_id: // value for 'student_id'
 *      property_id: // value for 'property_id'
 *   },
 * });
 */
export function useRemoveCollectionMutation(baseOptions?: Apollo.MutationHookOptions<RemoveCollectionMutation, RemoveCollectionMutationVariables>) {
        return Apollo.useMutation<RemoveCollectionMutation, RemoveCollectionMutationVariables>(RemoveCollectionDocument, baseOptions);
      }
export type RemoveCollectionMutationHookResult = ReturnType<typeof useRemoveCollectionMutation>;
export type RemoveCollectionMutationResult = Apollo.MutationResult<RemoveCollectionMutation>;
export type RemoveCollectionMutationOptions = Apollo.BaseMutationOptions<RemoveCollectionMutation, RemoveCollectionMutationVariables>;
export const SubmitFeedbackDocument = gql`
    mutation SubmitFeedback($submitter_id: String!, $user_type: String!, $message: String!, $tags: [String!]!) {
  submitFeedback(
    submitter_id: $submitter_id
    user_type: $user_type
    message: $message
    tags: $tags
  ) {
    ...FeedbackAPIResponseFields
  }
}
    ${FeedbackApiResponseFieldsFragmentDoc}`;
export type SubmitFeedbackMutationFn = Apollo.MutationFunction<SubmitFeedbackMutation, SubmitFeedbackMutationVariables>;

/**
 * __useSubmitFeedbackMutation__
 *
 * To run a mutation, you first call `useSubmitFeedbackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitFeedbackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitFeedbackMutation, { data, loading, error }] = useSubmitFeedbackMutation({
 *   variables: {
 *      submitter_id: // value for 'submitter_id'
 *      user_type: // value for 'user_type'
 *      message: // value for 'message'
 *      tags: // value for 'tags'
 *   },
 * });
 */
export function useSubmitFeedbackMutation(baseOptions?: Apollo.MutationHookOptions<SubmitFeedbackMutation, SubmitFeedbackMutationVariables>) {
        return Apollo.useMutation<SubmitFeedbackMutation, SubmitFeedbackMutationVariables>(SubmitFeedbackDocument, baseOptions);
      }
export type SubmitFeedbackMutationHookResult = ReturnType<typeof useSubmitFeedbackMutation>;
export type SubmitFeedbackMutationResult = Apollo.MutationResult<SubmitFeedbackMutation>;
export type SubmitFeedbackMutationOptions = Apollo.BaseMutationOptions<SubmitFeedbackMutation, SubmitFeedbackMutationVariables>;
export const GetInstitutionsDocument = gql`
    query GetInstitutions($partial_name: String!) {
  getMatchingInstitutions(partial_name: $partial_name) {
    ...InstitutionListAPIResponseFields
  }
}
    ${InstitutionListApiResponseFieldsFragmentDoc}`;

/**
 * __useGetInstitutionsQuery__
 *
 * To run a query within a React component, call `useGetInstitutionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInstitutionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInstitutionsQuery({
 *   variables: {
 *      partial_name: // value for 'partial_name'
 *   },
 * });
 */
export function useGetInstitutionsQuery(baseOptions: Apollo.QueryHookOptions<GetInstitutionsQuery, GetInstitutionsQueryVariables>) {
        return Apollo.useQuery<GetInstitutionsQuery, GetInstitutionsQueryVariables>(GetInstitutionsDocument, baseOptions);
      }
export function useGetInstitutionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetInstitutionsQuery, GetInstitutionsQueryVariables>) {
          return Apollo.useLazyQuery<GetInstitutionsQuery, GetInstitutionsQueryVariables>(GetInstitutionsDocument, baseOptions);
        }
export type GetInstitutionsQueryHookResult = ReturnType<typeof useGetInstitutionsQuery>;
export type GetInstitutionsLazyQueryHookResult = ReturnType<typeof useGetInstitutionsLazyQuery>;
export type GetInstitutionsQueryResult = Apollo.QueryResult<GetInstitutionsQuery, GetInstitutionsQueryVariables>;
export const GetInstitutionDocument = gql`
    query GetInstitution($id: String!) {
  getInstitution(_id: $id) {
    ...InstitutionAPIResponseFields
  }
}
    ${InstitutionApiResponseFieldsFragmentDoc}`;

/**
 * __useGetInstitutionQuery__
 *
 * To run a query within a React component, call `useGetInstitutionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInstitutionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInstitutionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetInstitutionQuery(baseOptions: Apollo.QueryHookOptions<GetInstitutionQuery, GetInstitutionQueryVariables>) {
        return Apollo.useQuery<GetInstitutionQuery, GetInstitutionQueryVariables>(GetInstitutionDocument, baseOptions);
      }
export function useGetInstitutionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetInstitutionQuery, GetInstitutionQueryVariables>) {
          return Apollo.useLazyQuery<GetInstitutionQuery, GetInstitutionQueryVariables>(GetInstitutionDocument, baseOptions);
        }
export type GetInstitutionQueryHookResult = ReturnType<typeof useGetInstitutionQuery>;
export type GetInstitutionLazyQueryHookResult = ReturnType<typeof useGetInstitutionLazyQuery>;
export type GetInstitutionQueryResult = Apollo.QueryResult<GetInstitutionQuery, GetInstitutionQueryVariables>;
export const CreateLandlordDocument = gql`
    mutation CreateLandlord($first_name: String!, $last_name: String!, $email: String!, $password: String!) {
  createLandlord(
    new_landlord: {first_name: $first_name, last_name: $last_name, email: $email, password: $password}
  ) {
    ...LandlordAPIResponseFields
  }
}
    ${LandlordApiResponseFieldsFragmentDoc}`;
export type CreateLandlordMutationFn = Apollo.MutationFunction<CreateLandlordMutation, CreateLandlordMutationVariables>;

/**
 * __useCreateLandlordMutation__
 *
 * To run a mutation, you first call `useCreateLandlordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLandlordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLandlordMutation, { data, loading, error }] = useCreateLandlordMutation({
 *   variables: {
 *      first_name: // value for 'first_name'
 *      last_name: // value for 'last_name'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateLandlordMutation(baseOptions?: Apollo.MutationHookOptions<CreateLandlordMutation, CreateLandlordMutationVariables>) {
        return Apollo.useMutation<CreateLandlordMutation, CreateLandlordMutationVariables>(CreateLandlordDocument, baseOptions);
      }
export type CreateLandlordMutationHookResult = ReturnType<typeof useCreateLandlordMutation>;
export type CreateLandlordMutationResult = Apollo.MutationResult<CreateLandlordMutation>;
export type CreateLandlordMutationOptions = Apollo.BaseMutationOptions<CreateLandlordMutation, CreateLandlordMutationVariables>;
export const ResendEmailConfirmationDocument = gql`
    query ResendEmailConfirmation($landlord_id: String!) {
  resendEamilConfirmation(landlord_id: $landlord_id) {
    success
    error
  }
}
    `;

/**
 * __useResendEmailConfirmationQuery__
 *
 * To run a query within a React component, call `useResendEmailConfirmationQuery` and pass it any options that fit your needs.
 * When your component renders, `useResendEmailConfirmationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useResendEmailConfirmationQuery({
 *   variables: {
 *      landlord_id: // value for 'landlord_id'
 *   },
 * });
 */
export function useResendEmailConfirmationQuery(baseOptions: Apollo.QueryHookOptions<ResendEmailConfirmationQuery, ResendEmailConfirmationQueryVariables>) {
        return Apollo.useQuery<ResendEmailConfirmationQuery, ResendEmailConfirmationQueryVariables>(ResendEmailConfirmationDocument, baseOptions);
      }
export function useResendEmailConfirmationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ResendEmailConfirmationQuery, ResendEmailConfirmationQueryVariables>) {
          return Apollo.useLazyQuery<ResendEmailConfirmationQuery, ResendEmailConfirmationQueryVariables>(ResendEmailConfirmationDocument, baseOptions);
        }
export type ResendEmailConfirmationQueryHookResult = ReturnType<typeof useResendEmailConfirmationQuery>;
export type ResendEmailConfirmationLazyQueryHookResult = ReturnType<typeof useResendEmailConfirmationLazyQuery>;
export type ResendEmailConfirmationQueryResult = Apollo.QueryResult<ResendEmailConfirmationQuery, ResendEmailConfirmationQueryVariables>;
export const UpdatePhoneNumberDocument = gql`
    mutation UpdatePhoneNumber($landlord_id: String!, $phone_number: String!) {
  updatePhoneNumber(landlord_id: $landlord_id, phone_number: $phone_number) {
    ...LandlordAPIResponseFields
  }
}
    ${LandlordApiResponseFieldsFragmentDoc}`;
export type UpdatePhoneNumberMutationFn = Apollo.MutationFunction<UpdatePhoneNumberMutation, UpdatePhoneNumberMutationVariables>;

/**
 * __useUpdatePhoneNumberMutation__
 *
 * To run a mutation, you first call `useUpdatePhoneNumberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePhoneNumberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePhoneNumberMutation, { data, loading, error }] = useUpdatePhoneNumberMutation({
 *   variables: {
 *      landlord_id: // value for 'landlord_id'
 *      phone_number: // value for 'phone_number'
 *   },
 * });
 */
export function useUpdatePhoneNumberMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePhoneNumberMutation, UpdatePhoneNumberMutationVariables>) {
        return Apollo.useMutation<UpdatePhoneNumberMutation, UpdatePhoneNumberMutationVariables>(UpdatePhoneNumberDocument, baseOptions);
      }
export type UpdatePhoneNumberMutationHookResult = ReturnType<typeof useUpdatePhoneNumberMutation>;
export type UpdatePhoneNumberMutationResult = Apollo.MutationResult<UpdatePhoneNumberMutation>;
export type UpdatePhoneNumberMutationOptions = Apollo.BaseMutationOptions<UpdatePhoneNumberMutation, UpdatePhoneNumberMutationVariables>;
export const ConfirmLandlordEmailDocument = gql`
    mutation ConfirmLandlordEmail($email: String!, $confirm_key: String!) {
  confirmLandlordEmail(email: $email, confirm_key: $confirm_key) {
    ...LandlordAPIResponseFields
  }
}
    ${LandlordApiResponseFieldsFragmentDoc}`;
export type ConfirmLandlordEmailMutationFn = Apollo.MutationFunction<ConfirmLandlordEmailMutation, ConfirmLandlordEmailMutationVariables>;

/**
 * __useConfirmLandlordEmailMutation__
 *
 * To run a mutation, you first call `useConfirmLandlordEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmLandlordEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmLandlordEmailMutation, { data, loading, error }] = useConfirmLandlordEmailMutation({
 *   variables: {
 *      email: // value for 'email'
 *      confirm_key: // value for 'confirm_key'
 *   },
 * });
 */
export function useConfirmLandlordEmailMutation(baseOptions?: Apollo.MutationHookOptions<ConfirmLandlordEmailMutation, ConfirmLandlordEmailMutationVariables>) {
        return Apollo.useMutation<ConfirmLandlordEmailMutation, ConfirmLandlordEmailMutationVariables>(ConfirmLandlordEmailDocument, baseOptions);
      }
export type ConfirmLandlordEmailMutationHookResult = ReturnType<typeof useConfirmLandlordEmailMutation>;
export type ConfirmLandlordEmailMutationResult = Apollo.MutationResult<ConfirmLandlordEmailMutation>;
export type ConfirmLandlordEmailMutationOptions = Apollo.BaseMutationOptions<ConfirmLandlordEmailMutation, ConfirmLandlordEmailMutationVariables>;
export const OnboardLandlordDocument = gql`
    mutation OnboardLandlord($landlord_id: String!) {
  setLandlordOnboarded(landlord_id: $landlord_id) {
    ...LandlordAPIResponseFields
  }
}
    ${LandlordApiResponseFieldsFragmentDoc}`;
export type OnboardLandlordMutationFn = Apollo.MutationFunction<OnboardLandlordMutation, OnboardLandlordMutationVariables>;

/**
 * __useOnboardLandlordMutation__
 *
 * To run a mutation, you first call `useOnboardLandlordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOnboardLandlordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [onboardLandlordMutation, { data, loading, error }] = useOnboardLandlordMutation({
 *   variables: {
 *      landlord_id: // value for 'landlord_id'
 *   },
 * });
 */
export function useOnboardLandlordMutation(baseOptions?: Apollo.MutationHookOptions<OnboardLandlordMutation, OnboardLandlordMutationVariables>) {
        return Apollo.useMutation<OnboardLandlordMutation, OnboardLandlordMutationVariables>(OnboardLandlordDocument, baseOptions);
      }
export type OnboardLandlordMutationHookResult = ReturnType<typeof useOnboardLandlordMutation>;
export type OnboardLandlordMutationResult = Apollo.MutationResult<OnboardLandlordMutation>;
export type OnboardLandlordMutationOptions = Apollo.BaseMutationOptions<OnboardLandlordMutation, OnboardLandlordMutationVariables>;
export const GetOwnershipsForLandlordDocument = gql`
    query GetOwnershipsForLandlord($landlord_id: String!, $with_properties: Boolean, $with_landlord: Boolean) {
  getOwnershipsForLandlord(
    landlord_id: $landlord_id
    with_properties: $with_properties
    with_landlord: $with_landlord
  ) {
    ...OwnershipCollectionAPIResponseFields
  }
}
    ${OwnershipCollectionApiResponseFieldsFragmentDoc}`;

/**
 * __useGetOwnershipsForLandlordQuery__
 *
 * To run a query within a React component, call `useGetOwnershipsForLandlordQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOwnershipsForLandlordQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOwnershipsForLandlordQuery({
 *   variables: {
 *      landlord_id: // value for 'landlord_id'
 *      with_properties: // value for 'with_properties'
 *      with_landlord: // value for 'with_landlord'
 *   },
 * });
 */
export function useGetOwnershipsForLandlordQuery(baseOptions: Apollo.QueryHookOptions<GetOwnershipsForLandlordQuery, GetOwnershipsForLandlordQueryVariables>) {
        return Apollo.useQuery<GetOwnershipsForLandlordQuery, GetOwnershipsForLandlordQueryVariables>(GetOwnershipsForLandlordDocument, baseOptions);
      }
export function useGetOwnershipsForLandlordLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOwnershipsForLandlordQuery, GetOwnershipsForLandlordQueryVariables>) {
          return Apollo.useLazyQuery<GetOwnershipsForLandlordQuery, GetOwnershipsForLandlordQueryVariables>(GetOwnershipsForLandlordDocument, baseOptions);
        }
export type GetOwnershipsForLandlordQueryHookResult = ReturnType<typeof useGetOwnershipsForLandlordQuery>;
export type GetOwnershipsForLandlordLazyQueryHookResult = ReturnType<typeof useGetOwnershipsForLandlordLazyQuery>;
export type GetOwnershipsForLandlordQueryResult = Apollo.QueryResult<GetOwnershipsForLandlordQuery, GetOwnershipsForLandlordQueryVariables>;
export const GetOwnershipDocument = gql`
    query GetOwnership($ownership_id: String!) {
  getOwnership(_id: $ownership_id) {
    ...OwnershipAPIResponseFields
  }
}
    ${OwnershipApiResponseFieldsFragmentDoc}`;

/**
 * __useGetOwnershipQuery__
 *
 * To run a query within a React component, call `useGetOwnershipQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOwnershipQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOwnershipQuery({
 *   variables: {
 *      ownership_id: // value for 'ownership_id'
 *   },
 * });
 */
export function useGetOwnershipQuery(baseOptions: Apollo.QueryHookOptions<GetOwnershipQuery, GetOwnershipQueryVariables>) {
        return Apollo.useQuery<GetOwnershipQuery, GetOwnershipQueryVariables>(GetOwnershipDocument, baseOptions);
      }
export function useGetOwnershipLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOwnershipQuery, GetOwnershipQueryVariables>) {
          return Apollo.useLazyQuery<GetOwnershipQuery, GetOwnershipQueryVariables>(GetOwnershipDocument, baseOptions);
        }
export type GetOwnershipQueryHookResult = ReturnType<typeof useGetOwnershipQuery>;
export type GetOwnershipLazyQueryHookResult = ReturnType<typeof useGetOwnershipLazyQuery>;
export type GetOwnershipQueryResult = Apollo.QueryResult<GetOwnershipQuery, GetOwnershipQueryVariables>;
export const GetOwnershipsInReviewDocument = gql`
    query GetOwnershipsInReview {
  getOwnershipsInReview {
    ...OwnershipCollectionAPIResponseFields
  }
}
    ${OwnershipCollectionApiResponseFieldsFragmentDoc}`;

/**
 * __useGetOwnershipsInReviewQuery__
 *
 * To run a query within a React component, call `useGetOwnershipsInReviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOwnershipsInReviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOwnershipsInReviewQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetOwnershipsInReviewQuery(baseOptions?: Apollo.QueryHookOptions<GetOwnershipsInReviewQuery, GetOwnershipsInReviewQueryVariables>) {
        return Apollo.useQuery<GetOwnershipsInReviewQuery, GetOwnershipsInReviewQueryVariables>(GetOwnershipsInReviewDocument, baseOptions);
      }
export function useGetOwnershipsInReviewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOwnershipsInReviewQuery, GetOwnershipsInReviewQueryVariables>) {
          return Apollo.useLazyQuery<GetOwnershipsInReviewQuery, GetOwnershipsInReviewQueryVariables>(GetOwnershipsInReviewDocument, baseOptions);
        }
export type GetOwnershipsInReviewQueryHookResult = ReturnType<typeof useGetOwnershipsInReviewQuery>;
export type GetOwnershipsInReviewLazyQueryHookResult = ReturnType<typeof useGetOwnershipsInReviewLazyQuery>;
export type GetOwnershipsInReviewQueryResult = Apollo.QueryResult<GetOwnershipsInReviewQuery, GetOwnershipsInReviewQueryVariables>;
export const GetOwnershipConflictsDocument = gql`
    query GetOwnershipConflicts($ownership_id: String!) {
  getOwnershipConflicts(ownership_id: $ownership_id) {
    ...OwnershipCollectionAPIResponseFields
  }
}
    ${OwnershipCollectionApiResponseFieldsFragmentDoc}`;

/**
 * __useGetOwnershipConflictsQuery__
 *
 * To run a query within a React component, call `useGetOwnershipConflictsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOwnershipConflictsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOwnershipConflictsQuery({
 *   variables: {
 *      ownership_id: // value for 'ownership_id'
 *   },
 * });
 */
export function useGetOwnershipConflictsQuery(baseOptions: Apollo.QueryHookOptions<GetOwnershipConflictsQuery, GetOwnershipConflictsQueryVariables>) {
        return Apollo.useQuery<GetOwnershipConflictsQuery, GetOwnershipConflictsQueryVariables>(GetOwnershipConflictsDocument, baseOptions);
      }
export function useGetOwnershipConflictsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOwnershipConflictsQuery, GetOwnershipConflictsQueryVariables>) {
          return Apollo.useLazyQuery<GetOwnershipConflictsQuery, GetOwnershipConflictsQueryVariables>(GetOwnershipConflictsDocument, baseOptions);
        }
export type GetOwnershipConflictsQueryHookResult = ReturnType<typeof useGetOwnershipConflictsQuery>;
export type GetOwnershipConflictsLazyQueryHookResult = ReturnType<typeof useGetOwnershipConflictsLazyQuery>;
export type GetOwnershipConflictsQueryResult = Apollo.QueryResult<GetOwnershipConflictsQuery, GetOwnershipConflictsQueryVariables>;
export const AddOwnershipConfirmationActivityDocument = gql`
    mutation AddOwnershipConfirmationActivity($ownership_id: String!, $user_id: String!, $user_type: String!, $message: String!, $date_submitted: String!) {
  addOwnershipConfirmationActivity(
    ownership_id: $ownership_id
    user_id: $user_id
    user_type: $user_type
    message: $message
    date_submitted: $date_submitted
  ) {
    ...OwnershipAPIResponseFields
  }
}
    ${OwnershipApiResponseFieldsFragmentDoc}`;
export type AddOwnershipConfirmationActivityMutationFn = Apollo.MutationFunction<AddOwnershipConfirmationActivityMutation, AddOwnershipConfirmationActivityMutationVariables>;

/**
 * __useAddOwnershipConfirmationActivityMutation__
 *
 * To run a mutation, you first call `useAddOwnershipConfirmationActivityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddOwnershipConfirmationActivityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addOwnershipConfirmationActivityMutation, { data, loading, error }] = useAddOwnershipConfirmationActivityMutation({
 *   variables: {
 *      ownership_id: // value for 'ownership_id'
 *      user_id: // value for 'user_id'
 *      user_type: // value for 'user_type'
 *      message: // value for 'message'
 *      date_submitted: // value for 'date_submitted'
 *   },
 * });
 */
export function useAddOwnershipConfirmationActivityMutation(baseOptions?: Apollo.MutationHookOptions<AddOwnershipConfirmationActivityMutation, AddOwnershipConfirmationActivityMutationVariables>) {
        return Apollo.useMutation<AddOwnershipConfirmationActivityMutation, AddOwnershipConfirmationActivityMutationVariables>(AddOwnershipConfirmationActivityDocument, baseOptions);
      }
export type AddOwnershipConfirmationActivityMutationHookResult = ReturnType<typeof useAddOwnershipConfirmationActivityMutation>;
export type AddOwnershipConfirmationActivityMutationResult = Apollo.MutationResult<AddOwnershipConfirmationActivityMutation>;
export type AddOwnershipConfirmationActivityMutationOptions = Apollo.BaseMutationOptions<AddOwnershipConfirmationActivityMutation, AddOwnershipConfirmationActivityMutationVariables>;
export const AddOwnershipDocumentsDocument = gql`
    mutation AddOwnershipDocuments($ownership_id: String!, $documents_info: [OwnershipDocumentInput!]!) {
  addOwnershipDocuments(
    ownership_id: $ownership_id
    documents_info: $documents_info
  ) {
    ...OwnershipAPIResponseFields
  }
}
    ${OwnershipApiResponseFieldsFragmentDoc}`;
export type AddOwnershipDocumentsMutationFn = Apollo.MutationFunction<AddOwnershipDocumentsMutation, AddOwnershipDocumentsMutationVariables>;

/**
 * __useAddOwnershipDocumentsMutation__
 *
 * To run a mutation, you first call `useAddOwnershipDocumentsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddOwnershipDocumentsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addOwnershipDocumentsMutation, { data, loading, error }] = useAddOwnershipDocumentsMutation({
 *   variables: {
 *      ownership_id: // value for 'ownership_id'
 *      documents_info: // value for 'documents_info'
 *   },
 * });
 */
export function useAddOwnershipDocumentsMutation(baseOptions?: Apollo.MutationHookOptions<AddOwnershipDocumentsMutation, AddOwnershipDocumentsMutationVariables>) {
        return Apollo.useMutation<AddOwnershipDocumentsMutation, AddOwnershipDocumentsMutationVariables>(AddOwnershipDocumentsDocument, baseOptions);
      }
export type AddOwnershipDocumentsMutationHookResult = ReturnType<typeof useAddOwnershipDocumentsMutation>;
export type AddOwnershipDocumentsMutationResult = Apollo.MutationResult<AddOwnershipDocumentsMutation>;
export type AddOwnershipDocumentsMutationOptions = Apollo.BaseMutationOptions<AddOwnershipDocumentsMutation, AddOwnershipDocumentsMutationVariables>;
export const ChangeOwnershipStatusDocument = gql`
    mutation ChangeOwnershipStatus($ownership_id: String!, $new_status: String!, $status_changer_user_id: String!, $status_changer_user_type: String!, $with_landlord: Boolean!, $with_property: Boolean!) {
  changeOwnershipStatus(
    ownership_id: $ownership_id
    new_status: $new_status
    status_changer_user_id: $status_changer_user_id
    status_changer_user_type: $status_changer_user_type
    with_landlord: $with_landlord
    with_property: $with_property
  ) {
    ...OwnershipAPIResponseFields
  }
}
    ${OwnershipApiResponseFieldsFragmentDoc}`;
export type ChangeOwnershipStatusMutationFn = Apollo.MutationFunction<ChangeOwnershipStatusMutation, ChangeOwnershipStatusMutationVariables>;

/**
 * __useChangeOwnershipStatusMutation__
 *
 * To run a mutation, you first call `useChangeOwnershipStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeOwnershipStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeOwnershipStatusMutation, { data, loading, error }] = useChangeOwnershipStatusMutation({
 *   variables: {
 *      ownership_id: // value for 'ownership_id'
 *      new_status: // value for 'new_status'
 *      status_changer_user_id: // value for 'status_changer_user_id'
 *      status_changer_user_type: // value for 'status_changer_user_type'
 *      with_landlord: // value for 'with_landlord'
 *      with_property: // value for 'with_property'
 *   },
 * });
 */
export function useChangeOwnershipStatusMutation(baseOptions?: Apollo.MutationHookOptions<ChangeOwnershipStatusMutation, ChangeOwnershipStatusMutationVariables>) {
        return Apollo.useMutation<ChangeOwnershipStatusMutation, ChangeOwnershipStatusMutationVariables>(ChangeOwnershipStatusDocument, baseOptions);
      }
export type ChangeOwnershipStatusMutationHookResult = ReturnType<typeof useChangeOwnershipStatusMutation>;
export type ChangeOwnershipStatusMutationResult = Apollo.MutationResult<ChangeOwnershipStatusMutation>;
export type ChangeOwnershipStatusMutationOptions = Apollo.BaseMutationOptions<ChangeOwnershipStatusMutation, ChangeOwnershipStatusMutationVariables>;
export const CreateOwnershipDocument = gql`
    mutation CreateOwnership($landlord_id: String!, $address_line: String!, $address_line_2: String!, $city: String!, $state: String!, $zip_code: String!) {
  createOwnershipReview(
    landlord_id: $landlord_id
    address_line: $address_line
    address_line_2: $address_line_2
    city: $city
    state: $state
    zip_code: $zip_code
  ) {
    ...OwnershipAPIResponseFields
  }
}
    ${OwnershipApiResponseFieldsFragmentDoc}`;
export type CreateOwnershipMutationFn = Apollo.MutationFunction<CreateOwnershipMutation, CreateOwnershipMutationVariables>;

/**
 * __useCreateOwnershipMutation__
 *
 * To run a mutation, you first call `useCreateOwnershipMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOwnershipMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOwnershipMutation, { data, loading, error }] = useCreateOwnershipMutation({
 *   variables: {
 *      landlord_id: // value for 'landlord_id'
 *      address_line: // value for 'address_line'
 *      address_line_2: // value for 'address_line_2'
 *      city: // value for 'city'
 *      state: // value for 'state'
 *      zip_code: // value for 'zip_code'
 *   },
 * });
 */
export function useCreateOwnershipMutation(baseOptions?: Apollo.MutationHookOptions<CreateOwnershipMutation, CreateOwnershipMutationVariables>) {
        return Apollo.useMutation<CreateOwnershipMutation, CreateOwnershipMutationVariables>(CreateOwnershipDocument, baseOptions);
      }
export type CreateOwnershipMutationHookResult = ReturnType<typeof useCreateOwnershipMutation>;
export type CreateOwnershipMutationResult = Apollo.MutationResult<CreateOwnershipMutation>;
export type CreateOwnershipMutationOptions = Apollo.BaseMutationOptions<CreateOwnershipMutation, CreateOwnershipMutationVariables>;
export const SearchPropertiesDocument = gql`
    query SearchProperties($offset: Int!, $count: Int!) {
  searchProperties(searchOptions: {offset: $offset, count: $count}) {
    ...PropertyListAPIResponseFields
  }
}
    ${PropertyListApiResponseFieldsFragmentDoc}`;

/**
 * __useSearchPropertiesQuery__
 *
 * To run a query within a React component, call `useSearchPropertiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchPropertiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchPropertiesQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      count: // value for 'count'
 *   },
 * });
 */
export function useSearchPropertiesQuery(baseOptions: Apollo.QueryHookOptions<SearchPropertiesQuery, SearchPropertiesQueryVariables>) {
        return Apollo.useQuery<SearchPropertiesQuery, SearchPropertiesQueryVariables>(SearchPropertiesDocument, baseOptions);
      }
export function useSearchPropertiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchPropertiesQuery, SearchPropertiesQueryVariables>) {
          return Apollo.useLazyQuery<SearchPropertiesQuery, SearchPropertiesQueryVariables>(SearchPropertiesDocument, baseOptions);
        }
export type SearchPropertiesQueryHookResult = ReturnType<typeof useSearchPropertiesQuery>;
export type SearchPropertiesLazyQueryHookResult = ReturnType<typeof useSearchPropertiesLazyQuery>;
export type SearchPropertiesQueryResult = Apollo.QueryResult<SearchPropertiesQuery, SearchPropertiesQueryVariables>;
export const GetPropertyDocument = gql`
    query GetProperty($id: String!, $withLandlord: Boolean!, $withReviews: Boolean!, $reviewCount: Int!, $reviewOffset: Int!) {
  getProperty(
    _id: $id
    withLandlord: $withLandlord
    reviewOptions: {withReviews: $withReviews, offset: $reviewOffset, count: $reviewCount}
  ) {
    ...PropertyAPIResponseFields
  }
}
    ${PropertyApiResponseFieldsFragmentDoc}`;

/**
 * __useGetPropertyQuery__
 *
 * To run a query within a React component, call `useGetPropertyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPropertyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPropertyQuery({
 *   variables: {
 *      id: // value for 'id'
 *      withLandlord: // value for 'withLandlord'
 *      withReviews: // value for 'withReviews'
 *      reviewCount: // value for 'reviewCount'
 *      reviewOffset: // value for 'reviewOffset'
 *   },
 * });
 */
export function useGetPropertyQuery(baseOptions: Apollo.QueryHookOptions<GetPropertyQuery, GetPropertyQueryVariables>) {
        return Apollo.useQuery<GetPropertyQuery, GetPropertyQueryVariables>(GetPropertyDocument, baseOptions);
      }
export function useGetPropertyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPropertyQuery, GetPropertyQueryVariables>) {
          return Apollo.useLazyQuery<GetPropertyQuery, GetPropertyQueryVariables>(GetPropertyDocument, baseOptions);
        }
export type GetPropertyQueryHookResult = ReturnType<typeof useGetPropertyQuery>;
export type GetPropertyLazyQueryHookResult = ReturnType<typeof useGetPropertyLazyQuery>;
export type GetPropertyQueryResult = Apollo.QueryResult<GetPropertyQuery, GetPropertyQueryVariables>;
export const GetPropertyOwnedByLandlordDocument = gql`
    query GetPropertyOwnedByLandlord($property_id: String!, $landlord_id: String!) {
  getPropertyOwnedByLandlord(property_id: $property_id, landlord_id: $landlord_id) {
    ...PropertyAPIResponseFields
  }
}
    ${PropertyApiResponseFieldsFragmentDoc}`;

/**
 * __useGetPropertyOwnedByLandlordQuery__
 *
 * To run a query within a React component, call `useGetPropertyOwnedByLandlordQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPropertyOwnedByLandlordQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPropertyOwnedByLandlordQuery({
 *   variables: {
 *      property_id: // value for 'property_id'
 *      landlord_id: // value for 'landlord_id'
 *   },
 * });
 */
export function useGetPropertyOwnedByLandlordQuery(baseOptions: Apollo.QueryHookOptions<GetPropertyOwnedByLandlordQuery, GetPropertyOwnedByLandlordQueryVariables>) {
        return Apollo.useQuery<GetPropertyOwnedByLandlordQuery, GetPropertyOwnedByLandlordQueryVariables>(GetPropertyOwnedByLandlordDocument, baseOptions);
      }
export function useGetPropertyOwnedByLandlordLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPropertyOwnedByLandlordQuery, GetPropertyOwnedByLandlordQueryVariables>) {
          return Apollo.useLazyQuery<GetPropertyOwnedByLandlordQuery, GetPropertyOwnedByLandlordQueryVariables>(GetPropertyOwnedByLandlordDocument, baseOptions);
        }
export type GetPropertyOwnedByLandlordQueryHookResult = ReturnType<typeof useGetPropertyOwnedByLandlordQuery>;
export type GetPropertyOwnedByLandlordLazyQueryHookResult = ReturnType<typeof useGetPropertyOwnedByLandlordLazyQuery>;
export type GetPropertyOwnedByLandlordQueryResult = Apollo.QueryResult<GetPropertyOwnedByLandlordQuery, GetPropertyOwnedByLandlordQueryVariables>;
export const GetPropertiesForLandlordDocument = gql`
    query GetPropertiesForLandlord($landlord_id: String!, $status: String) {
  getPropertiesForLandlord(landlord_id: $landlord_id, status: $status) {
    ...PropertyListAPIResponseFields
  }
}
    ${PropertyListApiResponseFieldsFragmentDoc}`;

/**
 * __useGetPropertiesForLandlordQuery__
 *
 * To run a query within a React component, call `useGetPropertiesForLandlordQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPropertiesForLandlordQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPropertiesForLandlordQuery({
 *   variables: {
 *      landlord_id: // value for 'landlord_id'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useGetPropertiesForLandlordQuery(baseOptions: Apollo.QueryHookOptions<GetPropertiesForLandlordQuery, GetPropertiesForLandlordQueryVariables>) {
        return Apollo.useQuery<GetPropertiesForLandlordQuery, GetPropertiesForLandlordQueryVariables>(GetPropertiesForLandlordDocument, baseOptions);
      }
export function useGetPropertiesForLandlordLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPropertiesForLandlordQuery, GetPropertiesForLandlordQueryVariables>) {
          return Apollo.useLazyQuery<GetPropertiesForLandlordQuery, GetPropertiesForLandlordQueryVariables>(GetPropertiesForLandlordDocument, baseOptions);
        }
export type GetPropertiesForLandlordQueryHookResult = ReturnType<typeof useGetPropertiesForLandlordQuery>;
export type GetPropertiesForLandlordLazyQueryHookResult = ReturnType<typeof useGetPropertiesForLandlordLazyQuery>;
export type GetPropertiesForLandlordQueryResult = Apollo.QueryResult<GetPropertiesForLandlordQuery, GetPropertiesForLandlordQueryVariables>;
export const VerifyAddressDocument = gql`
    query VerifyAddress($address_1: String!, $address_2: String!, $zip: String!, $state: String!, $city: String!) {
  verifyAddress(
    address_1: $address_1
    address_2: $address_2
    zip: $zip
    state: $state
    city: $city
  ) {
    ...AddressVerificationAPIResponseFields
  }
}
    ${AddressVerificationApiResponseFieldsFragmentDoc}`;

/**
 * __useVerifyAddressQuery__
 *
 * To run a query within a React component, call `useVerifyAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useVerifyAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVerifyAddressQuery({
 *   variables: {
 *      address_1: // value for 'address_1'
 *      address_2: // value for 'address_2'
 *      zip: // value for 'zip'
 *      state: // value for 'state'
 *      city: // value for 'city'
 *   },
 * });
 */
export function useVerifyAddressQuery(baseOptions: Apollo.QueryHookOptions<VerifyAddressQuery, VerifyAddressQueryVariables>) {
        return Apollo.useQuery<VerifyAddressQuery, VerifyAddressQueryVariables>(VerifyAddressDocument, baseOptions);
      }
export function useVerifyAddressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VerifyAddressQuery, VerifyAddressQueryVariables>) {
          return Apollo.useLazyQuery<VerifyAddressQuery, VerifyAddressQueryVariables>(VerifyAddressDocument, baseOptions);
        }
export type VerifyAddressQueryHookResult = ReturnType<typeof useVerifyAddressQuery>;
export type VerifyAddressLazyQueryHookResult = ReturnType<typeof useVerifyAddressLazyQuery>;
export type VerifyAddressQueryResult = Apollo.QueryResult<VerifyAddressQuery, VerifyAddressQueryVariables>;
export const AddImagesToPropertyDocument = gql`
    mutation AddImagesToProperty($property_id: String!, $s3_keys: [String!]!) {
  addImagesToProperty(property_id: $property_id, s3_keys: $s3_keys) {
    ...PropertyAPIResponseFields
  }
}
    ${PropertyApiResponseFieldsFragmentDoc}`;
export type AddImagesToPropertyMutationFn = Apollo.MutationFunction<AddImagesToPropertyMutation, AddImagesToPropertyMutationVariables>;

/**
 * __useAddImagesToPropertyMutation__
 *
 * To run a mutation, you first call `useAddImagesToPropertyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddImagesToPropertyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addImagesToPropertyMutation, { data, loading, error }] = useAddImagesToPropertyMutation({
 *   variables: {
 *      property_id: // value for 'property_id'
 *      s3_keys: // value for 's3_keys'
 *   },
 * });
 */
export function useAddImagesToPropertyMutation(baseOptions?: Apollo.MutationHookOptions<AddImagesToPropertyMutation, AddImagesToPropertyMutationVariables>) {
        return Apollo.useMutation<AddImagesToPropertyMutation, AddImagesToPropertyMutationVariables>(AddImagesToPropertyDocument, baseOptions);
      }
export type AddImagesToPropertyMutationHookResult = ReturnType<typeof useAddImagesToPropertyMutation>;
export type AddImagesToPropertyMutationResult = Apollo.MutationResult<AddImagesToPropertyMutation>;
export type AddImagesToPropertyMutationOptions = Apollo.BaseMutationOptions<AddImagesToPropertyMutation, AddImagesToPropertyMutationVariables>;
export const RemoveImageFromPropertyDocument = gql`
    mutation RemoveImageFromProperty($property_id: String!, $s3_key: String!) {
  removeImageFromProperty(property_id: $property_id, s3_key: $s3_key) {
    ...PropertyAPIResponseFields
  }
}
    ${PropertyApiResponseFieldsFragmentDoc}`;
export type RemoveImageFromPropertyMutationFn = Apollo.MutationFunction<RemoveImageFromPropertyMutation, RemoveImageFromPropertyMutationVariables>;

/**
 * __useRemoveImageFromPropertyMutation__
 *
 * To run a mutation, you first call `useRemoveImageFromPropertyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveImageFromPropertyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeImageFromPropertyMutation, { data, loading, error }] = useRemoveImageFromPropertyMutation({
 *   variables: {
 *      property_id: // value for 'property_id'
 *      s3_key: // value for 's3_key'
 *   },
 * });
 */
export function useRemoveImageFromPropertyMutation(baseOptions?: Apollo.MutationHookOptions<RemoveImageFromPropertyMutation, RemoveImageFromPropertyMutationVariables>) {
        return Apollo.useMutation<RemoveImageFromPropertyMutation, RemoveImageFromPropertyMutationVariables>(RemoveImageFromPropertyDocument, baseOptions);
      }
export type RemoveImageFromPropertyMutationHookResult = ReturnType<typeof useRemoveImageFromPropertyMutation>;
export type RemoveImageFromPropertyMutationResult = Apollo.MutationResult<RemoveImageFromPropertyMutation>;
export type RemoveImageFromPropertyMutationOptions = Apollo.BaseMutationOptions<RemoveImageFromPropertyMutation, RemoveImageFromPropertyMutationVariables>;
export const UpdatePropertyDetailsDocument = gql`
    mutation UpdatePropertyDetails($property_id: String!, $description: String, $rooms: Int, $bathrooms: Int, $sq_ft: Int, $furnished: Boolean, $has_washer: Boolean, $has_heater: Boolean, $has_ac: Boolean) {
  updatePropertyDetails(
    property_id: $property_id
    description: $description
    rooms: $rooms
    bathrooms: $bathrooms
    sq_ft: $sq_ft
    furnished: $furnished
    has_washer: $has_washer
    has_heater: $has_heater
    has_ac: $has_ac
  ) {
    ...PropertyAPIResponseFields
  }
}
    ${PropertyApiResponseFieldsFragmentDoc}`;
export type UpdatePropertyDetailsMutationFn = Apollo.MutationFunction<UpdatePropertyDetailsMutation, UpdatePropertyDetailsMutationVariables>;

/**
 * __useUpdatePropertyDetailsMutation__
 *
 * To run a mutation, you first call `useUpdatePropertyDetailsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePropertyDetailsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePropertyDetailsMutation, { data, loading, error }] = useUpdatePropertyDetailsMutation({
 *   variables: {
 *      property_id: // value for 'property_id'
 *      description: // value for 'description'
 *      rooms: // value for 'rooms'
 *      bathrooms: // value for 'bathrooms'
 *      sq_ft: // value for 'sq_ft'
 *      furnished: // value for 'furnished'
 *      has_washer: // value for 'has_washer'
 *      has_heater: // value for 'has_heater'
 *      has_ac: // value for 'has_ac'
 *   },
 * });
 */
export function useUpdatePropertyDetailsMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePropertyDetailsMutation, UpdatePropertyDetailsMutationVariables>) {
        return Apollo.useMutation<UpdatePropertyDetailsMutation, UpdatePropertyDetailsMutationVariables>(UpdatePropertyDetailsDocument, baseOptions);
      }
export type UpdatePropertyDetailsMutationHookResult = ReturnType<typeof useUpdatePropertyDetailsMutation>;
export type UpdatePropertyDetailsMutationResult = Apollo.MutationResult<UpdatePropertyDetailsMutation>;
export type UpdatePropertyDetailsMutationOptions = Apollo.BaseMutationOptions<UpdatePropertyDetailsMutation, UpdatePropertyDetailsMutationVariables>;
export const StudentDocument = gql`
    query Student($id: String!) {
  getStudent(_id: $id) {
    ...StudentAPIResponseFields
  }
}
    ${StudentApiResponseFieldsFragmentDoc}`;

/**
 * __useStudentQuery__
 *
 * To run a query within a React component, call `useStudentQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useStudentQuery(baseOptions: Apollo.QueryHookOptions<StudentQuery, StudentQueryVariables>) {
        return Apollo.useQuery<StudentQuery, StudentQueryVariables>(StudentDocument, baseOptions);
      }
export function useStudentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StudentQuery, StudentQueryVariables>) {
          return Apollo.useLazyQuery<StudentQuery, StudentQueryVariables>(StudentDocument, baseOptions);
        }
export type StudentQueryHookResult = ReturnType<typeof useStudentQuery>;
export type StudentLazyQueryHookResult = ReturnType<typeof useStudentLazyQuery>;
export type StudentQueryResult = Apollo.QueryResult<StudentQuery, StudentQueryVariables>;
export const UpdateStudentDocument = gql`
    mutation UpdateStudent($id: String!, $first_name: String!, $last_name: String!, $email: String!) {
  updateStudent(
    _id: $id
    new_student: {first_name: $first_name, last_name: $last_name, email: $email}
  ) {
    ...StudentAPIResponseFields
  }
}
    ${StudentApiResponseFieldsFragmentDoc}`;
export type UpdateStudentMutationFn = Apollo.MutationFunction<UpdateStudentMutation, UpdateStudentMutationVariables>;

/**
 * __useUpdateStudentMutation__
 *
 * To run a mutation, you first call `useUpdateStudentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStudentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStudentMutation, { data, loading, error }] = useUpdateStudentMutation({
 *   variables: {
 *      id: // value for 'id'
 *      first_name: // value for 'first_name'
 *      last_name: // value for 'last_name'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useUpdateStudentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateStudentMutation, UpdateStudentMutationVariables>) {
        return Apollo.useMutation<UpdateStudentMutation, UpdateStudentMutationVariables>(UpdateStudentDocument, baseOptions);
      }
export type UpdateStudentMutationHookResult = ReturnType<typeof useUpdateStudentMutation>;
export type UpdateStudentMutationResult = Apollo.MutationResult<UpdateStudentMutation>;
export type UpdateStudentMutationOptions = Apollo.BaseMutationOptions<UpdateStudentMutation, UpdateStudentMutationVariables>;
export const ConfirmStudentEmailDocument = gql`
    mutation ConfirmStudentEmail($email: String!, $confirm_key: String!) {
  confirmStudentEmail(email: $email, confirm_key: $confirm_key) {
    ...StudentAPIResponseFields
  }
}
    ${StudentApiResponseFieldsFragmentDoc}`;
export type ConfirmStudentEmailMutationFn = Apollo.MutationFunction<ConfirmStudentEmailMutation, ConfirmStudentEmailMutationVariables>;

/**
 * __useConfirmStudentEmailMutation__
 *
 * To run a mutation, you first call `useConfirmStudentEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmStudentEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmStudentEmailMutation, { data, loading, error }] = useConfirmStudentEmailMutation({
 *   variables: {
 *      email: // value for 'email'
 *      confirm_key: // value for 'confirm_key'
 *   },
 * });
 */
export function useConfirmStudentEmailMutation(baseOptions?: Apollo.MutationHookOptions<ConfirmStudentEmailMutation, ConfirmStudentEmailMutationVariables>) {
        return Apollo.useMutation<ConfirmStudentEmailMutation, ConfirmStudentEmailMutationVariables>(ConfirmStudentEmailDocument, baseOptions);
      }
export type ConfirmStudentEmailMutationHookResult = ReturnType<typeof useConfirmStudentEmailMutation>;
export type ConfirmStudentEmailMutationResult = Apollo.MutationResult<ConfirmStudentEmailMutation>;
export type ConfirmStudentEmailMutationOptions = Apollo.BaseMutationOptions<ConfirmStudentEmailMutation, ConfirmStudentEmailMutationVariables>;
export const UpdateStudentSearchStatusDocument = gql`
    mutation UpdateStudentSearchStatus($id: String!, $searching: Boolean!, $search_start: String, $search_end: String, $price_start: Float, $price_end: Float) {
  updateStudentSearchStatus(
    id: $id
    searching: $searching
    search_start: $search_start
    search_end: $search_end
    price_start: $price_start
    price_end: $price_end
  ) {
    ...StudentAPIResponseFields
  }
}
    ${StudentApiResponseFieldsFragmentDoc}`;
export type UpdateStudentSearchStatusMutationFn = Apollo.MutationFunction<UpdateStudentSearchStatusMutation, UpdateStudentSearchStatusMutationVariables>;

/**
 * __useUpdateStudentSearchStatusMutation__
 *
 * To run a mutation, you first call `useUpdateStudentSearchStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStudentSearchStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStudentSearchStatusMutation, { data, loading, error }] = useUpdateStudentSearchStatusMutation({
 *   variables: {
 *      id: // value for 'id'
 *      searching: // value for 'searching'
 *      search_start: // value for 'search_start'
 *      search_end: // value for 'search_end'
 *      price_start: // value for 'price_start'
 *      price_end: // value for 'price_end'
 *   },
 * });
 */
export function useUpdateStudentSearchStatusMutation(baseOptions?: Apollo.MutationHookOptions<UpdateStudentSearchStatusMutation, UpdateStudentSearchStatusMutationVariables>) {
        return Apollo.useMutation<UpdateStudentSearchStatusMutation, UpdateStudentSearchStatusMutationVariables>(UpdateStudentSearchStatusDocument, baseOptions);
      }
export type UpdateStudentSearchStatusMutationHookResult = ReturnType<typeof useUpdateStudentSearchStatusMutation>;
export type UpdateStudentSearchStatusMutationResult = Apollo.MutationResult<UpdateStudentSearchStatusMutation>;
export type UpdateStudentSearchStatusMutationOptions = Apollo.BaseMutationOptions<UpdateStudentSearchStatusMutation, UpdateStudentSearchStatusMutationVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    