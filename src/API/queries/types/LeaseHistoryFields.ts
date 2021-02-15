/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: LeaseHistoryFields
// ====================================================

export interface LeaseHistoryFields_review_of_property {
  __typename: "ReviewAndResponse";
  rating: number;
  review: string;
  response: string | null;
}

export interface LeaseHistoryFields_review_of_landlord {
  __typename: "ReviewAndResponse";
  rating: number;
  review: string;
  response: string | null;
}

export interface LeaseHistoryFields_property_images {
  __typename: "LeaseImageInfo";
  s3_key: string;
  date_uploaded: string;
}

export interface LeaseHistoryFields {
  __typename: "LeaseHistory";
  price: number;
  student_id: string;
  start_date: string;
  end_date: string;
  review_of_property: LeaseHistoryFields_review_of_property | null;
  review_of_landlord: LeaseHistoryFields_review_of_landlord | null;
  property_images: LeaseHistoryFields_property_images[];
}
