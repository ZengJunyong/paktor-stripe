import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';

import {AppComponent}       from './app.component';
import {FullComponent}       from './full.component';
import {Per10Component}       from './per10.component';
import {SDNComponent}       from './sdn.component';
import {PayComponent}       from './pay.component';
import {routing} from './app.routing';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent, FullComponent, Per10Component, SDNComponent, PayComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
