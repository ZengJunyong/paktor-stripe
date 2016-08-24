import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Payment} from './payment'
import {StripeTableModel} from './stripe.table.model'
import {Plan} from './plan'
import {count} from "rxjs/operator/count";

@Component({
  moduleId: module.id,
  templateUrl: 'pay.component.html'
})
export class PayComponent {

}
