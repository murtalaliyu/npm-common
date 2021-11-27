export enum OrderStatus {
  /* When the order has been created, but the 
    ticket it is trying to order has not been reserved */
  Created = 'created',

  /* 1. When the ticket the order is trying to reserve has already been reserved.
     2. When the user has cancelled the order.
     3. When the order expires before payment. */
  Cancelled = 'cancelled',

  /* When the order has successfully reserved the ticket */
  AwaitingPayment = 'awaiting:payment',

  /* When the order has reserved the ticket and the user has
    provided the payment successfully */
  Complete = 'complete'
}
