/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetStudentNotifications
// ====================================================

export interface GetStudentNotifications_getStudentNotifications_data_notifications_action {
  __typename: "NotificationAction";
  action_text: string;
  action_url: string;
}

export interface GetStudentNotifications_getStudentNotifications_data_notifications {
  __typename: "StudentNotification";
  _id: string;
  date_created: string;
  date_seen: string | null;
  subject: string;
  body: string;
  action: GetStudentNotifications_getStudentNotifications_data_notifications_action | null;
}

export interface GetStudentNotifications_getStudentNotifications_data {
  __typename: "StudentNotificationCollection";
  notifications: GetStudentNotifications_getStudentNotifications_data_notifications[];
}

export interface GetStudentNotifications_getStudentNotifications {
  __typename: "StudentNotificationAPIResponse";
  success: boolean;
  error: string | null;
  data: GetStudentNotifications_getStudentNotifications_data | null;
}

export interface GetStudentNotifications {
  getStudentNotifications: GetStudentNotifications_getStudentNotifications;
}

export interface GetStudentNotificationsVariables {
  student_id: string;
}
