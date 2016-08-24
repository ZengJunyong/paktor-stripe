import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Payment} from './payment'

@Component({
  moduleId: module.id,
  selector: 'my-full',
  templateUrl: 'full.component.html',
})
export class FullComponent {

  payments: Payment[] = [];

  constructor() {
    this.payments = [
      {id: 1, amount: 775, itemName: 'GaiGai 1-dates package - No Installment'},
      {id: 2, amount: 1980, itemName: 'GaiGai 3-dates package - No Installment'},
      {id: 3, amount: 2190, itemName: 'GaiGai 5-dates package - No Installment'},
      {id: 4, amount: 2790, itemName: 'GaiGai 10-dates package - No Installment'}
    ];
  }

}
