/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: MarkAsSeen
// ====================================================

export interface MarkAsSeen_markStudentNotificationAsSeen_data_notifications_action {
  __typename: "NotificationAction";
  action_text: string;
  action_url: string;
}

export interface MarkAsSeen_markStudentNotificationAsSeen_data_notifications {
  __typename: "StudentNotification";
  _id: string;
  date_created: string;
  date_seen: string | null;
  subject: string;
  body: string;
  action: MarkAsSeen_markStudentNotificationAsSeen_data_notifications_action | null;
}

export interface MarkAsSeen_markStudentNotificationAsSeen_data {
  __typename: "StudentNotificationCollection";
  notifications: MarkAsSeen_markStudentNotificationAsSeen_data_notifications[];
}

export interface MarkAsSeen_markStudentNotificationAsSeen {
  __typename: "StudentNotificationAPIResponse";
  success: boolean;
  error: string | null;
  data: MarkAsSeen_markStudentNotificationAsSeen_data | null;
}

export interface MarkAsSeen {
  markStudentNotificationAsSeen: MarkAsSeen_markStudentNotificationAsSeen;
}

export interface MarkAsSeenVariables {
  student_id: string;
  notification_id: string;
}
