import { OrderStatus } from "../types/order-status";
import { Subjects } from "../subjects";

export interface OrderCreatedEvent {
  subject: Subjects.OrderCreated;
  // only add in data that listeners of this event care about
  data: {
    id: string;
    status: OrderStatus;
    userId: string;
    expiresAt: string;
    ticket: {
      id: string;
      price: number;
    }
  }
}
