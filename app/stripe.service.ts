import {Injectable}     from '@angular/core';
import {Http, Response} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';

import {Observable}     from 'rxjs/Observable';
import {Payment} from './payment'

@Injectable()
export class StripeService {
  constructor(private http: Http) {
  }

  pay(payment: any): Observable<any> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post('http://localhost:4000/stripe', payment, options)
      .map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }
}

