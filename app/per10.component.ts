import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {SDNComponent} from './sdn.component';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'per10.component.html',
  directives: [SDNComponent],
})
export class Per10Component implements OnInit {


  ngOnInit() {
  }


}

