import { Routes, RouterModule }   from '@angular/router';

import {Per10Component} from './per10.component';
import {FullComponent} from './full.component';
import {SDNComponent} from './sdn.component';
import {PayComponent} from './pay.component';

const appRoutes: Routes = [
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
    path: 'pay',
    component: PayComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
