import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Plan} from './plan'
import {Http, Response} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  templateUrl: 'pay.component.html'
})
export class PayComponent implements OnInit, OnDestroy {
  sub: any;
  plan: Plan;

  card = {};

  // constructor(private route: ActivatedRoute, private http: Http) {
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(data => {
      this.plan = <Plan>data;
    });
  }

  submit() {
    // let headers = new Headers({'Content-Type': 'application/json'});
    // let options = new RequestOptions({headers: headers});
    // this.http.post('http://127.0.0.1:4000/stripe', this.card, options)
    //   .map(this.extractData)
    //   .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
