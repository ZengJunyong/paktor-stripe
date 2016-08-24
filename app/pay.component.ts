import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Plan} from './plan'
import {Http, Response} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import {StripeService}     from './stripe.service';

@Component({
  moduleId: module.id,
  templateUrl: 'pay.component.html',
  providers: [StripeService]
})
export class PayComponent implements OnInit, OnDestroy {
  sub: any;
  plan: Plan;

  card = {cardNumber: 4242424242424242, expMM: 10, expYY: 25, CVC: 983};

  constructor(private route: ActivatedRoute, private stripeService: StripeService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(data => {
      this.plan = <Plan>data;
    });
  }

  submit() {
    this.stripeService.pay(this.card).subscribe(result => console.log(result));
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
