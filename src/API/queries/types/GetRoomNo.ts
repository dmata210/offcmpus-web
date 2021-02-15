/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetRoomNo
// ====================================================

export interface GetRoomNo_getRoomNo_data {
  __typename: "NumberValue";
  value: number;
}

export interface GetRoomNo_getRoomNo {
  __typename: "NumberAPIResponse";
  success: boolean;
  error: string | null;
  data: GetRoomNo_getRoomNo_data | null;
}

export interface GetRoomNo {
  getRoomNo: GetRoomNo_getRoomNo;
}

export interface GetRoomNoVariables {
  lease_id: string;
  ownership_id: string;
}
