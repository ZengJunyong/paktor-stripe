import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {StripeTableComponent} from './stripe.table.component'

@Component({
  moduleId: module.id,
  templateUrl: 'price.table.html'
})
export class FullComponent extends StripeTableComponent {
  constructor(router: Router) {
    super(router);
    this.payments = [
      {amount: 775, itemName: 'GaiGai 1-dates package - No Installment'},
      {amount: 1980, itemName: 'GaiGai 3-dates package - No Installment'},
      {amount: 2190, itemName: 'GaiGai 5-dates package - No Installment'},
      {amount: 2790, itemName: 'GaiGai 10-dates package - No Installment'}
    ];
    this.plans = {
      '3': [
        {amount: 660, itemName: '3 dates package - 3 months', count: 3, id: 'full-3-3'},
        {amount: 730, itemName: '5 dates package - 3 months', count: 3, id: 'full-5-3'},
        {amount: 930, itemName: '10 dates package - 3 months', count: 3, id: 'full-10-3'}
      ],
      '6': [
        {amount: 330, itemName: '3 dates package - 6 months', count: 6, id: 'full-3-6'},
        {amount: 365, itemName: '5 dates package - 6 months', count: 6, id: 'full-5-6'},
        {amount: 465, itemName: '10 dates package - 6 months', count: 6, id: 'full-10-6'}
      ]
    };
  }
}
