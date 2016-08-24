import {Payment} from './payment'
import {Router} from '@angular/router';
export class StripeTableModel {
  payments: Payment[];
  plans;

  payment: Payment;

  constructor(private router: Router) {
  }

  choosePayment(payment: Payment) {
    this.payment = payment;
    this.router.navigate(['/pay']);
  }
}
