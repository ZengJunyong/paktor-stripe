import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {PaymentComponent} from './payment.component'
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  directives: [PaymentComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
}
