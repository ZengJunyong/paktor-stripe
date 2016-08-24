import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Payment} from './payment'
import {StripeTableComponent} from './stripe.table.component'
import {Plan} from './plan'
import {count} from "rxjs/operator/count";

@Component({
  moduleId: module.id,
  templateUrl: 'price.table.html'
})
export class SDNComponent extends StripeTableComponent {
  constructor(private router: Router) {
    super(router);
    this.payments = [
      {amount: 330, itemName: 'GaiGai 1-dates package'},
      {amount: 1485, itemName: 'GaiGai 3-dates package'},
      {amount: 1665, itemName: 'GaiGai 5-dates package'},
      {amount: 2205, itemName: 'GaiGai 10-dates package'}
    ];
    this.plans = {
      '3': [
        {amount: 495, itemName: '3 dates package - 10% discount - 3 months (SDN Promo)', count: 3},
        {amount: 555, itemName: '5 dates package - 10% discount - 3 months (SDN Promo)', count: 3},
        {amount: 735, itemName: '10 dates package - 10% discount - 3 months (SDN Promo)', count: 3}
      ],
      '6': [
        {amount: 247.5, itemName: '3 dates package - 10% discount - 6 months (SDN Promo)', count: 6},
        {amount: 277.5, itemName: '5 dates package - 10% discount - 6 months (SDN Promo)', count: 6},
        {amount: 367.5, itemName: '10 dates package - 10% discount - 6 months (SDN Promo)', count: 6}
      ]
    };
  }
}
