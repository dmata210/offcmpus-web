/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: StatsLandlordOpenLease
// ====================================================

export interface StatsLandlordOpenLease_Stats_LandlordOpenLease {
  __typename: "StatsResponse";
  v: string;
}

export interface StatsLandlordOpenLease {
  Stats_LandlordOpenLease: StatsLandlordOpenLease_Stats_LandlordOpenLease;
}

export interface StatsLandlordOpenLeaseVariables {
  landlord_id: string;
  property_id: string;
  lease_id: string;
}
