import {Component, Input} from '@angular/core';
import {Payment} from './payment'

// why my-payment can't be used?
@Component({
  moduleId: module.id,
  selector: 'my-payment',
  templateUrl: 'payment.component.html'
})
export class PaymentComponent {
  @Input()
  payment: Payment;
}
