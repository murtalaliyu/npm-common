import { Subjects } from "../subjects";

export interface ExpirationCompleteEvent {
  subject: Subjects.ExpirationComplete;
  // only add in data that listeners of this event care about
  data: {
    orderId: string;
  };
}
