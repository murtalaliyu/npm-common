import { Subjects } from "../subjects";

export interface PaymentCreatedEvent {
  subject: Subjects.PaymentCreated;
  // only add in data that listeners of this event care about
  data: {
    id: string;
    orderId: string;
    stripeId: string;
  };
}
