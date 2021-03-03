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
  checkPasswordResetKey: LandlordApiResponse;
  getStudent: StudentApiResponse;
  getStudentSavedCollection: PropertyCollectionEntriesApiResponse;
  getStudentNotifications: StudentNotificationApiResponse;
  getProperty: PropertyApiResponse;
  getPropertyForOwnership: PropertyApiResponse;
  getPropertyOwnedByLandlord: PropertyApiResponse;
  searchProperties: PropertyListApiResponse;
  searchForProperties: PropertySearchResultCollectionApiResult;
  getPropertiesForLandlord: PropertyListApiResponse;
  verifyAddress: AddressVerificationApiResponse;
  getPropertySummary: PropertySummaryApiResponse;
  getInstitution: InstitutionApiResponse;
  getMatchingInstitutions: InstitutionListApiResponse;
  getOwnershipForProperty: OwnershipApiResponse;
  getOwnership: OwnershipApiResponse;
  getOwnershipsInReview: OwnershipCollectionApiResponse;
  getOwnershipsForLandlord: OwnershipCollectionApiResponse;
  getOwnershipConflicts: OwnershipCollectionApiResponse;
  getFeedback: FeedbackCollectionApiResponse;
  checkEligibleForLeaseAgreement: LeaseApiResponse;
  getRoomNo: NumberApiResponse;
  getLeasesAndOccupants: LeaseCollectionApiResponse;
  getAcceptedLeaseInfo: LeaseHistorySummaryApiResponse;
  getAcceptedLeases: LeaseHistorySummaryCollectionApiResponse;
  getLeaseSummary: LeaseSummaryApiResponse;
  canAddReview: DigitApiResponse;
  getLeaseDocumentsForLandlord: MultipleLeaseDocumentsApiResponse;
};


export type QueryGetLandlordArgs = {
  _id: Scalars['String'];
};


export type QueryResendEamilConfirmationArgs = {
  landlord_id: Scalars['String'];
};


export type QueryCheckPasswordResetKeyArgs = {
  email: Scalars['String'];
  reset_key: Scalars['String'];
};


export type QueryGetStudentArgs = {
  _id: Scalars['String'];
};


export type QueryGetStudentSavedCollectionArgs = {
  collectionOptions: CollectionFetchInput;
  _id: Scalars['String'];
};


export type QueryGetStudentNotificationsArgs = {
  student_id: Scalars['String'];
};


export type QueryGetPropertyArgs = {
  withLandlord: Scalars['Boolean'];
  reviewOptions: PropertyReviewInput;
  _id: Scalars['String'];
};


export type QueryGetPropertyForOwnershipArgs = {
  ownership_id: Scalars['String'];
};


export type QueryGetPropertyOwnedByLandlordArgs = {
  with_leases?: Maybe<Scalars['Boolean']>;
  landlord_id: Scalars['String'];
  property_id: Scalars['String'];
};


export type QuerySearchPropertiesArgs = {
  searchOptions: PropertySearchInput;
};


export type QuerySearchForPropertiesArgs = {
  distance: Scalars['Float'];
  rooms: Scalars['Int'];
  price_end: Scalars['Float'];
  price_start: Scalars['Float'];
};


export type QueryGetPropertiesForLandlordArgs = {
  status?: Maybe<Scalars['String']>;
  with_leases?: Maybe<Scalars['Boolean']>;
  landlord_id: Scalars['String'];
};


export type QueryVerifyAddressArgs = {
  zip: Scalars['String'];
  state: Scalars['String'];
  city: Scalars['String'];
  address_2: Scalars['String'];
  address_1: Scalars['String'];
};


export type QueryGetPropertySummaryArgs = {
  student_id: Scalars['String'];
  property_id: Scalars['String'];
};


export type QueryGetInstitutionArgs = {
  _id: Scalars['String'];
};


export type QueryGetMatchingInstitutionsArgs = {
  partial_name: Scalars['String'];
};


export type QueryGetOwnershipForPropertyArgs = {
  landlord_id: Scalars['String'];
  property_id: Scalars['String'];
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


export type QueryCheckEligibleForLeaseAgreementArgs = {
  student_id: Scalars['String'];
  lease_id: Scalars['String'];
};


export type QueryGetRoomNoArgs = {
  lease_id: Scalars['String'];
  ownership_id: Scalars['String'];
};


export type QueryGetLeasesAndOccupantsArgs = {
  ownership_id: Scalars['String'];
};


export type QueryGetAcceptedLeaseInfoArgs = {
  history_id: Scalars['String'];
  lease_id: Scalars['String'];
  student_id: Scalars['String'];
};


export type QueryGetAcceptedLeasesArgs = {
  student_id: Scalars['String'];
};


export type QueryGetLeaseSummaryArgs = {
  lease_id: Scalars['String'];
};


export type QueryCanAddReviewArgs = {
  property_id: Scalars['String'];
  student_id: Scalars['String'];
};


export type QueryGetLeaseDocumentsForLandlordArgs = {
  landlord_id: Scalars['String'];
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
  landlord_reset_key?: Maybe<Scalars['String']>;
  landlord_reset_link_exp?: Maybe<Scalars['String']>;
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
  phone_number?: Maybe<Scalars['String']>;
  auth_info?: Maybe<CasAuthInfo>;
  saved_collection?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<Scalars['String']>;
  elevated_privileges?: Maybe<Array<Scalars['String']>>;
  confirmation_key?: Maybe<Array<Scalars['String']>>;
  user_settings?: Maybe<StudentUserSettings>;
  search_status?: Maybe<SearchStatus>;
  notifications?: Maybe<Array<StudentNotification>>;
  accepted_leases?: Maybe<Array<AcceptedLeaseInfo>>;
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

export type StudentNotification = {
  __typename?: 'StudentNotification';
  _id: Scalars['String'];
  date_created: Scalars['String'];
  date_seen?: Maybe<Scalars['String']>;
  subject: Scalars['String'];
  body: Scalars['String'];
  action?: Maybe<NotificationAction>;
};

export type NotificationAction = {
  __typename?: 'NotificationAction';
  action_text: Scalars['String'];
  action_url: Scalars['String'];
};

export type AcceptedLeaseInfo = {
  __typename?: 'AcceptedLeaseInfo';
  lease_id: Scalars['String'];
  history_id: Scalars['String'];
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
  directions?: Maybe<Array<PropertyDirections>>;
  leases?: Maybe<Array<Lease>>;
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

/** Property directions to an institution */
export type PropertyDirections = {
  __typename?: 'PropertyDirections';
  institution_id: Scalars['String'];
  foot_walking_directions?: Maybe<Array<DirectionCoordinates>>;
  driving_car_directions?: Maybe<Array<DirectionCoordinates>>;
  cycling_regular_directions?: Maybe<Array<DirectionCoordinates>>;
};

/** The directions coordinates information */
export type DirectionCoordinates = {
  __typename?: 'DirectionCoordinates';
  distance: Scalars['Float'];
  coordinates: Array<Array<Scalars['Float']>>;
};

/** Schema for the Lease document */
export type Lease = {
  __typename?: 'Lease';
  _id: Scalars['ID'];
  active: Scalars['Boolean'];
  ownership_id: Scalars['String'];
  price_per_month: Scalars['Float'];
  occupant_id?: Maybe<Scalars['String']>;
  occupant_doc?: Maybe<Student>;
  external_occupant: Scalars['Boolean'];
  priority?: Maybe<LeasePriority>;
  lease_document_id?: Maybe<Scalars['String']>;
  lease_availability_start_date?: Maybe<Scalars['String']>;
  lease_availability_end_date?: Maybe<Scalars['String']>;
  lease_history: Array<LeaseHistory>;
  student_interests: Array<StudentInterest>;
  students_that_declined?: Maybe<Array<DeclineInfo>>;
};

/** Object model for the priority object for a lease */
export type LeasePriority = {
  __typename?: 'LeasePriority';
  level: Scalars['Int'];
  start_date: Scalars['String'];
  end_date: Scalars['String'];
};

/** Information about an instance of a lease's activation */
export type LeaseHistory = {
  __typename?: 'LeaseHistory';
  _id?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  student_id: Scalars['String'];
  start_date: Scalars['String'];
  end_date: Scalars['String'];
  review_of_property?: Maybe<ReviewAndResponse>;
  review_of_landlord?: Maybe<ReviewAndResponse>;
  property_images: Array<LeaseImageInfo>;
};

/** Review & Response */
export type ReviewAndResponse = {
  __typename?: 'ReviewAndResponse';
  rating: Scalars['Float'];
  review: Scalars['String'];
  response?: Maybe<Scalars['String']>;
};

/** Property Image info */
export type LeaseImageInfo = {
  __typename?: 'LeaseImageInfo';
  s3_key: Scalars['String'];
  date_uploaded: Scalars['String'];
};

/** Student interest object */
export type StudentInterest = {
  __typename?: 'StudentInterest';
  student_id: Scalars['String'];
  date: Scalars['String'];
  accepted?: Maybe<Scalars['Boolean']>;
};

export type DeclineInfo = {
  __typename?: 'DeclineInfo';
  date: Scalars['String'];
  student_id: Scalars['String'];
};

export type CollectionFetchInput = {
  offset: Scalars['Int'];
  count: Scalars['Int'];
};

export type StudentNotificationApiResponse = {
  __typename?: 'StudentNotificationAPIResponse';
  success: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  data?: Maybe<StudentNotificationCollection>;
};

export type StudentNotificationCollection = {
  __typename?: 'StudentNotificationCollection';
  notifications: Array<StudentNotification>;
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

export type PropertySearchResultCollectionApiResult = {
  __typename?: 'PropertySearchResultCollectionAPIResult';
  success: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  data?: Maybe<PropertySearchResultCollection>;
};

export type PropertySearchResultCollection = {
  __typename?: 'PropertySearchResultCollection';
  search_results: Array<PropertySearchResult>;
};

export type PropertySearchResult = {
  __typename?: 'PropertySearchResult';
  property: Property;
  landlord_first_name: Scalars['String'];
  landlord_last_name: Scalars['String'];
  price_range: Array<Scalars['Float']>;
  lease_count: Scalars['Int'];
  landlord_rating_avg: Scalars['Float'];
  landlord_rating_count: Scalars['Int'];
  property_rating_avg: Scalars['Float'];
  property_rating_count: Scalars['Int'];
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

export type PropertySummaryApiResponse = {
  __typename?: 'PropertySummaryAPIResponse';
  success: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  data?: Maybe<PropertySummary>;
};

export type PropertySummary = {
  __typename?: 'PropertySummary';
  property: Property;
  leases: Array<LeaseAndAvailability>;
  landlord: Landlord;
};

export type LeaseAndAvailability = {
  __typename?: 'LeaseAndAvailability';
  lease: Lease;
  able_to_lease: Scalars['Boolean'];
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
  longitude: Scalars['Float'];
  latitude: Scalars['Float'];
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

/** API Response class for the Lease object. */
export type LeaseApiResponse = {
  __typename?: 'LeaseAPIResponse';
  success: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  data?: Maybe<Lease>;
};

export type NumberApiResponse = {
  __typename?: 'NumberAPIResponse';
  success: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  data?: Maybe<NumberValue>;
};

export type NumberValue = {
  __typename?: 'NumberValue';
  value: Scalars['Float'];
};

/** API Response class for Lease collection object */
export type LeaseCollectionApiResponse = {
  __typename?: 'LeaseCollectionAPIResponse';
  success: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  data?: Maybe<LeaseCollection>;
};

/** A collection of leases */
export type LeaseCollection = {
  __typename?: 'LeaseCollection';
  leases: Array<Lease>;
};

export type LeaseHistorySummaryApiResponse = {
  __typename?: 'LeaseHistorySummaryAPIResponse';
  success: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  data?: Maybe<LeaseHistorySummary>;
};

export type LeaseHistorySummary = {
  __typename?: 'LeaseHistorySummary';
  property: Property;
  lease: Lease;
  landlord: Landlord;
  lease_history: LeaseHistory;
  room_no: Scalars['Int'];
  lease_history_id: Scalars['String'];
};

export type LeaseHistorySummaryCollectionApiResponse = {
  __typename?: 'LeaseHistorySummaryCollectionAPIResponse';
  success: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  data?: Maybe<LeaseHistorySummaryCollection>;
};

export type LeaseHistorySummaryCollection = {
  __typename?: 'LeaseHistorySummaryCollection';
  histories: Array<LeaseHistorySummary>;
};

/** API Response for lease summary */
export type LeaseSummaryApiResponse = {
  __typename?: 'LeaseSummaryAPIResponse';
  success: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  data?: Maybe<LeaseSummary>;
};

/** Summary of lease information */
export type LeaseSummary = {
  __typename?: 'LeaseSummary';
  room_no: Scalars['Int'];
  property: Property;
  lease: Lease;
  institutions: Array<Institution>;
  students: Array<Student>;
  lease_doc?: Maybe<LeaseDocument>;
};

/** Lease Document Schema */
export type LeaseDocument = {
  __typename?: 'LeaseDocument';
  _id: Scalars['ID'];
  lease_name: Scalars['String'];
  documents: Array<S3Document>;
  landlord_id: Scalars['String'];
};

export type S3Document = {
  __typename?: 'S3Document';
  mime_type: Scalars['String'];
  s3_key: Scalars['String'];
};

/** Represents a digit */
export type DigitApiResponse = {
  __typename?: 'DigitAPIResponse';
  success: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  data?: Maybe<Digit>;
};

export type Digit = {
  __typename?: 'Digit';
  value: Scalars['Float'];
};

/** Multiple lease documents response */
export type MultipleLeaseDocumentsApiResponse = {
  __typename?: 'MultipleLeaseDocumentsAPIResponse';
  success: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  data?: Maybe<MultipleLeaseDocuments>;
};

/** Multiple lease documents */
export type MultipleLeaseDocuments = {
  __typename?: 'MultipleLeaseDocuments';
  lease_documents: Array<LeaseDocument>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createLandlord: LandlordApiResponse;
  updatePhoneNumber: LandlordApiResponse;
  sendPasswordReset: LandlordApiResponse;
  resetPassword: LandlordApiResponse;
  confirmLandlordEmail: LandlordApiResponse;
  setLandlordOnboarded: LandlordApiResponse;
  markStudentNotificationAsSeen: StudentNotificationApiResponse;
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
  activateLease: LeaseApiResponse;
  addLeaseHistory: LeaseApiResponse;
  acceptOrDeclineStudentInterest: LeaseApiResponse;
  expressInterest: LeaseApiResponse;
  acceptLeaseAgreement: LeaseApiResponse;
  addLandlordResponse: LeaseApiResponse;
  declineLeaseAgreement: LeaseApiResponse;
  addLandlordResponseToReview: LeaseApiResponse;
  addReviewForLease: LeaseApiResponse;
  updateUnoccupiedLeases: LeaseCollectionApiResponse;
  addNewLeaseDocument: LeaseDocumentApiResponse;
  Stats_StudentAccountCreation: StatsResponse;
  Stats_StudentLogin: StatsResponse;
  Stats_LandlordAccountCreation: StatsResponse;
  Stats_LandlordLogin: StatsResponse;
  Stats_LandlordOpenLease: StatsResponse;
};


export type MutationCreateLandlordArgs = {
  new_landlord: LandlordInput;
};


export type MutationUpdatePhoneNumberArgs = {
  phone_number: Scalars['String'];
  landlord_id: Scalars['String'];
};


export type MutationSendPasswordResetArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  new_password: Scalars['String'];
  reset_key: Scalars['String'];
  email: Scalars['String'];
};


export type MutationConfirmLandlordEmailArgs = {
  confirm_key: Scalars['String'];
  email: Scalars['String'];
};


export type MutationSetLandlordOnboardedArgs = {
  landlord_id: Scalars['String'];
};


export type MutationMarkStudentNotificationAsSeenArgs = {
  notification_id: Scalars['String'];
  student_id: Scalars['String'];
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


export type MutationActivateLeaseArgs = {
  lease_end_date: Scalars['String'];
  lease_start_date: Scalars['String'];
  price_per_month: Scalars['Float'];
  lease_document_id: Scalars['String'];
  lease_id: Scalars['String'];
};


export type MutationAddLeaseHistoryArgs = {
  end_date: Scalars['String'];
  start_date: Scalars['String'];
  student_id: Scalars['String'];
  lease_id: Scalars['String'];
};


export type MutationAcceptOrDeclineStudentInterestArgs = {
  lease_id: Scalars['String'];
  student_id: Scalars['String'];
  action: Scalars['String'];
};


export type MutationExpressInterestArgs = {
  lease_id: Scalars['String'];
  student_id: Scalars['String'];
};


export type MutationAcceptLeaseAgreementArgs = {
  lease_id: Scalars['String'];
  student_id: Scalars['String'];
};


export type MutationAddLandlordResponseArgs = {
  response_type: Scalars['String'];
  review_response: Scalars['String'];
  history_id: Scalars['String'];
  lease_id: Scalars['String'];
};


export type MutationDeclineLeaseAgreementArgs = {
  lease_id: Scalars['String'];
  student_id: Scalars['String'];
};


export type MutationAddLandlordResponseToReviewArgs = {
  landlord_response: Scalars['String'];
  lease_history_id: Scalars['String'];
  lease_id: Scalars['String'];
  landlord_id: Scalars['String'];
};


export type MutationAddReviewForLeaseArgs = {
  property_images: Array<Scalars['String']>;
  landlord_rating: Scalars['Float'];
  landlord_review: Scalars['String'];
  property_rating: Scalars['Float'];
  property_review: Scalars['String'];
  student_id: Scalars['String'];
  lease_id: Scalars['String'];
};


export type MutationUpdateUnoccupiedLeasesArgs = {
  leases_info: Array<LeaseUpdateInput>;
  ownership_id: Scalars['String'];
};


export type MutationAddNewLeaseDocumentArgs = {
  document_mimes: Array<Scalars['String']>;
  document_keys: Array<Scalars['String']>;
  landlord_id: Scalars['String'];
  lease_name: Scalars['String'];
};


export type MutationStats_StudentAccountCreationArgs = {
  student_id: Scalars['String'];
};


export type MutationStats_StudentLoginArgs = {
  student_id: Scalars['String'];
};


export type MutationStats_LandlordAccountCreationArgs = {
  landlord_id: Scalars['String'];
};


export type MutationStats_LandlordLoginArgs = {
  landlord_id: Scalars['String'];
};


export type MutationStats_LandlordOpenLeaseArgs = {
  lease_id: Scalars['String'];
  property_id: Scalars['String'];
  landlord_id: Scalars['String'];
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

/** Input for describing the creation of a lease */
export type LeaseUpdateInput = {
  lease_id: Scalars['String'];
  price_per_month?: Maybe<Scalars['Float']>;
  external_occupant?: Maybe<Scalars['Boolean']>;
  active?: Maybe<Scalars['Boolean']>;
  lease_priority?: Maybe<Scalars['Int']>;
  priority_start_date?: Maybe<Scalars['String']>;
  priority_end_date?: Maybe<Scalars['String']>;
};

/** API Response class for Lease Document */
export type LeaseDocumentApiResponse = {
  __typename?: 'LeaseDocumentAPIResponse';
  success: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  data?: Maybe<LeaseDocument>;
};

export type StatsResponse = {
  __typename?: 'StatsResponse';
  v: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  newFeedback: Feedback;
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
      & Pick<InstitutionLocationInfo, 'address' | 'city' | 'state' | 'zip' | 'longitude' | 'latitude'>
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
        & Pick<InstitutionLocationInfo, 'address' | 'city' | 'state' | 'zip' | 'longitude' | 'latitude'>
      ) }
    )> }
  )> }
);

export type GetLandlordQueryVariables = Exact<{
  landlord_id: Scalars['String'];
}>;


export type GetLandlordQuery = (
  { __typename?: 'Query' }
  & { getLandlord: (
    { __typename?: 'LandlordAPIResponse' }
    & LandlordApiResponseFieldsFragment
  ) }
);

export type LandlordResetPasswordMutationVariables = Exact<{
  email: Scalars['String'];
  reset_key: Scalars['String'];
  new_password: Scalars['String'];
}>;


export type LandlordResetPasswordMutation = (
  { __typename?: 'Mutation' }
  & { resetPassword: (
    { __typename?: 'LandlordAPIResponse' }
    & Pick<LandlordApiResponse, 'success' | 'error'>
  ) }
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

export type CheckPasswordResetKeyQueryVariables = Exact<{
  reset_key: Scalars['String'];
  email: Scalars['String'];
}>;


export type CheckPasswordResetKeyQuery = (
  { __typename?: 'Query' }
  & { checkPasswordResetKey: (
    { __typename?: 'LandlordAPIResponse' }
    & Pick<LandlordApiResponse, 'success'>
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

export type SendPasswordResetMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type SendPasswordResetMutation = (
  { __typename?: 'Mutation' }
  & { sendPasswordReset: (
    { __typename?: 'LandlordAPIResponse' }
    & Pick<LandlordApiResponse, 'success'>
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

export type GetLeaseDocumentsForLandlordQueryVariables = Exact<{
  landlord_id: Scalars['String'];
}>;


export type GetLeaseDocumentsForLandlordQuery = (
  { __typename?: 'Query' }
  & { getLeaseDocumentsForLandlord: (
    { __typename?: 'MultipleLeaseDocumentsAPIResponse' }
    & MultipleLeaseDocumentsApiResponseFieldsFragment
  ) }
);

export type AddNewLeaseDocumentMutationVariables = Exact<{
  lease_name: Scalars['String'];
  landlord_id: Scalars['String'];
  document_keys: Array<Scalars['String']> | Scalars['String'];
  document_mimes: Array<Scalars['String']> | Scalars['String'];
}>;


export type AddNewLeaseDocumentMutation = (
  { __typename?: 'Mutation' }
  & { addNewLeaseDocument: (
    { __typename?: 'LeaseDocumentAPIResponse' }
    & LeaseDocumentApiResponseFieldsFragment
  ) }
);

export type MultipleLeaseDocumentsApiResponseFieldsFragment = (
  { __typename?: 'MultipleLeaseDocumentsAPIResponse' }
  & Pick<MultipleLeaseDocumentsApiResponse, 'success' | 'error'>
  & { data?: Maybe<(
    { __typename?: 'MultipleLeaseDocuments' }
    & { lease_documents: Array<(
      { __typename?: 'LeaseDocument' }
      & LeaseDocumentFieldsFragment
    )> }
  )> }
);

export type LeaseDocumentApiResponseFieldsFragment = (
  { __typename?: 'LeaseDocumentAPIResponse' }
  & Pick<LeaseDocumentApiResponse, 'success' | 'error'>
  & { data?: Maybe<(
    { __typename?: 'LeaseDocument' }
    & LeaseDocumentFieldsFragment
  )> }
);

export type LeaseDocumentFieldsFragment = (
  { __typename?: 'LeaseDocument' }
  & Pick<LeaseDocument, '_id' | 'lease_name' | 'landlord_id'>
  & { documents: Array<(
    { __typename?: 'S3Document' }
    & Pick<S3Document, 'mime_type' | 's3_key'>
  )> }
);

export type GetLeasesAndOccupantsQueryVariables = Exact<{
  ownership_id: Scalars['String'];
}>;


export type GetLeasesAndOccupantsQuery = (
  { __typename?: 'Query' }
  & { getLeasesAndOccupants: (
    { __typename?: 'LeaseCollectionAPIResponse' }
    & LeaseCollectionApiResponseFieldsFragment
  ) }
);

export type GetRoomNoQueryVariables = Exact<{
  lease_id: Scalars['String'];
  ownership_id: Scalars['String'];
}>;


export type GetRoomNoQuery = (
  { __typename?: 'Query' }
  & { getRoomNo: (
    { __typename?: 'NumberAPIResponse' }
    & NumberApiResponseFieldsFragment
  ) }
);

export type CheckEligibleForLeaseAgreementQueryVariables = Exact<{
  lease_id: Scalars['String'];
  student_id: Scalars['String'];
}>;


export type CheckEligibleForLeaseAgreementQuery = (
  { __typename?: 'Query' }
  & { checkEligibleForLeaseAgreement: (
    { __typename?: 'LeaseAPIResponse' }
    & LeaseApiResponseFieldsFragment
  ) }
);

export type CanAddReviewQueryVariables = Exact<{
  student_id: Scalars['String'];
  property_id: Scalars['String'];
}>;


export type CanAddReviewQuery = (
  { __typename?: 'Query' }
  & { canAddReview: (
    { __typename?: 'DigitAPIResponse' }
    & Pick<DigitApiResponse, 'success' | 'error'>
    & { data?: Maybe<(
      { __typename?: 'Digit' }
      & Pick<Digit, 'value'>
    )> }
  ) }
);

export type GetAcceptedLeaseInfoQueryVariables = Exact<{
  student_id: Scalars['String'];
  lease_id: Scalars['String'];
  history_id: Scalars['String'];
}>;


export type GetAcceptedLeaseInfoQuery = (
  { __typename?: 'Query' }
  & { getAcceptedLeaseInfo: (
    { __typename?: 'LeaseHistorySummaryAPIResponse' }
    & Pick<LeaseHistorySummaryApiResponse, 'success' | 'error'>
    & { data?: Maybe<(
      { __typename?: 'LeaseHistorySummary' }
      & LeaseHistorySummaryFieldsFragment
    )> }
  ) }
);

export type GetAcceptedLeasesQueryVariables = Exact<{
  student_id: Scalars['String'];
}>;


export type GetAcceptedLeasesQuery = (
  { __typename?: 'Query' }
  & { getAcceptedLeases: (
    { __typename?: 'LeaseHistorySummaryCollectionAPIResponse' }
    & Pick<LeaseHistorySummaryCollectionApiResponse, 'success' | 'error'>
    & { data?: Maybe<(
      { __typename?: 'LeaseHistorySummaryCollection' }
      & { histories: Array<(
        { __typename?: 'LeaseHistorySummary' }
        & LeaseHistorySummaryFieldsFragment
      )> }
    )> }
  ) }
);

export type GetLeaseSummaryQueryVariables = Exact<{
  lease_id: Scalars['String'];
}>;


export type GetLeaseSummaryQuery = (
  { __typename?: 'Query' }
  & { getLeaseSummary: (
    { __typename?: 'LeaseSummaryAPIResponse' }
    & Pick<LeaseSummaryApiResponse, 'success' | 'error'>
    & { data?: Maybe<(
      { __typename?: 'LeaseSummary' }
      & Pick<LeaseSummary, 'room_no'>
      & { property: (
        { __typename?: 'Property' }
        & Pick<Property, '_id' | 'landlord' | 'address_line' | 'address_line_2' | 'city' | 'state' | 'zip'>
      ), lease: (
        { __typename?: 'Lease' }
        & Pick<Lease, '_id' | 'active' | 'ownership_id' | 'price_per_month' | 'occupant_id' | 'external_occupant' | 'lease_document_id' | 'lease_availability_start_date' | 'lease_availability_end_date'>
        & { priority?: Maybe<(
          { __typename?: 'LeasePriority' }
          & Pick<LeasePriority, 'level' | 'start_date' | 'end_date'>
        )>, lease_history: Array<(
          { __typename?: 'LeaseHistory' }
          & Pick<LeaseHistory, '_id' | 'price' | 'student_id' | 'start_date' | 'end_date'>
          & { review_of_property?: Maybe<(
            { __typename?: 'ReviewAndResponse' }
            & Pick<ReviewAndResponse, 'rating' | 'review' | 'response'>
          )>, review_of_landlord?: Maybe<(
            { __typename?: 'ReviewAndResponse' }
            & Pick<ReviewAndResponse, 'rating' | 'review' | 'response'>
          )>, property_images: Array<(
            { __typename?: 'LeaseImageInfo' }
            & Pick<LeaseImageInfo, 's3_key' | 'date_uploaded'>
          )> }
        )>, student_interests: Array<(
          { __typename?: 'StudentInterest' }
          & Pick<StudentInterest, 'student_id' | 'date' | 'accepted'>
        )>, students_that_declined?: Maybe<Array<(
          { __typename?: 'DeclineInfo' }
          & Pick<DeclineInfo, 'date' | 'student_id'>
        )>> }
      ), institutions: Array<(
        { __typename?: 'Institution' }
        & Pick<Institution, '_id' | 'name' | 's3_thumb_key'>
        & { location: (
          { __typename?: 'InstitutionLocationInfo' }
          & Pick<InstitutionLocationInfo, 'address' | 'city' | 'state' | 'zip' | 'longitude' | 'latitude'>
        ) }
      )>, students: Array<(
        { __typename?: 'Student' }
        & Pick<Student, '_id' | 'first_name' | 'last_name' | 'email' | 'phone_number'>
        & { auth_info?: Maybe<(
          { __typename?: 'CasAuthInfo' }
          & Pick<CasAuthInfo, 'institution_id'>
        )> }
      )>, lease_doc?: Maybe<(
        { __typename?: 'LeaseDocument' }
        & Pick<LeaseDocument, '_id' | 'lease_name' | 'landlord_id'>
        & { documents: Array<(
          { __typename?: 'S3Document' }
          & Pick<S3Document, 'mime_type' | 's3_key'>
        )> }
      )> }
    )> }
  ) }
);

export type AddLandlordResponseMutationVariables = Exact<{
  lease_id: Scalars['String'];
  history_id: Scalars['String'];
  review_response: Scalars['String'];
  response_type: Scalars['String'];
}>;


export type AddLandlordResponseMutation = (
  { __typename?: 'Mutation' }
  & { addLandlordResponse: (
    { __typename?: 'LeaseAPIResponse' }
    & LeaseApiResponseFieldsFragment
  ) }
);

export type DeclineLeaseAgreementMutationVariables = Exact<{
  student_id: Scalars['String'];
  lease_id: Scalars['String'];
}>;


export type DeclineLeaseAgreementMutation = (
  { __typename?: 'Mutation' }
  & { declineLeaseAgreement: (
    { __typename?: 'LeaseAPIResponse' }
    & LeaseApiResponseFieldsFragment
  ) }
);

export type AcceptLeaseAgreementMutationVariables = Exact<{
  student_id: Scalars['String'];
  lease_id: Scalars['String'];
}>;


export type AcceptLeaseAgreementMutation = (
  { __typename?: 'Mutation' }
  & { acceptLeaseAgreement: (
    { __typename?: 'LeaseAPIResponse' }
    & LeaseApiResponseFieldsFragment
  ) }
);

export type AcceptOrDeclineStudentInterestMutationVariables = Exact<{
  action: Scalars['String'];
  student_id: Scalars['String'];
  lease_id: Scalars['String'];
}>;


export type AcceptOrDeclineStudentInterestMutation = (
  { __typename?: 'Mutation' }
  & { acceptOrDeclineStudentInterest: (
    { __typename?: 'LeaseAPIResponse' }
    & LeaseApiResponseFieldsFragment
  ) }
);

export type ExpressInterestMutationVariables = Exact<{
  student_id: Scalars['String'];
  lease_id: Scalars['String'];
}>;


export type ExpressInterestMutation = (
  { __typename?: 'Mutation' }
  & { expressInterest: (
    { __typename?: 'LeaseAPIResponse' }
    & LeaseApiResponseFieldsFragment
  ) }
);

export type AddReviewForLeaseMutationVariables = Exact<{
  lease_id: Scalars['String'];
  student_id: Scalars['String'];
  property_review: Scalars['String'];
  property_rating: Scalars['Float'];
  landlord_review: Scalars['String'];
  landlord_rating: Scalars['Float'];
  property_images: Array<Scalars['String']> | Scalars['String'];
}>;


export type AddReviewForLeaseMutation = (
  { __typename?: 'Mutation' }
  & { addReviewForLease: (
    { __typename?: 'LeaseAPIResponse' }
    & LeaseApiResponseFieldsFragment
  ) }
);

export type ActivateLeaseMutationVariables = Exact<{
  lease_id: Scalars['String'];
  lease_document_id: Scalars['String'];
  price_per_month: Scalars['Float'];
  lease_start_date: Scalars['String'];
  lease_end_date: Scalars['String'];
}>;


export type ActivateLeaseMutation = (
  { __typename?: 'Mutation' }
  & { activateLease: (
    { __typename?: 'LeaseAPIResponse' }
    & LeaseApiResponseFieldsFragment
  ) }
);

export type UpdateUnoccupiedLeasesMutationVariables = Exact<{
  ownership_id: Scalars['String'];
  leases_info: Array<LeaseUpdateInput> | LeaseUpdateInput;
}>;


export type UpdateUnoccupiedLeasesMutation = (
  { __typename?: 'Mutation' }
  & { updateUnoccupiedLeases: (
    { __typename?: 'LeaseCollectionAPIResponse' }
    & LeaseCollectionApiResponseFieldsFragment
  ) }
);

export type LeaseApiResponseFieldsFragment = (
  { __typename?: 'LeaseAPIResponse' }
  & Pick<LeaseApiResponse, 'success' | 'error'>
  & { data?: Maybe<(
    { __typename?: 'Lease' }
    & LeaseFieldsFragment
  )> }
);

export type LeaseCollectionApiResponseFieldsFragment = (
  { __typename?: 'LeaseCollectionAPIResponse' }
  & Pick<LeaseCollectionApiResponse, 'success' | 'error'>
  & { data?: Maybe<(
    { __typename?: 'LeaseCollection' }
    & { leases: Array<(
      { __typename?: 'Lease' }
      & LeaseFieldsFragment
    )> }
  )> }
);

export type LeaseFieldsFragment = (
  { __typename?: 'Lease' }
  & Pick<Lease, '_id' | 'active' | 'ownership_id' | 'price_per_month' | 'occupant_id' | 'external_occupant' | 'lease_document_id' | 'lease_availability_start_date' | 'lease_availability_end_date'>
  & { occupant_doc?: Maybe<(
    { __typename?: 'Student' }
    & LeaseOccupantFragment
  )>, priority?: Maybe<(
    { __typename?: 'LeasePriority' }
    & Pick<LeasePriority, 'level' | 'start_date' | 'end_date'>
  )>, lease_history: Array<(
    { __typename?: 'LeaseHistory' }
    & Pick<LeaseHistory, 'price' | 'student_id' | 'start_date' | 'end_date'>
    & { review_of_property?: Maybe<(
      { __typename?: 'ReviewAndResponse' }
      & Pick<ReviewAndResponse, 'rating' | 'review' | 'response'>
    )>, review_of_landlord?: Maybe<(
      { __typename?: 'ReviewAndResponse' }
      & Pick<ReviewAndResponse, 'rating' | 'review' | 'response'>
    )>, property_images: Array<(
      { __typename?: 'LeaseImageInfo' }
      & Pick<LeaseImageInfo, 's3_key' | 'date_uploaded'>
    )> }
  )>, student_interests: Array<(
    { __typename?: 'StudentInterest' }
    & Pick<StudentInterest, 'student_id' | 'date' | 'accepted'>
  )>, students_that_declined?: Maybe<Array<(
    { __typename?: 'DeclineInfo' }
    & Pick<DeclineInfo, 'date' | 'student_id'>
  )>> }
);

export type LeaseOccupantFragment = (
  { __typename?: 'Student' }
  & Pick<Student, '_id' | 'first_name' | 'phone_number' | 'last_name' | 'email' | 'elevated_privileges'>
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
);

export type NumberApiResponseFieldsFragment = (
  { __typename?: 'NumberAPIResponse' }
  & Pick<NumberApiResponse, 'success' | 'error'>
  & { data?: Maybe<(
    { __typename?: 'NumberValue' }
    & Pick<NumberValue, 'value'>
  )> }
);

export type LeaseHistoryFieldsFragment = (
  { __typename?: 'LeaseHistory' }
  & Pick<LeaseHistory, 'price' | 'student_id' | 'start_date' | 'end_date'>
  & { review_of_property?: Maybe<(
    { __typename?: 'ReviewAndResponse' }
    & Pick<ReviewAndResponse, 'rating' | 'review' | 'response'>
  )>, review_of_landlord?: Maybe<(
    { __typename?: 'ReviewAndResponse' }
    & Pick<ReviewAndResponse, 'rating' | 'review' | 'response'>
  )>, property_images: Array<(
    { __typename?: 'LeaseImageInfo' }
    & Pick<LeaseImageInfo, 's3_key' | 'date_uploaded'>
  )> }
);

export type LeaseHistorySummaryFieldsFragment = (
  { __typename?: 'LeaseHistorySummary' }
  & Pick<LeaseHistorySummary, 'room_no' | 'lease_history_id'>
  & { lease_history: (
    { __typename?: 'LeaseHistory' }
    & LeaseHistoryFieldsFragment
  ), landlord: (
    { __typename?: 'Landlord' }
    & LandlordFieldsFragment
  ), lease: (
    { __typename?: 'Lease' }
    & LeaseFieldsFragment
  ), property: (
    { __typename?: 'Property' }
    & PropertyFieldsFragment
  ) }
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

export type GetOwnershipForPropertyQueryVariables = Exact<{
  property_id: Scalars['String'];
  landlord_id: Scalars['String'];
}>;


export type GetOwnershipForPropertyQuery = (
  { __typename?: 'Query' }
  & { getOwnershipForProperty: (
    { __typename?: 'OwnershipAPIResponse' }
    & OwnershipApiResponseFieldsFragment
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

export type GetPropertyForOwnershipQueryVariables = Exact<{
  ownership_id: Scalars['String'];
}>;


export type GetPropertyForOwnershipQuery = (
  { __typename?: 'Query' }
  & { getPropertyForOwnership: (
    { __typename?: 'PropertyAPIResponse' }
    & PropertyApiResponseFieldsFragment
  ) }
);

export type GetPropertySummaryQueryVariables = Exact<{
  property_id: Scalars['String'];
  student_id: Scalars['String'];
}>;


export type GetPropertySummaryQuery = (
  { __typename?: 'Query' }
  & { getPropertySummary: (
    { __typename?: 'PropertySummaryAPIResponse' }
    & Pick<PropertySummaryApiResponse, 'success' | 'error'>
    & { data?: Maybe<(
      { __typename?: 'PropertySummary' }
      & { property: (
        { __typename?: 'Property' }
        & Pick<Property, '_id' | 'address_line' | 'address_line_2' | 'city' | 'state' | 'zip'>
        & { details?: Maybe<(
          { __typename?: 'PropertyDetails' }
          & Pick<PropertyDetails, 'description' | 'rooms' | 'bathrooms' | 'sq_ft' | 'furnished' | 'has_washer' | 'has_heater' | 'has_ac'>
          & { property_images: Array<(
            { __typename?: 'PropertyImageInfo' }
            & Pick<PropertyImageInfo, 's3_key' | 'date_uploaded'>
          )> }
        )> }
      ), leases: Array<(
        { __typename?: 'LeaseAndAvailability' }
        & Pick<LeaseAndAvailability, 'able_to_lease'>
        & { lease: (
          { __typename?: 'Lease' }
          & Pick<Lease, '_id' | 'price_per_month' | 'lease_availability_start_date' | 'lease_availability_end_date'>
          & { lease_history: Array<(
            { __typename?: 'LeaseHistory' }
            & Pick<LeaseHistory, 'student_id' | 'start_date' | 'end_date'>
            & { review_of_property?: Maybe<(
              { __typename?: 'ReviewAndResponse' }
              & Pick<ReviewAndResponse, 'rating' | 'review' | 'response'>
            )>, review_of_landlord?: Maybe<(
              { __typename?: 'ReviewAndResponse' }
              & Pick<ReviewAndResponse, 'rating' | 'review' | 'response'>
            )>, property_images: Array<(
              { __typename?: 'LeaseImageInfo' }
              & Pick<LeaseImageInfo, 's3_key' | 'date_uploaded'>
            )> }
          )>, student_interests: Array<(
            { __typename?: 'StudentInterest' }
            & Pick<StudentInterest, 'student_id' | 'date'>
          )>, students_that_declined?: Maybe<Array<(
            { __typename?: 'DeclineInfo' }
            & Pick<DeclineInfo, 'date' | 'student_id'>
          )>> }
        ) }
      )>, landlord: (
        { __typename?: 'Landlord' }
        & Pick<Landlord, '_id' | 'first_name' | 'last_name'>
      ) }
    )> }
  ) }
);

export type GetPropertyOwnedByLandlordQueryVariables = Exact<{
  property_id: Scalars['String'];
  landlord_id: Scalars['String'];
  with_leases?: Maybe<Scalars['Boolean']>;
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
  with_leases?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
}>;


export type GetPropertiesForLandlordQuery = (
  { __typename?: 'Query' }
  & { getPropertiesForLandlord: (
    { __typename?: 'PropertyListAPIResponse' }
    & PropertyListWithLeasesApiResponseFieldsFragment
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

export type SearchForPropertiesQueryVariables = Exact<{
  price_start: Scalars['Float'];
  price_end: Scalars['Float'];
  rooms: Scalars['Int'];
  distance: Scalars['Float'];
}>;


export type SearchForPropertiesQuery = (
  { __typename?: 'Query' }
  & { searchForProperties: (
    { __typename?: 'PropertySearchResultCollectionAPIResult' }
    & Pick<PropertySearchResultCollectionApiResult, 'success' | 'error'>
    & { data?: Maybe<(
      { __typename?: 'PropertySearchResultCollection' }
      & { search_results: Array<(
        { __typename?: 'PropertySearchResult' }
        & Pick<PropertySearchResult, 'landlord_first_name' | 'landlord_last_name' | 'price_range' | 'lease_count' | 'landlord_rating_avg' | 'property_rating_avg' | 'landlord_rating_count' | 'property_rating_count'>
        & { property: (
          { __typename?: 'Property' }
          & PropertyFieldsFragment
        ) }
      )> }
    )> }
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
    & PropertyFieldsFragment
  )> }
);

export type PropertyListApiResponseFieldsFragment = (
  { __typename?: 'PropertyListAPIResponse' }
  & Pick<PropertyListApiResponse, 'success' | 'error'>
  & { data?: Maybe<(
    { __typename?: 'PropertyList' }
    & { properties: Array<(
      { __typename?: 'Property' }
      & PropertyFieldsFragment
    )> }
  )> }
);

export type PropertyListWithLeasesApiResponseFieldsFragment = (
  { __typename?: 'PropertyListAPIResponse' }
  & Pick<PropertyListApiResponse, 'success' | 'error'>
  & { data?: Maybe<(
    { __typename?: 'PropertyList' }
    & { properties: Array<(
      { __typename?: 'Property' }
      & { leases?: Maybe<Array<(
        { __typename?: 'Lease' }
        & Pick<Lease, '_id' | 'active' | 'ownership_id' | 'price_per_month' | 'occupant_id' | 'external_occupant' | 'lease_document_id' | 'lease_availability_start_date' | 'lease_availability_end_date'>
        & { lease_history: Array<(
          { __typename?: 'LeaseHistory' }
          & Pick<LeaseHistory, 'price' | 'student_id' | 'start_date' | 'end_date'>
          & { review_of_property?: Maybe<(
            { __typename?: 'ReviewAndResponse' }
            & Pick<ReviewAndResponse, 'rating' | 'review' | 'response'>
          )>, review_of_landlord?: Maybe<(
            { __typename?: 'ReviewAndResponse' }
            & Pick<ReviewAndResponse, 'rating' | 'review' | 'response'>
          )>, property_images: Array<(
            { __typename?: 'LeaseImageInfo' }
            & Pick<LeaseImageInfo, 's3_key' | 'date_uploaded'>
          )> }
        )>, student_interests: Array<(
          { __typename?: 'StudentInterest' }
          & Pick<StudentInterest, 'student_id' | 'date'>
        )> }
      )>> }
      & PropertyFieldsFragment
    )> }
  )> }
);

export type PropertyListWithLeaseApiResponseFragment = (
  { __typename?: 'PropertyListAPIResponse' }
  & Pick<PropertyListApiResponse, 'success' | 'error'>
  & { data?: Maybe<(
    { __typename?: 'PropertyList' }
    & { properties: Array<(
      { __typename?: 'Property' }
      & PropertyWithLeaseFieldsFragment
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

export type PropertyFieldsFragment = (
  { __typename?: 'Property' }
  & Pick<Property, '_id' | 'landlord' | 'address_line' | 'address_line_2' | 'city' | 'state' | 'zip'>
  & { details?: Maybe<(
    { __typename?: 'PropertyDetails' }
    & Pick<PropertyDetails, 'description' | 'rooms' | 'bathrooms' | 'sq_ft' | 'furnished' | 'has_washer' | 'has_heater' | 'has_ac'>
    & { property_images: Array<(
      { __typename?: 'PropertyImageInfo' }
      & Pick<PropertyImageInfo, 's3_key' | 'date_uploaded'>
    )> }
  )>, directions?: Maybe<Array<(
    { __typename?: 'PropertyDirections' }
    & Pick<PropertyDirections, 'institution_id'>
    & { foot_walking_directions?: Maybe<Array<(
      { __typename?: 'DirectionCoordinates' }
      & Pick<DirectionCoordinates, 'distance' | 'coordinates'>
    )>>, driving_car_directions?: Maybe<Array<(
      { __typename?: 'DirectionCoordinates' }
      & Pick<DirectionCoordinates, 'distance' | 'coordinates'>
    )>>, cycling_regular_directions?: Maybe<Array<(
      { __typename?: 'DirectionCoordinates' }
      & Pick<DirectionCoordinates, 'distance' | 'coordinates'>
    )>> }
  )>> }
);

export type PropertyWithLeaseFieldsFragment = (
  { __typename?: 'Property' }
  & { leases?: Maybe<Array<(
    { __typename?: 'Lease' }
    & Pick<Lease, '_id' | 'active' | 'ownership_id' | 'price_per_month' | 'external_occupant' | 'lease_availability_end_date' | 'lease_availability_start_date' | 'lease_document_id'>
    & { lease_history: Array<(
      { __typename?: 'LeaseHistory' }
      & Pick<LeaseHistory, 'price' | 'student_id' | 'start_date' | 'end_date'>
      & { property_images: Array<(
        { __typename?: 'LeaseImageInfo' }
        & Pick<LeaseImageInfo, 's3_key' | 'date_uploaded'>
      )> }
    )>, student_interests: Array<(
      { __typename?: 'StudentInterest' }
      & Pick<StudentInterest, 'student_id' | 'date'>
    )> }
  )>> }
  & PropertyFieldsFragment
);

export type StatsStudentAccountCreationMutationVariables = Exact<{
  student_id: Scalars['String'];
}>;


export type StatsStudentAccountCreationMutation = (
  { __typename?: 'Mutation' }
  & { Stats_StudentAccountCreation: (
    { __typename?: 'StatsResponse' }
    & Pick<StatsResponse, 'v'>
  ) }
);

export type StatsStudentLoginMutationVariables = Exact<{
  student_id: Scalars['String'];
}>;


export type StatsStudentLoginMutation = (
  { __typename?: 'Mutation' }
  & { Stats_StudentLogin: (
    { __typename?: 'StatsResponse' }
    & Pick<StatsResponse, 'v'>
  ) }
);

export type StatsLandlordAccountCreationMutationVariables = Exact<{
  landlord_id: Scalars['String'];
}>;


export type StatsLandlordAccountCreationMutation = (
  { __typename?: 'Mutation' }
  & { Stats_LandlordAccountCreation: (
    { __typename?: 'StatsResponse' }
    & Pick<StatsResponse, 'v'>
  ) }
);

export type StatsLandlordLoginMutationVariables = Exact<{
  landlord_id: Scalars['String'];
}>;


export type StatsLandlordLoginMutation = (
  { __typename?: 'Mutation' }
  & { Stats_LandlordLogin: (
    { __typename?: 'StatsResponse' }
    & Pick<StatsResponse, 'v'>
  ) }
);

export type StatsLandlordOpenLeaseMutationVariables = Exact<{
  landlord_id: Scalars['String'];
  property_id: Scalars['String'];
  lease_id: Scalars['String'];
}>;


export type StatsLandlordOpenLeaseMutation = (
  { __typename?: 'Mutation' }
  & { Stats_LandlordOpenLease: (
    { __typename?: 'StatsResponse' }
    & Pick<StatsResponse, 'v'>
  ) }
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

export type GetStudentNotificationsQueryVariables = Exact<{
  student_id: Scalars['String'];
}>;


export type GetStudentNotificationsQuery = (
  { __typename?: 'Query' }
  & { getStudentNotifications: (
    { __typename?: 'StudentNotificationAPIResponse' }
    & Pick<StudentNotificationApiResponse, 'success' | 'error'>
    & { data?: Maybe<(
      { __typename?: 'StudentNotificationCollection' }
      & { notifications: Array<(
        { __typename?: 'StudentNotification' }
        & Pick<StudentNotification, '_id' | 'date_created' | 'date_seen' | 'subject' | 'body'>
        & { action?: Maybe<(
          { __typename?: 'NotificationAction' }
          & Pick<NotificationAction, 'action_text' | 'action_url'>
        )> }
      )> }
    )> }
  ) }
);

export type MarkAsSeenMutationVariables = Exact<{
  student_id: Scalars['String'];
  notification_id: Scalars['String'];
}>;


export type MarkAsSeenMutation = (
  { __typename?: 'Mutation' }
  & { markStudentNotificationAsSeen: (
    { __typename?: 'StudentNotificationAPIResponse' }
    & Pick<StudentNotificationApiResponse, 'success' | 'error'>
    & { data?: Maybe<(
      { __typename?: 'StudentNotificationCollection' }
      & { notifications: Array<(
        { __typename?: 'StudentNotification' }
        & Pick<StudentNotification, '_id' | 'date_created' | 'date_seen' | 'subject' | 'body'>
        & { action?: Maybe<(
          { __typename?: 'NotificationAction' }
          & Pick<NotificationAction, 'action_text' | 'action_url'>
        )> }
      )> }
    )> }
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
      longitude
      latitude
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
        longitude
        latitude
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
export const LeaseDocumentFieldsFragmentDoc = gql`
    fragment LeaseDocumentFields on LeaseDocument {
  _id
  lease_name
  documents {
    mime_type
    s3_key
  }
  landlord_id
}
    `;
export const MultipleLeaseDocumentsApiResponseFieldsFragmentDoc = gql`
    fragment MultipleLeaseDocumentsAPIResponseFields on MultipleLeaseDocumentsAPIResponse {
  success
  error
  data {
    lease_documents {
      ...LeaseDocumentFields
    }
  }
}
    ${LeaseDocumentFieldsFragmentDoc}`;
export const LeaseDocumentApiResponseFieldsFragmentDoc = gql`
    fragment LeaseDocumentAPIResponseFields on LeaseDocumentAPIResponse {
  success
  error
  data {
    ...LeaseDocumentFields
  }
}
    ${LeaseDocumentFieldsFragmentDoc}`;
export const LeaseOccupantFragmentDoc = gql`
    fragment LeaseOccupant on Student {
  _id
  first_name
  phone_number
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
    `;
export const LeaseFieldsFragmentDoc = gql`
    fragment LeaseFields on Lease {
  _id
  active
  ownership_id
  price_per_month
  occupant_id
  occupant_doc {
    ...LeaseOccupant
  }
  external_occupant
  priority {
    level
    start_date
    end_date
  }
  lease_document_id
  lease_availability_start_date
  lease_availability_end_date
  lease_history {
    price
    student_id
    start_date
    end_date
    review_of_property {
      rating
      review
      response
    }
    review_of_landlord {
      rating
      review
      response
    }
    property_images {
      s3_key
      date_uploaded
    }
  }
  student_interests {
    student_id
    date
    accepted
  }
  students_that_declined {
    date
    student_id
  }
}
    ${LeaseOccupantFragmentDoc}`;
export const LeaseApiResponseFieldsFragmentDoc = gql`
    fragment LeaseAPIResponseFields on LeaseAPIResponse {
  success
  error
  data {
    ...LeaseFields
  }
}
    ${LeaseFieldsFragmentDoc}`;
export const LeaseCollectionApiResponseFieldsFragmentDoc = gql`
    fragment LeaseCollectionAPIResponseFields on LeaseCollectionAPIResponse {
  success
  error
  data {
    leases {
      ...LeaseFields
    }
  }
}
    ${LeaseFieldsFragmentDoc}`;
export const NumberApiResponseFieldsFragmentDoc = gql`
    fragment NumberAPIResponseFields on NumberAPIResponse {
  success
  error
  data {
    value
  }
}
    `;
export const LeaseHistoryFieldsFragmentDoc = gql`
    fragment LeaseHistoryFields on LeaseHistory {
  price
  student_id
  start_date
  end_date
  review_of_property {
    rating
    review
    response
  }
  review_of_landlord {
    rating
    review
    response
  }
  property_images {
    s3_key
    date_uploaded
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
export const PropertyFieldsFragmentDoc = gql`
    fragment PropertyFields on Property {
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
  directions {
    institution_id
    foot_walking_directions {
      distance
      coordinates
    }
    driving_car_directions {
      distance
      coordinates
    }
    cycling_regular_directions {
      distance
      coordinates
    }
  }
}
    `;
export const LeaseHistorySummaryFieldsFragmentDoc = gql`
    fragment LeaseHistorySummaryFields on LeaseHistorySummary {
  room_no
  lease_history_id
  lease_history {
    ...LeaseHistoryFields
  }
  landlord {
    ...LandlordFields
  }
  lease {
    ...LeaseFields
  }
  property {
    ...PropertyFields
  }
}
    ${LeaseHistoryFieldsFragmentDoc}
${LandlordFieldsFragmentDoc}
${LeaseFieldsFragmentDoc}
${PropertyFieldsFragmentDoc}`;
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
    ...PropertyFields
  }
}
    ${PropertyFieldsFragmentDoc}`;
export const PropertyListApiResponseFieldsFragmentDoc = gql`
    fragment PropertyListAPIResponseFields on PropertyListAPIResponse {
  success
  error
  data {
    properties {
      ...PropertyFields
    }
  }
}
    ${PropertyFieldsFragmentDoc}`;
export const PropertyListWithLeasesApiResponseFieldsFragmentDoc = gql`
    fragment PropertyListWithLeasesAPIResponseFields on PropertyListAPIResponse {
  success
  error
  data {
    properties {
      ...PropertyFields
      leases {
        _id
        active
        ownership_id
        price_per_month
        occupant_id
        external_occupant
        lease_document_id
        lease_availability_start_date
        lease_availability_end_date
        lease_history {
          price
          student_id
          start_date
          end_date
          review_of_property {
            rating
            review
            response
          }
          review_of_landlord {
            rating
            review
            response
          }
          property_images {
            s3_key
            date_uploaded
          }
        }
        student_interests {
          student_id
          date
        }
      }
    }
  }
}
    ${PropertyFieldsFragmentDoc}`;
export const PropertyWithLeaseFieldsFragmentDoc = gql`
    fragment PropertyWithLeaseFields on Property {
  ...PropertyFields
  leases {
    _id
    active
    ownership_id
    price_per_month
    external_occupant
    lease_availability_end_date
    lease_availability_start_date
    lease_document_id
    lease_history {
      price
      student_id
      start_date
      end_date
      property_images {
        s3_key
        date_uploaded
      }
    }
    student_interests {
      student_id
      date
    }
  }
}
    ${PropertyFieldsFragmentDoc}`;
export const PropertyListWithLeaseApiResponseFragmentDoc = gql`
    fragment PropertyListWithLeaseAPIResponse on PropertyListAPIResponse {
  success
  error
  data {
    properties {
      ...PropertyWithLeaseFields
    }
  }
}
    ${PropertyWithLeaseFieldsFragmentDoc}`;
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
export const GetLandlordDocument = gql`
    query GetLandlord($landlord_id: String!) {
  getLandlord(_id: $landlord_id) {
    ...LandlordAPIResponseFields
  }
}
    ${LandlordApiResponseFieldsFragmentDoc}`;

/**
 * __useGetLandlordQuery__
 *
 * To run a query within a React component, call `useGetLandlordQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLandlordQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLandlordQuery({
 *   variables: {
 *      landlord_id: // value for 'landlord_id'
 *   },
 * });
 */
export function useGetLandlordQuery(baseOptions: Apollo.QueryHookOptions<GetLandlordQuery, GetLandlordQueryVariables>) {
        return Apollo.useQuery<GetLandlordQuery, GetLandlordQueryVariables>(GetLandlordDocument, baseOptions);
      }
export function useGetLandlordLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLandlordQuery, GetLandlordQueryVariables>) {
          return Apollo.useLazyQuery<GetLandlordQuery, GetLandlordQueryVariables>(GetLandlordDocument, baseOptions);
        }
export type GetLandlordQueryHookResult = ReturnType<typeof useGetLandlordQuery>;
export type GetLandlordLazyQueryHookResult = ReturnType<typeof useGetLandlordLazyQuery>;
export type GetLandlordQueryResult = Apollo.QueryResult<GetLandlordQuery, GetLandlordQueryVariables>;
export const LandlordResetPasswordDocument = gql`
    mutation LandlordResetPassword($email: String!, $reset_key: String!, $new_password: String!) {
  resetPassword(email: $email, reset_key: $reset_key, new_password: $new_password) {
    success
    error
  }
}
    `;
export type LandlordResetPasswordMutationFn = Apollo.MutationFunction<LandlordResetPasswordMutation, LandlordResetPasswordMutationVariables>;

/**
 * __useLandlordResetPasswordMutation__
 *
 * To run a mutation, you first call `useLandlordResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLandlordResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [landlordResetPasswordMutation, { data, loading, error }] = useLandlordResetPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *      reset_key: // value for 'reset_key'
 *      new_password: // value for 'new_password'
 *   },
 * });
 */
export function useLandlordResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<LandlordResetPasswordMutation, LandlordResetPasswordMutationVariables>) {
        return Apollo.useMutation<LandlordResetPasswordMutation, LandlordResetPasswordMutationVariables>(LandlordResetPasswordDocument, baseOptions);
      }
export type LandlordResetPasswordMutationHookResult = ReturnType<typeof useLandlordResetPasswordMutation>;
export type LandlordResetPasswordMutationResult = Apollo.MutationResult<LandlordResetPasswordMutation>;
export type LandlordResetPasswordMutationOptions = Apollo.BaseMutationOptions<LandlordResetPasswordMutation, LandlordResetPasswordMutationVariables>;
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
export const CheckPasswordResetKeyDocument = gql`
    query CheckPasswordResetKey($reset_key: String!, $email: String!) {
  checkPasswordResetKey(reset_key: $reset_key, email: $email) {
    success
  }
}
    `;

/**
 * __useCheckPasswordResetKeyQuery__
 *
 * To run a query within a React component, call `useCheckPasswordResetKeyQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckPasswordResetKeyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckPasswordResetKeyQuery({
 *   variables: {
 *      reset_key: // value for 'reset_key'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useCheckPasswordResetKeyQuery(baseOptions: Apollo.QueryHookOptions<CheckPasswordResetKeyQuery, CheckPasswordResetKeyQueryVariables>) {
        return Apollo.useQuery<CheckPasswordResetKeyQuery, CheckPasswordResetKeyQueryVariables>(CheckPasswordResetKeyDocument, baseOptions);
      }
export function useCheckPasswordResetKeyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckPasswordResetKeyQuery, CheckPasswordResetKeyQueryVariables>) {
          return Apollo.useLazyQuery<CheckPasswordResetKeyQuery, CheckPasswordResetKeyQueryVariables>(CheckPasswordResetKeyDocument, baseOptions);
        }
export type CheckPasswordResetKeyQueryHookResult = ReturnType<typeof useCheckPasswordResetKeyQuery>;
export type CheckPasswordResetKeyLazyQueryHookResult = ReturnType<typeof useCheckPasswordResetKeyLazyQuery>;
export type CheckPasswordResetKeyQueryResult = Apollo.QueryResult<CheckPasswordResetKeyQuery, CheckPasswordResetKeyQueryVariables>;
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
export const SendPasswordResetDocument = gql`
    mutation SendPasswordReset($email: String!) {
  sendPasswordReset(email: $email) {
    success
  }
}
    `;
export type SendPasswordResetMutationFn = Apollo.MutationFunction<SendPasswordResetMutation, SendPasswordResetMutationVariables>;

/**
 * __useSendPasswordResetMutation__
 *
 * To run a mutation, you first call `useSendPasswordResetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendPasswordResetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendPasswordResetMutation, { data, loading, error }] = useSendPasswordResetMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useSendPasswordResetMutation(baseOptions?: Apollo.MutationHookOptions<SendPasswordResetMutation, SendPasswordResetMutationVariables>) {
        return Apollo.useMutation<SendPasswordResetMutation, SendPasswordResetMutationVariables>(SendPasswordResetDocument, baseOptions);
      }
export type SendPasswordResetMutationHookResult = ReturnType<typeof useSendPasswordResetMutation>;
export type SendPasswordResetMutationResult = Apollo.MutationResult<SendPasswordResetMutation>;
export type SendPasswordResetMutationOptions = Apollo.BaseMutationOptions<SendPasswordResetMutation, SendPasswordResetMutationVariables>;
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
export const GetLeaseDocumentsForLandlordDocument = gql`
    query GetLeaseDocumentsForLandlord($landlord_id: String!) {
  getLeaseDocumentsForLandlord(landlord_id: $landlord_id) {
    ...MultipleLeaseDocumentsAPIResponseFields
  }
}
    ${MultipleLeaseDocumentsApiResponseFieldsFragmentDoc}`;

/**
 * __useGetLeaseDocumentsForLandlordQuery__
 *
 * To run a query within a React component, call `useGetLeaseDocumentsForLandlordQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLeaseDocumentsForLandlordQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLeaseDocumentsForLandlordQuery({
 *   variables: {
 *      landlord_id: // value for 'landlord_id'
 *   },
 * });
 */
export function useGetLeaseDocumentsForLandlordQuery(baseOptions: Apollo.QueryHookOptions<GetLeaseDocumentsForLandlordQuery, GetLeaseDocumentsForLandlordQueryVariables>) {
        return Apollo.useQuery<GetLeaseDocumentsForLandlordQuery, GetLeaseDocumentsForLandlordQueryVariables>(GetLeaseDocumentsForLandlordDocument, baseOptions);
      }
export function useGetLeaseDocumentsForLandlordLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLeaseDocumentsForLandlordQuery, GetLeaseDocumentsForLandlordQueryVariables>) {
          return Apollo.useLazyQuery<GetLeaseDocumentsForLandlordQuery, GetLeaseDocumentsForLandlordQueryVariables>(GetLeaseDocumentsForLandlordDocument, baseOptions);
        }
export type GetLeaseDocumentsForLandlordQueryHookResult = ReturnType<typeof useGetLeaseDocumentsForLandlordQuery>;
export type GetLeaseDocumentsForLandlordLazyQueryHookResult = ReturnType<typeof useGetLeaseDocumentsForLandlordLazyQuery>;
export type GetLeaseDocumentsForLandlordQueryResult = Apollo.QueryResult<GetLeaseDocumentsForLandlordQuery, GetLeaseDocumentsForLandlordQueryVariables>;
export const AddNewLeaseDocumentDocument = gql`
    mutation AddNewLeaseDocument($lease_name: String!, $landlord_id: String!, $document_keys: [String!]!, $document_mimes: [String!]!) {
  addNewLeaseDocument(
    lease_name: $lease_name
    landlord_id: $landlord_id
    document_keys: $document_keys
    document_mimes: $document_mimes
  ) {
    ...LeaseDocumentAPIResponseFields
  }
}
    ${LeaseDocumentApiResponseFieldsFragmentDoc}`;
export type AddNewLeaseDocumentMutationFn = Apollo.MutationFunction<AddNewLeaseDocumentMutation, AddNewLeaseDocumentMutationVariables>;

/**
 * __useAddNewLeaseDocumentMutation__
 *
 * To run a mutation, you first call `useAddNewLeaseDocumentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddNewLeaseDocumentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addNewLeaseDocumentMutation, { data, loading, error }] = useAddNewLeaseDocumentMutation({
 *   variables: {
 *      lease_name: // value for 'lease_name'
 *      landlord_id: // value for 'landlord_id'
 *      document_keys: // value for 'document_keys'
 *      document_mimes: // value for 'document_mimes'
 *   },
 * });
 */
export function useAddNewLeaseDocumentMutation(baseOptions?: Apollo.MutationHookOptions<AddNewLeaseDocumentMutation, AddNewLeaseDocumentMutationVariables>) {
        return Apollo.useMutation<AddNewLeaseDocumentMutation, AddNewLeaseDocumentMutationVariables>(AddNewLeaseDocumentDocument, baseOptions);
      }
export type AddNewLeaseDocumentMutationHookResult = ReturnType<typeof useAddNewLeaseDocumentMutation>;
export type AddNewLeaseDocumentMutationResult = Apollo.MutationResult<AddNewLeaseDocumentMutation>;
export type AddNewLeaseDocumentMutationOptions = Apollo.BaseMutationOptions<AddNewLeaseDocumentMutation, AddNewLeaseDocumentMutationVariables>;
export const GetLeasesAndOccupantsDocument = gql`
    query GetLeasesAndOccupants($ownership_id: String!) {
  getLeasesAndOccupants(ownership_id: $ownership_id) {
    ...LeaseCollectionAPIResponseFields
  }
}
    ${LeaseCollectionApiResponseFieldsFragmentDoc}`;

/**
 * __useGetLeasesAndOccupantsQuery__
 *
 * To run a query within a React component, call `useGetLeasesAndOccupantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLeasesAndOccupantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLeasesAndOccupantsQuery({
 *   variables: {
 *      ownership_id: // value for 'ownership_id'
 *   },
 * });
 */
export function useGetLeasesAndOccupantsQuery(baseOptions: Apollo.QueryHookOptions<GetLeasesAndOccupantsQuery, GetLeasesAndOccupantsQueryVariables>) {
        return Apollo.useQuery<GetLeasesAndOccupantsQuery, GetLeasesAndOccupantsQueryVariables>(GetLeasesAndOccupantsDocument, baseOptions);
      }
export function useGetLeasesAndOccupantsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLeasesAndOccupantsQuery, GetLeasesAndOccupantsQueryVariables>) {
          return Apollo.useLazyQuery<GetLeasesAndOccupantsQuery, GetLeasesAndOccupantsQueryVariables>(GetLeasesAndOccupantsDocument, baseOptions);
        }
export type GetLeasesAndOccupantsQueryHookResult = ReturnType<typeof useGetLeasesAndOccupantsQuery>;
export type GetLeasesAndOccupantsLazyQueryHookResult = ReturnType<typeof useGetLeasesAndOccupantsLazyQuery>;
export type GetLeasesAndOccupantsQueryResult = Apollo.QueryResult<GetLeasesAndOccupantsQuery, GetLeasesAndOccupantsQueryVariables>;
export const GetRoomNoDocument = gql`
    query GetRoomNo($lease_id: String!, $ownership_id: String!) {
  getRoomNo(lease_id: $lease_id, ownership_id: $ownership_id) {
    ...NumberAPIResponseFields
  }
}
    ${NumberApiResponseFieldsFragmentDoc}`;

/**
 * __useGetRoomNoQuery__
 *
 * To run a query within a React component, call `useGetRoomNoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRoomNoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRoomNoQuery({
 *   variables: {
 *      lease_id: // value for 'lease_id'
 *      ownership_id: // value for 'ownership_id'
 *   },
 * });
 */
export function useGetRoomNoQuery(baseOptions: Apollo.QueryHookOptions<GetRoomNoQuery, GetRoomNoQueryVariables>) {
        return Apollo.useQuery<GetRoomNoQuery, GetRoomNoQueryVariables>(GetRoomNoDocument, baseOptions);
      }
export function useGetRoomNoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRoomNoQuery, GetRoomNoQueryVariables>) {
          return Apollo.useLazyQuery<GetRoomNoQuery, GetRoomNoQueryVariables>(GetRoomNoDocument, baseOptions);
        }
export type GetRoomNoQueryHookResult = ReturnType<typeof useGetRoomNoQuery>;
export type GetRoomNoLazyQueryHookResult = ReturnType<typeof useGetRoomNoLazyQuery>;
export type GetRoomNoQueryResult = Apollo.QueryResult<GetRoomNoQuery, GetRoomNoQueryVariables>;
export const CheckEligibleForLeaseAgreementDocument = gql`
    query CheckEligibleForLeaseAgreement($lease_id: String!, $student_id: String!) {
  checkEligibleForLeaseAgreement(lease_id: $lease_id, student_id: $student_id) {
    ...LeaseAPIResponseFields
  }
}
    ${LeaseApiResponseFieldsFragmentDoc}`;

/**
 * __useCheckEligibleForLeaseAgreementQuery__
 *
 * To run a query within a React component, call `useCheckEligibleForLeaseAgreementQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckEligibleForLeaseAgreementQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckEligibleForLeaseAgreementQuery({
 *   variables: {
 *      lease_id: // value for 'lease_id'
 *      student_id: // value for 'student_id'
 *   },
 * });
 */
export function useCheckEligibleForLeaseAgreementQuery(baseOptions: Apollo.QueryHookOptions<CheckEligibleForLeaseAgreementQuery, CheckEligibleForLeaseAgreementQueryVariables>) {
        return Apollo.useQuery<CheckEligibleForLeaseAgreementQuery, CheckEligibleForLeaseAgreementQueryVariables>(CheckEligibleForLeaseAgreementDocument, baseOptions);
      }
export function useCheckEligibleForLeaseAgreementLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckEligibleForLeaseAgreementQuery, CheckEligibleForLeaseAgreementQueryVariables>) {
          return Apollo.useLazyQuery<CheckEligibleForLeaseAgreementQuery, CheckEligibleForLeaseAgreementQueryVariables>(CheckEligibleForLeaseAgreementDocument, baseOptions);
        }
export type CheckEligibleForLeaseAgreementQueryHookResult = ReturnType<typeof useCheckEligibleForLeaseAgreementQuery>;
export type CheckEligibleForLeaseAgreementLazyQueryHookResult = ReturnType<typeof useCheckEligibleForLeaseAgreementLazyQuery>;
export type CheckEligibleForLeaseAgreementQueryResult = Apollo.QueryResult<CheckEligibleForLeaseAgreementQuery, CheckEligibleForLeaseAgreementQueryVariables>;
export const CanAddReviewDocument = gql`
    query CanAddReview($student_id: String!, $property_id: String!) {
  canAddReview(student_id: $student_id, property_id: $property_id) {
    success
    error
    data {
      value
    }
  }
}
    `;

/**
 * __useCanAddReviewQuery__
 *
 * To run a query within a React component, call `useCanAddReviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useCanAddReviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCanAddReviewQuery({
 *   variables: {
 *      student_id: // value for 'student_id'
 *      property_id: // value for 'property_id'
 *   },
 * });
 */
export function useCanAddReviewQuery(baseOptions: Apollo.QueryHookOptions<CanAddReviewQuery, CanAddReviewQueryVariables>) {
        return Apollo.useQuery<CanAddReviewQuery, CanAddReviewQueryVariables>(CanAddReviewDocument, baseOptions);
      }
export function useCanAddReviewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CanAddReviewQuery, CanAddReviewQueryVariables>) {
          return Apollo.useLazyQuery<CanAddReviewQuery, CanAddReviewQueryVariables>(CanAddReviewDocument, baseOptions);
        }
export type CanAddReviewQueryHookResult = ReturnType<typeof useCanAddReviewQuery>;
export type CanAddReviewLazyQueryHookResult = ReturnType<typeof useCanAddReviewLazyQuery>;
export type CanAddReviewQueryResult = Apollo.QueryResult<CanAddReviewQuery, CanAddReviewQueryVariables>;
export const GetAcceptedLeaseInfoDocument = gql`
    query GetAcceptedLeaseInfo($student_id: String!, $lease_id: String!, $history_id: String!) {
  getAcceptedLeaseInfo(
    student_id: $student_id
    lease_id: $lease_id
    history_id: $history_id
  ) {
    success
    error
    data {
      ...LeaseHistorySummaryFields
    }
  }
}
    ${LeaseHistorySummaryFieldsFragmentDoc}`;

/**
 * __useGetAcceptedLeaseInfoQuery__
 *
 * To run a query within a React component, call `useGetAcceptedLeaseInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAcceptedLeaseInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAcceptedLeaseInfoQuery({
 *   variables: {
 *      student_id: // value for 'student_id'
 *      lease_id: // value for 'lease_id'
 *      history_id: // value for 'history_id'
 *   },
 * });
 */
export function useGetAcceptedLeaseInfoQuery(baseOptions: Apollo.QueryHookOptions<GetAcceptedLeaseInfoQuery, GetAcceptedLeaseInfoQueryVariables>) {
        return Apollo.useQuery<GetAcceptedLeaseInfoQuery, GetAcceptedLeaseInfoQueryVariables>(GetAcceptedLeaseInfoDocument, baseOptions);
      }
export function useGetAcceptedLeaseInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAcceptedLeaseInfoQuery, GetAcceptedLeaseInfoQueryVariables>) {
          return Apollo.useLazyQuery<GetAcceptedLeaseInfoQuery, GetAcceptedLeaseInfoQueryVariables>(GetAcceptedLeaseInfoDocument, baseOptions);
        }
export type GetAcceptedLeaseInfoQueryHookResult = ReturnType<typeof useGetAcceptedLeaseInfoQuery>;
export type GetAcceptedLeaseInfoLazyQueryHookResult = ReturnType<typeof useGetAcceptedLeaseInfoLazyQuery>;
export type GetAcceptedLeaseInfoQueryResult = Apollo.QueryResult<GetAcceptedLeaseInfoQuery, GetAcceptedLeaseInfoQueryVariables>;
export const GetAcceptedLeasesDocument = gql`
    query GetAcceptedLeases($student_id: String!) {
  getAcceptedLeases(student_id: $student_id) {
    success
    error
    data {
      histories {
        ...LeaseHistorySummaryFields
      }
    }
  }
}
    ${LeaseHistorySummaryFieldsFragmentDoc}`;

/**
 * __useGetAcceptedLeasesQuery__
 *
 * To run a query within a React component, call `useGetAcceptedLeasesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAcceptedLeasesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAcceptedLeasesQuery({
 *   variables: {
 *      student_id: // value for 'student_id'
 *   },
 * });
 */
export function useGetAcceptedLeasesQuery(baseOptions: Apollo.QueryHookOptions<GetAcceptedLeasesQuery, GetAcceptedLeasesQueryVariables>) {
        return Apollo.useQuery<GetAcceptedLeasesQuery, GetAcceptedLeasesQueryVariables>(GetAcceptedLeasesDocument, baseOptions);
      }
export function useGetAcceptedLeasesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAcceptedLeasesQuery, GetAcceptedLeasesQueryVariables>) {
          return Apollo.useLazyQuery<GetAcceptedLeasesQuery, GetAcceptedLeasesQueryVariables>(GetAcceptedLeasesDocument, baseOptions);
        }
export type GetAcceptedLeasesQueryHookResult = ReturnType<typeof useGetAcceptedLeasesQuery>;
export type GetAcceptedLeasesLazyQueryHookResult = ReturnType<typeof useGetAcceptedLeasesLazyQuery>;
export type GetAcceptedLeasesQueryResult = Apollo.QueryResult<GetAcceptedLeasesQuery, GetAcceptedLeasesQueryVariables>;
export const GetLeaseSummaryDocument = gql`
    query GetLeaseSummary($lease_id: String!) {
  getLeaseSummary(lease_id: $lease_id) {
    success
    error
    data {
      room_no
      property {
        _id
        landlord
        address_line
        address_line_2
        city
        state
        zip
      }
      lease {
        _id
        active
        ownership_id
        price_per_month
        occupant_id
        external_occupant
        priority {
          level
          start_date
          end_date
        }
        lease_document_id
        lease_availability_start_date
        lease_availability_end_date
        lease_history {
          _id
          price
          student_id
          start_date
          end_date
          review_of_property {
            rating
            review
            response
          }
          review_of_landlord {
            rating
            review
            response
          }
          property_images {
            s3_key
            date_uploaded
          }
        }
        student_interests {
          student_id
          date
          accepted
        }
        students_that_declined {
          date
          student_id
        }
      }
      institutions {
        _id
        name
        s3_thumb_key
        location {
          address
          city
          state
          zip
          longitude
          latitude
        }
      }
      students {
        _id
        first_name
        last_name
        email
        phone_number
        auth_info {
          institution_id
        }
      }
      lease_doc {
        _id
        lease_name
        documents {
          mime_type
          s3_key
        }
        landlord_id
      }
    }
  }
}
    `;

/**
 * __useGetLeaseSummaryQuery__
 *
 * To run a query within a React component, call `useGetLeaseSummaryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLeaseSummaryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLeaseSummaryQuery({
 *   variables: {
 *      lease_id: // value for 'lease_id'
 *   },
 * });
 */
export function useGetLeaseSummaryQuery(baseOptions: Apollo.QueryHookOptions<GetLeaseSummaryQuery, GetLeaseSummaryQueryVariables>) {
        return Apollo.useQuery<GetLeaseSummaryQuery, GetLeaseSummaryQueryVariables>(GetLeaseSummaryDocument, baseOptions);
      }
export function useGetLeaseSummaryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLeaseSummaryQuery, GetLeaseSummaryQueryVariables>) {
          return Apollo.useLazyQuery<GetLeaseSummaryQuery, GetLeaseSummaryQueryVariables>(GetLeaseSummaryDocument, baseOptions);
        }
export type GetLeaseSummaryQueryHookResult = ReturnType<typeof useGetLeaseSummaryQuery>;
export type GetLeaseSummaryLazyQueryHookResult = ReturnType<typeof useGetLeaseSummaryLazyQuery>;
export type GetLeaseSummaryQueryResult = Apollo.QueryResult<GetLeaseSummaryQuery, GetLeaseSummaryQueryVariables>;
export const AddLandlordResponseDocument = gql`
    mutation AddLandlordResponse($lease_id: String!, $history_id: String!, $review_response: String!, $response_type: String!) {
  addLandlordResponse(
    lease_id: $lease_id
    history_id: $history_id
    review_response: $review_response
    response_type: $response_type
  ) {
    ...LeaseAPIResponseFields
  }
}
    ${LeaseApiResponseFieldsFragmentDoc}`;
export type AddLandlordResponseMutationFn = Apollo.MutationFunction<AddLandlordResponseMutation, AddLandlordResponseMutationVariables>;

/**
 * __useAddLandlordResponseMutation__
 *
 * To run a mutation, you first call `useAddLandlordResponseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddLandlordResponseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addLandlordResponseMutation, { data, loading, error }] = useAddLandlordResponseMutation({
 *   variables: {
 *      lease_id: // value for 'lease_id'
 *      history_id: // value for 'history_id'
 *      review_response: // value for 'review_response'
 *      response_type: // value for 'response_type'
 *   },
 * });
 */
export function useAddLandlordResponseMutation(baseOptions?: Apollo.MutationHookOptions<AddLandlordResponseMutation, AddLandlordResponseMutationVariables>) {
        return Apollo.useMutation<AddLandlordResponseMutation, AddLandlordResponseMutationVariables>(AddLandlordResponseDocument, baseOptions);
      }
export type AddLandlordResponseMutationHookResult = ReturnType<typeof useAddLandlordResponseMutation>;
export type AddLandlordResponseMutationResult = Apollo.MutationResult<AddLandlordResponseMutation>;
export type AddLandlordResponseMutationOptions = Apollo.BaseMutationOptions<AddLandlordResponseMutation, AddLandlordResponseMutationVariables>;
export const DeclineLeaseAgreementDocument = gql`
    mutation DeclineLeaseAgreement($student_id: String!, $lease_id: String!) {
  declineLeaseAgreement(student_id: $student_id, lease_id: $lease_id) {
    ...LeaseAPIResponseFields
  }
}
    ${LeaseApiResponseFieldsFragmentDoc}`;
export type DeclineLeaseAgreementMutationFn = Apollo.MutationFunction<DeclineLeaseAgreementMutation, DeclineLeaseAgreementMutationVariables>;

/**
 * __useDeclineLeaseAgreementMutation__
 *
 * To run a mutation, you first call `useDeclineLeaseAgreementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeclineLeaseAgreementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [declineLeaseAgreementMutation, { data, loading, error }] = useDeclineLeaseAgreementMutation({
 *   variables: {
 *      student_id: // value for 'student_id'
 *      lease_id: // value for 'lease_id'
 *   },
 * });
 */
export function useDeclineLeaseAgreementMutation(baseOptions?: Apollo.MutationHookOptions<DeclineLeaseAgreementMutation, DeclineLeaseAgreementMutationVariables>) {
        return Apollo.useMutation<DeclineLeaseAgreementMutation, DeclineLeaseAgreementMutationVariables>(DeclineLeaseAgreementDocument, baseOptions);
      }
export type DeclineLeaseAgreementMutationHookResult = ReturnType<typeof useDeclineLeaseAgreementMutation>;
export type DeclineLeaseAgreementMutationResult = Apollo.MutationResult<DeclineLeaseAgreementMutation>;
export type DeclineLeaseAgreementMutationOptions = Apollo.BaseMutationOptions<DeclineLeaseAgreementMutation, DeclineLeaseAgreementMutationVariables>;
export const AcceptLeaseAgreementDocument = gql`
    mutation AcceptLeaseAgreement($student_id: String!, $lease_id: String!) {
  acceptLeaseAgreement(student_id: $student_id, lease_id: $lease_id) {
    ...LeaseAPIResponseFields
  }
}
    ${LeaseApiResponseFieldsFragmentDoc}`;
export type AcceptLeaseAgreementMutationFn = Apollo.MutationFunction<AcceptLeaseAgreementMutation, AcceptLeaseAgreementMutationVariables>;

/**
 * __useAcceptLeaseAgreementMutation__
 *
 * To run a mutation, you first call `useAcceptLeaseAgreementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAcceptLeaseAgreementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [acceptLeaseAgreementMutation, { data, loading, error }] = useAcceptLeaseAgreementMutation({
 *   variables: {
 *      student_id: // value for 'student_id'
 *      lease_id: // value for 'lease_id'
 *   },
 * });
 */
export function useAcceptLeaseAgreementMutation(baseOptions?: Apollo.MutationHookOptions<AcceptLeaseAgreementMutation, AcceptLeaseAgreementMutationVariables>) {
        return Apollo.useMutation<AcceptLeaseAgreementMutation, AcceptLeaseAgreementMutationVariables>(AcceptLeaseAgreementDocument, baseOptions);
      }
export type AcceptLeaseAgreementMutationHookResult = ReturnType<typeof useAcceptLeaseAgreementMutation>;
export type AcceptLeaseAgreementMutationResult = Apollo.MutationResult<AcceptLeaseAgreementMutation>;
export type AcceptLeaseAgreementMutationOptions = Apollo.BaseMutationOptions<AcceptLeaseAgreementMutation, AcceptLeaseAgreementMutationVariables>;
export const AcceptOrDeclineStudentInterestDocument = gql`
    mutation AcceptOrDeclineStudentInterest($action: String!, $student_id: String!, $lease_id: String!) {
  acceptOrDeclineStudentInterest(
    action: $action
    student_id: $student_id
    lease_id: $lease_id
  ) {
    ...LeaseAPIResponseFields
  }
}
    ${LeaseApiResponseFieldsFragmentDoc}`;
export type AcceptOrDeclineStudentInterestMutationFn = Apollo.MutationFunction<AcceptOrDeclineStudentInterestMutation, AcceptOrDeclineStudentInterestMutationVariables>;

/**
 * __useAcceptOrDeclineStudentInterestMutation__
 *
 * To run a mutation, you first call `useAcceptOrDeclineStudentInterestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAcceptOrDeclineStudentInterestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [acceptOrDeclineStudentInterestMutation, { data, loading, error }] = useAcceptOrDeclineStudentInterestMutation({
 *   variables: {
 *      action: // value for 'action'
 *      student_id: // value for 'student_id'
 *      lease_id: // value for 'lease_id'
 *   },
 * });
 */
export function useAcceptOrDeclineStudentInterestMutation(baseOptions?: Apollo.MutationHookOptions<AcceptOrDeclineStudentInterestMutation, AcceptOrDeclineStudentInterestMutationVariables>) {
        return Apollo.useMutation<AcceptOrDeclineStudentInterestMutation, AcceptOrDeclineStudentInterestMutationVariables>(AcceptOrDeclineStudentInterestDocument, baseOptions);
      }
export type AcceptOrDeclineStudentInterestMutationHookResult = ReturnType<typeof useAcceptOrDeclineStudentInterestMutation>;
export type AcceptOrDeclineStudentInterestMutationResult = Apollo.MutationResult<AcceptOrDeclineStudentInterestMutation>;
export type AcceptOrDeclineStudentInterestMutationOptions = Apollo.BaseMutationOptions<AcceptOrDeclineStudentInterestMutation, AcceptOrDeclineStudentInterestMutationVariables>;
export const ExpressInterestDocument = gql`
    mutation expressInterest($student_id: String!, $lease_id: String!) {
  expressInterest(student_id: $student_id, lease_id: $lease_id) {
    ...LeaseAPIResponseFields
  }
}
    ${LeaseApiResponseFieldsFragmentDoc}`;
export type ExpressInterestMutationFn = Apollo.MutationFunction<ExpressInterestMutation, ExpressInterestMutationVariables>;

/**
 * __useExpressInterestMutation__
 *
 * To run a mutation, you first call `useExpressInterestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useExpressInterestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [expressInterestMutation, { data, loading, error }] = useExpressInterestMutation({
 *   variables: {
 *      student_id: // value for 'student_id'
 *      lease_id: // value for 'lease_id'
 *   },
 * });
 */
export function useExpressInterestMutation(baseOptions?: Apollo.MutationHookOptions<ExpressInterestMutation, ExpressInterestMutationVariables>) {
        return Apollo.useMutation<ExpressInterestMutation, ExpressInterestMutationVariables>(ExpressInterestDocument, baseOptions);
      }
export type ExpressInterestMutationHookResult = ReturnType<typeof useExpressInterestMutation>;
export type ExpressInterestMutationResult = Apollo.MutationResult<ExpressInterestMutation>;
export type ExpressInterestMutationOptions = Apollo.BaseMutationOptions<ExpressInterestMutation, ExpressInterestMutationVariables>;
export const AddReviewForLeaseDocument = gql`
    mutation AddReviewForLease($lease_id: String!, $student_id: String!, $property_review: String!, $property_rating: Float!, $landlord_review: String!, $landlord_rating: Float!, $property_images: [String!]!) {
  addReviewForLease(
    lease_id: $lease_id
    student_id: $student_id
    property_review: $property_review
    property_rating: $property_rating
    landlord_review: $landlord_review
    landlord_rating: $landlord_rating
    property_images: $property_images
  ) {
    ...LeaseAPIResponseFields
  }
}
    ${LeaseApiResponseFieldsFragmentDoc}`;
export type AddReviewForLeaseMutationFn = Apollo.MutationFunction<AddReviewForLeaseMutation, AddReviewForLeaseMutationVariables>;

/**
 * __useAddReviewForLeaseMutation__
 *
 * To run a mutation, you first call `useAddReviewForLeaseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddReviewForLeaseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addReviewForLeaseMutation, { data, loading, error }] = useAddReviewForLeaseMutation({
 *   variables: {
 *      lease_id: // value for 'lease_id'
 *      student_id: // value for 'student_id'
 *      property_review: // value for 'property_review'
 *      property_rating: // value for 'property_rating'
 *      landlord_review: // value for 'landlord_review'
 *      landlord_rating: // value for 'landlord_rating'
 *      property_images: // value for 'property_images'
 *   },
 * });
 */
export function useAddReviewForLeaseMutation(baseOptions?: Apollo.MutationHookOptions<AddReviewForLeaseMutation, AddReviewForLeaseMutationVariables>) {
        return Apollo.useMutation<AddReviewForLeaseMutation, AddReviewForLeaseMutationVariables>(AddReviewForLeaseDocument, baseOptions);
      }
export type AddReviewForLeaseMutationHookResult = ReturnType<typeof useAddReviewForLeaseMutation>;
export type AddReviewForLeaseMutationResult = Apollo.MutationResult<AddReviewForLeaseMutation>;
export type AddReviewForLeaseMutationOptions = Apollo.BaseMutationOptions<AddReviewForLeaseMutation, AddReviewForLeaseMutationVariables>;
export const ActivateLeaseDocument = gql`
    mutation ActivateLease($lease_id: String!, $lease_document_id: String!, $price_per_month: Float!, $lease_start_date: String!, $lease_end_date: String!) {
  activateLease(
    lease_id: $lease_id
    lease_document_id: $lease_document_id
    price_per_month: $price_per_month
    lease_start_date: $lease_start_date
    lease_end_date: $lease_end_date
  ) {
    ...LeaseAPIResponseFields
  }
}
    ${LeaseApiResponseFieldsFragmentDoc}`;
export type ActivateLeaseMutationFn = Apollo.MutationFunction<ActivateLeaseMutation, ActivateLeaseMutationVariables>;

/**
 * __useActivateLeaseMutation__
 *
 * To run a mutation, you first call `useActivateLeaseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useActivateLeaseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [activateLeaseMutation, { data, loading, error }] = useActivateLeaseMutation({
 *   variables: {
 *      lease_id: // value for 'lease_id'
 *      lease_document_id: // value for 'lease_document_id'
 *      price_per_month: // value for 'price_per_month'
 *      lease_start_date: // value for 'lease_start_date'
 *      lease_end_date: // value for 'lease_end_date'
 *   },
 * });
 */
export function useActivateLeaseMutation(baseOptions?: Apollo.MutationHookOptions<ActivateLeaseMutation, ActivateLeaseMutationVariables>) {
        return Apollo.useMutation<ActivateLeaseMutation, ActivateLeaseMutationVariables>(ActivateLeaseDocument, baseOptions);
      }
export type ActivateLeaseMutationHookResult = ReturnType<typeof useActivateLeaseMutation>;
export type ActivateLeaseMutationResult = Apollo.MutationResult<ActivateLeaseMutation>;
export type ActivateLeaseMutationOptions = Apollo.BaseMutationOptions<ActivateLeaseMutation, ActivateLeaseMutationVariables>;
export const UpdateUnoccupiedLeasesDocument = gql`
    mutation UpdateUnoccupiedLeases($ownership_id: String!, $leases_info: [LeaseUpdateInput!]!) {
  updateUnoccupiedLeases(ownership_id: $ownership_id, leases_info: $leases_info) {
    ...LeaseCollectionAPIResponseFields
  }
}
    ${LeaseCollectionApiResponseFieldsFragmentDoc}`;
export type UpdateUnoccupiedLeasesMutationFn = Apollo.MutationFunction<UpdateUnoccupiedLeasesMutation, UpdateUnoccupiedLeasesMutationVariables>;

/**
 * __useUpdateUnoccupiedLeasesMutation__
 *
 * To run a mutation, you first call `useUpdateUnoccupiedLeasesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUnoccupiedLeasesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUnoccupiedLeasesMutation, { data, loading, error }] = useUpdateUnoccupiedLeasesMutation({
 *   variables: {
 *      ownership_id: // value for 'ownership_id'
 *      leases_info: // value for 'leases_info'
 *   },
 * });
 */
export function useUpdateUnoccupiedLeasesMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUnoccupiedLeasesMutation, UpdateUnoccupiedLeasesMutationVariables>) {
        return Apollo.useMutation<UpdateUnoccupiedLeasesMutation, UpdateUnoccupiedLeasesMutationVariables>(UpdateUnoccupiedLeasesDocument, baseOptions);
      }
export type UpdateUnoccupiedLeasesMutationHookResult = ReturnType<typeof useUpdateUnoccupiedLeasesMutation>;
export type UpdateUnoccupiedLeasesMutationResult = Apollo.MutationResult<UpdateUnoccupiedLeasesMutation>;
export type UpdateUnoccupiedLeasesMutationOptions = Apollo.BaseMutationOptions<UpdateUnoccupiedLeasesMutation, UpdateUnoccupiedLeasesMutationVariables>;
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
export const GetOwnershipForPropertyDocument = gql`
    query GetOwnershipForProperty($property_id: String!, $landlord_id: String!) {
  getOwnershipForProperty(property_id: $property_id, landlord_id: $landlord_id) {
    ...OwnershipAPIResponseFields
  }
}
    ${OwnershipApiResponseFieldsFragmentDoc}`;

/**
 * __useGetOwnershipForPropertyQuery__
 *
 * To run a query within a React component, call `useGetOwnershipForPropertyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOwnershipForPropertyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOwnershipForPropertyQuery({
 *   variables: {
 *      property_id: // value for 'property_id'
 *      landlord_id: // value for 'landlord_id'
 *   },
 * });
 */
export function useGetOwnershipForPropertyQuery(baseOptions: Apollo.QueryHookOptions<GetOwnershipForPropertyQuery, GetOwnershipForPropertyQueryVariables>) {
        return Apollo.useQuery<GetOwnershipForPropertyQuery, GetOwnershipForPropertyQueryVariables>(GetOwnershipForPropertyDocument, baseOptions);
      }
export function useGetOwnershipForPropertyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOwnershipForPropertyQuery, GetOwnershipForPropertyQueryVariables>) {
          return Apollo.useLazyQuery<GetOwnershipForPropertyQuery, GetOwnershipForPropertyQueryVariables>(GetOwnershipForPropertyDocument, baseOptions);
        }
export type GetOwnershipForPropertyQueryHookResult = ReturnType<typeof useGetOwnershipForPropertyQuery>;
export type GetOwnershipForPropertyLazyQueryHookResult = ReturnType<typeof useGetOwnershipForPropertyLazyQuery>;
export type GetOwnershipForPropertyQueryResult = Apollo.QueryResult<GetOwnershipForPropertyQuery, GetOwnershipForPropertyQueryVariables>;
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
export const GetPropertyForOwnershipDocument = gql`
    query getPropertyForOwnership($ownership_id: String!) {
  getPropertyForOwnership(ownership_id: $ownership_id) {
    ...PropertyAPIResponseFields
  }
}
    ${PropertyApiResponseFieldsFragmentDoc}`;

/**
 * __useGetPropertyForOwnershipQuery__
 *
 * To run a query within a React component, call `useGetPropertyForOwnershipQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPropertyForOwnershipQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPropertyForOwnershipQuery({
 *   variables: {
 *      ownership_id: // value for 'ownership_id'
 *   },
 * });
 */
export function useGetPropertyForOwnershipQuery(baseOptions: Apollo.QueryHookOptions<GetPropertyForOwnershipQuery, GetPropertyForOwnershipQueryVariables>) {
        return Apollo.useQuery<GetPropertyForOwnershipQuery, GetPropertyForOwnershipQueryVariables>(GetPropertyForOwnershipDocument, baseOptions);
      }
export function useGetPropertyForOwnershipLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPropertyForOwnershipQuery, GetPropertyForOwnershipQueryVariables>) {
          return Apollo.useLazyQuery<GetPropertyForOwnershipQuery, GetPropertyForOwnershipQueryVariables>(GetPropertyForOwnershipDocument, baseOptions);
        }
export type GetPropertyForOwnershipQueryHookResult = ReturnType<typeof useGetPropertyForOwnershipQuery>;
export type GetPropertyForOwnershipLazyQueryHookResult = ReturnType<typeof useGetPropertyForOwnershipLazyQuery>;
export type GetPropertyForOwnershipQueryResult = Apollo.QueryResult<GetPropertyForOwnershipQuery, GetPropertyForOwnershipQueryVariables>;
export const GetPropertySummaryDocument = gql`
    query GetPropertySummary($property_id: String!, $student_id: String!) {
  getPropertySummary(property_id: $property_id, student_id: $student_id) {
    success
    error
    data {
      property {
        _id
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
      leases {
        able_to_lease
        lease {
          _id
          price_per_month
          lease_availability_start_date
          lease_availability_end_date
          lease_history {
            student_id
            start_date
            end_date
            review_of_property {
              rating
              review
              response
            }
            review_of_landlord {
              rating
              review
              response
            }
            property_images {
              s3_key
              date_uploaded
            }
          }
          student_interests {
            student_id
            date
          }
          students_that_declined {
            date
            student_id
          }
        }
      }
      landlord {
        _id
        first_name
        last_name
      }
    }
  }
}
    `;

/**
 * __useGetPropertySummaryQuery__
 *
 * To run a query within a React component, call `useGetPropertySummaryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPropertySummaryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPropertySummaryQuery({
 *   variables: {
 *      property_id: // value for 'property_id'
 *      student_id: // value for 'student_id'
 *   },
 * });
 */
export function useGetPropertySummaryQuery(baseOptions: Apollo.QueryHookOptions<GetPropertySummaryQuery, GetPropertySummaryQueryVariables>) {
        return Apollo.useQuery<GetPropertySummaryQuery, GetPropertySummaryQueryVariables>(GetPropertySummaryDocument, baseOptions);
      }
export function useGetPropertySummaryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPropertySummaryQuery, GetPropertySummaryQueryVariables>) {
          return Apollo.useLazyQuery<GetPropertySummaryQuery, GetPropertySummaryQueryVariables>(GetPropertySummaryDocument, baseOptions);
        }
export type GetPropertySummaryQueryHookResult = ReturnType<typeof useGetPropertySummaryQuery>;
export type GetPropertySummaryLazyQueryHookResult = ReturnType<typeof useGetPropertySummaryLazyQuery>;
export type GetPropertySummaryQueryResult = Apollo.QueryResult<GetPropertySummaryQuery, GetPropertySummaryQueryVariables>;
export const GetPropertyOwnedByLandlordDocument = gql`
    query GetPropertyOwnedByLandlord($property_id: String!, $landlord_id: String!, $with_leases: Boolean) {
  getPropertyOwnedByLandlord(
    property_id: $property_id
    landlord_id: $landlord_id
    with_leases: $with_leases
  ) {
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
 *      with_leases: // value for 'with_leases'
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
    query GetPropertiesForLandlord($landlord_id: String!, $with_leases: Boolean, $status: String) {
  getPropertiesForLandlord(
    landlord_id: $landlord_id
    with_leases: $with_leases
    status: $status
  ) {
    ...PropertyListWithLeasesAPIResponseFields
  }
}
    ${PropertyListWithLeasesApiResponseFieldsFragmentDoc}`;

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
 *      with_leases: // value for 'with_leases'
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
export const SearchForPropertiesDocument = gql`
    query SearchForProperties($price_start: Float!, $price_end: Float!, $rooms: Int!, $distance: Float!) {
  searchForProperties(
    price_start: $price_start
    price_end: $price_end
    rooms: $rooms
    distance: $distance
  ) {
    success
    error
    data {
      search_results {
        property {
          ...PropertyFields
        }
        landlord_first_name
        landlord_last_name
        price_range
        lease_count
        landlord_rating_avg
        property_rating_avg
        landlord_rating_count
        property_rating_count
      }
    }
  }
}
    ${PropertyFieldsFragmentDoc}`;

/**
 * __useSearchForPropertiesQuery__
 *
 * To run a query within a React component, call `useSearchForPropertiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchForPropertiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchForPropertiesQuery({
 *   variables: {
 *      price_start: // value for 'price_start'
 *      price_end: // value for 'price_end'
 *      rooms: // value for 'rooms'
 *      distance: // value for 'distance'
 *   },
 * });
 */
export function useSearchForPropertiesQuery(baseOptions: Apollo.QueryHookOptions<SearchForPropertiesQuery, SearchForPropertiesQueryVariables>) {
        return Apollo.useQuery<SearchForPropertiesQuery, SearchForPropertiesQueryVariables>(SearchForPropertiesDocument, baseOptions);
      }
export function useSearchForPropertiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchForPropertiesQuery, SearchForPropertiesQueryVariables>) {
          return Apollo.useLazyQuery<SearchForPropertiesQuery, SearchForPropertiesQueryVariables>(SearchForPropertiesDocument, baseOptions);
        }
export type SearchForPropertiesQueryHookResult = ReturnType<typeof useSearchForPropertiesQuery>;
export type SearchForPropertiesLazyQueryHookResult = ReturnType<typeof useSearchForPropertiesLazyQuery>;
export type SearchForPropertiesQueryResult = Apollo.QueryResult<SearchForPropertiesQuery, SearchForPropertiesQueryVariables>;
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
export const StatsStudentAccountCreationDocument = gql`
    mutation StatsStudentAccountCreation($student_id: String!) {
  Stats_StudentAccountCreation(student_id: $student_id) {
    v
  }
}
    `;
export type StatsStudentAccountCreationMutationFn = Apollo.MutationFunction<StatsStudentAccountCreationMutation, StatsStudentAccountCreationMutationVariables>;

/**
 * __useStatsStudentAccountCreationMutation__
 *
 * To run a mutation, you first call `useStatsStudentAccountCreationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStatsStudentAccountCreationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [statsStudentAccountCreationMutation, { data, loading, error }] = useStatsStudentAccountCreationMutation({
 *   variables: {
 *      student_id: // value for 'student_id'
 *   },
 * });
 */
export function useStatsStudentAccountCreationMutation(baseOptions?: Apollo.MutationHookOptions<StatsStudentAccountCreationMutation, StatsStudentAccountCreationMutationVariables>) {
        return Apollo.useMutation<StatsStudentAccountCreationMutation, StatsStudentAccountCreationMutationVariables>(StatsStudentAccountCreationDocument, baseOptions);
      }
export type StatsStudentAccountCreationMutationHookResult = ReturnType<typeof useStatsStudentAccountCreationMutation>;
export type StatsStudentAccountCreationMutationResult = Apollo.MutationResult<StatsStudentAccountCreationMutation>;
export type StatsStudentAccountCreationMutationOptions = Apollo.BaseMutationOptions<StatsStudentAccountCreationMutation, StatsStudentAccountCreationMutationVariables>;
export const StatsStudentLoginDocument = gql`
    mutation StatsStudentLogin($student_id: String!) {
  Stats_StudentLogin(student_id: $student_id) {
    v
  }
}
    `;
export type StatsStudentLoginMutationFn = Apollo.MutationFunction<StatsStudentLoginMutation, StatsStudentLoginMutationVariables>;

/**
 * __useStatsStudentLoginMutation__
 *
 * To run a mutation, you first call `useStatsStudentLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStatsStudentLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [statsStudentLoginMutation, { data, loading, error }] = useStatsStudentLoginMutation({
 *   variables: {
 *      student_id: // value for 'student_id'
 *   },
 * });
 */
export function useStatsStudentLoginMutation(baseOptions?: Apollo.MutationHookOptions<StatsStudentLoginMutation, StatsStudentLoginMutationVariables>) {
        return Apollo.useMutation<StatsStudentLoginMutation, StatsStudentLoginMutationVariables>(StatsStudentLoginDocument, baseOptions);
      }
export type StatsStudentLoginMutationHookResult = ReturnType<typeof useStatsStudentLoginMutation>;
export type StatsStudentLoginMutationResult = Apollo.MutationResult<StatsStudentLoginMutation>;
export type StatsStudentLoginMutationOptions = Apollo.BaseMutationOptions<StatsStudentLoginMutation, StatsStudentLoginMutationVariables>;
export const StatsLandlordAccountCreationDocument = gql`
    mutation StatsLandlordAccountCreation($landlord_id: String!) {
  Stats_LandlordAccountCreation(landlord_id: $landlord_id) {
    v
  }
}
    `;
export type StatsLandlordAccountCreationMutationFn = Apollo.MutationFunction<StatsLandlordAccountCreationMutation, StatsLandlordAccountCreationMutationVariables>;

/**
 * __useStatsLandlordAccountCreationMutation__
 *
 * To run a mutation, you first call `useStatsLandlordAccountCreationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStatsLandlordAccountCreationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [statsLandlordAccountCreationMutation, { data, loading, error }] = useStatsLandlordAccountCreationMutation({
 *   variables: {
 *      landlord_id: // value for 'landlord_id'
 *   },
 * });
 */
export function useStatsLandlordAccountCreationMutation(baseOptions?: Apollo.MutationHookOptions<StatsLandlordAccountCreationMutation, StatsLandlordAccountCreationMutationVariables>) {
        return Apollo.useMutation<StatsLandlordAccountCreationMutation, StatsLandlordAccountCreationMutationVariables>(StatsLandlordAccountCreationDocument, baseOptions);
      }
export type StatsLandlordAccountCreationMutationHookResult = ReturnType<typeof useStatsLandlordAccountCreationMutation>;
export type StatsLandlordAccountCreationMutationResult = Apollo.MutationResult<StatsLandlordAccountCreationMutation>;
export type StatsLandlordAccountCreationMutationOptions = Apollo.BaseMutationOptions<StatsLandlordAccountCreationMutation, StatsLandlordAccountCreationMutationVariables>;
export const StatsLandlordLoginDocument = gql`
    mutation StatsLandlordLogin($landlord_id: String!) {
  Stats_LandlordLogin(landlord_id: $landlord_id) {
    v
  }
}
    `;
export type StatsLandlordLoginMutationFn = Apollo.MutationFunction<StatsLandlordLoginMutation, StatsLandlordLoginMutationVariables>;

/**
 * __useStatsLandlordLoginMutation__
 *
 * To run a mutation, you first call `useStatsLandlordLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStatsLandlordLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [statsLandlordLoginMutation, { data, loading, error }] = useStatsLandlordLoginMutation({
 *   variables: {
 *      landlord_id: // value for 'landlord_id'
 *   },
 * });
 */
export function useStatsLandlordLoginMutation(baseOptions?: Apollo.MutationHookOptions<StatsLandlordLoginMutation, StatsLandlordLoginMutationVariables>) {
        return Apollo.useMutation<StatsLandlordLoginMutation, StatsLandlordLoginMutationVariables>(StatsLandlordLoginDocument, baseOptions);
      }
export type StatsLandlordLoginMutationHookResult = ReturnType<typeof useStatsLandlordLoginMutation>;
export type StatsLandlordLoginMutationResult = Apollo.MutationResult<StatsLandlordLoginMutation>;
export type StatsLandlordLoginMutationOptions = Apollo.BaseMutationOptions<StatsLandlordLoginMutation, StatsLandlordLoginMutationVariables>;
export const StatsLandlordOpenLeaseDocument = gql`
    mutation StatsLandlordOpenLease($landlord_id: String!, $property_id: String!, $lease_id: String!) {
  Stats_LandlordOpenLease(
    landlord_id: $landlord_id
    property_id: $property_id
    lease_id: $lease_id
  ) {
    v
  }
}
    `;
export type StatsLandlordOpenLeaseMutationFn = Apollo.MutationFunction<StatsLandlordOpenLeaseMutation, StatsLandlordOpenLeaseMutationVariables>;

/**
 * __useStatsLandlordOpenLeaseMutation__
 *
 * To run a mutation, you first call `useStatsLandlordOpenLeaseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStatsLandlordOpenLeaseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [statsLandlordOpenLeaseMutation, { data, loading, error }] = useStatsLandlordOpenLeaseMutation({
 *   variables: {
 *      landlord_id: // value for 'landlord_id'
 *      property_id: // value for 'property_id'
 *      lease_id: // value for 'lease_id'
 *   },
 * });
 */
export function useStatsLandlordOpenLeaseMutation(baseOptions?: Apollo.MutationHookOptions<StatsLandlordOpenLeaseMutation, StatsLandlordOpenLeaseMutationVariables>) {
        return Apollo.useMutation<StatsLandlordOpenLeaseMutation, StatsLandlordOpenLeaseMutationVariables>(StatsLandlordOpenLeaseDocument, baseOptions);
      }
export type StatsLandlordOpenLeaseMutationHookResult = ReturnType<typeof useStatsLandlordOpenLeaseMutation>;
export type StatsLandlordOpenLeaseMutationResult = Apollo.MutationResult<StatsLandlordOpenLeaseMutation>;
export type StatsLandlordOpenLeaseMutationOptions = Apollo.BaseMutationOptions<StatsLandlordOpenLeaseMutation, StatsLandlordOpenLeaseMutationVariables>;
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
export const GetStudentNotificationsDocument = gql`
    query GetStudentNotifications($student_id: String!) {
  getStudentNotifications(student_id: $student_id) {
    success
    error
    data {
      notifications {
        _id
        date_created
        date_seen
        subject
        body
        action {
          action_text
          action_url
        }
      }
    }
  }
}
    `;

/**
 * __useGetStudentNotificationsQuery__
 *
 * To run a query within a React component, call `useGetStudentNotificationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStudentNotificationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStudentNotificationsQuery({
 *   variables: {
 *      student_id: // value for 'student_id'
 *   },
 * });
 */
export function useGetStudentNotificationsQuery(baseOptions: Apollo.QueryHookOptions<GetStudentNotificationsQuery, GetStudentNotificationsQueryVariables>) {
        return Apollo.useQuery<GetStudentNotificationsQuery, GetStudentNotificationsQueryVariables>(GetStudentNotificationsDocument, baseOptions);
      }
export function useGetStudentNotificationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStudentNotificationsQuery, GetStudentNotificationsQueryVariables>) {
          return Apollo.useLazyQuery<GetStudentNotificationsQuery, GetStudentNotificationsQueryVariables>(GetStudentNotificationsDocument, baseOptions);
        }
export type GetStudentNotificationsQueryHookResult = ReturnType<typeof useGetStudentNotificationsQuery>;
export type GetStudentNotificationsLazyQueryHookResult = ReturnType<typeof useGetStudentNotificationsLazyQuery>;
export type GetStudentNotificationsQueryResult = Apollo.QueryResult<GetStudentNotificationsQuery, GetStudentNotificationsQueryVariables>;
export const MarkAsSeenDocument = gql`
    mutation MarkAsSeen($student_id: String!, $notification_id: String!) {
  markStudentNotificationAsSeen(
    student_id: $student_id
    notification_id: $notification_id
  ) {
    success
    error
    data {
      notifications {
        _id
        date_created
        date_seen
        subject
        body
        action {
          action_text
          action_url
        }
      }
    }
  }
}
    `;
export type MarkAsSeenMutationFn = Apollo.MutationFunction<MarkAsSeenMutation, MarkAsSeenMutationVariables>;

/**
 * __useMarkAsSeenMutation__
 *
 * To run a mutation, you first call `useMarkAsSeenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkAsSeenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markAsSeenMutation, { data, loading, error }] = useMarkAsSeenMutation({
 *   variables: {
 *      student_id: // value for 'student_id'
 *      notification_id: // value for 'notification_id'
 *   },
 * });
 */
export function useMarkAsSeenMutation(baseOptions?: Apollo.MutationHookOptions<MarkAsSeenMutation, MarkAsSeenMutationVariables>) {
        return Apollo.useMutation<MarkAsSeenMutation, MarkAsSeenMutationVariables>(MarkAsSeenDocument, baseOptions);
      }
export type MarkAsSeenMutationHookResult = ReturnType<typeof useMarkAsSeenMutation>;
export type MarkAsSeenMutationResult = Apollo.MutationResult<MarkAsSeenMutation>;
export type MarkAsSeenMutationOptions = Apollo.BaseMutationOptions<MarkAsSeenMutation, MarkAsSeenMutationVariables>;
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
    