import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Payment} from './payment'
import {StripeTableModel} from './stripe.table.model'
import {Plan} from './plan'
import {count} from "rxjs/operator/count";

@Component({
  moduleId: module.id,
  selector: 'my-full',
  templateUrl: 'stripe.table.component.html'
})
export class FullComponent extends StripeTableModel {
  constructor() {
    this.payments = [
      {amount: 775, itemName: 'GaiGai 1-dates package - No Installment'},
      {amount: 1980, itemName: 'GaiGai 3-dates package - No Installment'},
      {amount: 2190, itemName: 'GaiGai 5-dates package - No Installment'},
      {amount: 2790, itemName: 'GaiGai 10-dates package - No Installment'}
    ];
    this.plans = {
      '3': [
        {amount: 660, itemName: '3 dates package - 3 months', count: 3},
        {amount: 730, itemName: '5 dates package - 3 months', count: 3},
        {amount: 930, itemName: '10 dates package - 3 months', count: 3}
      ],
      '6': [
        {amount: 330, itemName: '3 dates package - 6 months', count: 6},
        {amount: 365, itemName: '5 dates package - 6 months', count: 6},
        {amount: 465, itemName: '10 dates package - 6 months', count: 6}
      ]
    };
  }
}
