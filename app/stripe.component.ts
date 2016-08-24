import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Payment} from './payment';

@Component({
  moduleId: module.id,
  selector: 'stripe',
  templateUrl: 'stripe.component.html',
})
export class StripeComponent implements OnInit, OnDestroy {


  ngOnInit() {

  }

  ngOnDestroy() {
  }


}
