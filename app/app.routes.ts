import {provideRouter, RouterConfig}  from '@angular/router';
import {Per10Component} from './per10.component';
import {FullComponent} from './full.component';
import {SDNComponent} from './sdn.component';
import {StripeComponent} from './stripe.component';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/full',
    pathMatch: 'full'
  },
  {
    path: 'full',
    component: FullComponent
  },
  {
    path: 'per10',
    component: Per10Component
  },
  {
    path: 'sdn',
    component: SDNComponent
  },
  {
    path: 'stripe/:id',
    component: StripeComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
