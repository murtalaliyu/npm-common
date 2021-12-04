import { Subjects } from "../subjects";

export interface OrderCancelledEvent {
  subject: Subjects.OrderCancelled;
  // only add in data that listeners of this event care about
  data: {
    id: string;
    version: number;
    ticket: {
      id: string;
    }
  }
}
