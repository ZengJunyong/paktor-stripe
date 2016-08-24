import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Plan} from './plan'
import {Card} from './card'

@Component({
  moduleId: module.id,
  templateUrl: 'pay.component.html'
})
export class PayComponent implements OnInit, OnDestroy {
  sub: any;
  plan: Plan;

  card = {};

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(data => {
      this.plan = <Plan>data;
    });
  }

  submit() {
    console.log(this.card);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
