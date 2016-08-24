import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StripeTableComponent} from './stripe.table.component'

@Component({
  moduleId: module.id,
  templateUrl: 'price.table.html'
})
export class Per10Component extends StripeTableComponent {

  constructor(private router: Router) {
    super(router);
    this.payments = [
      {amount: 695, itemName: 'GaiGai 1-dates package - 10% OFF'},
      {amount: 1785, itemName: 'GaiGai 3-dates package - 10% OFF'},
      {amount: 1965, itemName: 'GaiGai 5-dates package - 10% OFF'},
      {amount: 2505, itemName: 'GaiGai 10-dates package - 10% OFF'}
    ];
    this.plans = {
      '3': [
        {amount: 595, itemName: '3 dates package - 10% discount - 3 months', count: 3},
        {amount: 655, itemName: '5 dates package - 10% discount - 3 months', count: 3},
        {amount: 835, itemName: '10 dates package - 10% discount - 3 months', count: 3}
      ],
      '6': [
        {amount: 297.5, itemName: '3 dates package - 10% discount - 6 months', count: 6},
        {amount: 327.5, itemName: '5 dates package - 10% discount - 6 months', count: 6},
        {amount: 417.5, itemName: '10 dates package - 10% discount - 6 months', count: 6}
      ]
    };
  }
}

