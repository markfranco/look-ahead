import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Config } from '../shared/config/env.config';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AusPostService {

  constructor(private http: Http) {}

  getSuburbs( suburbSearch: string ) {
    return this.http.get( Config.api + '/api/ausPostSuburbSearch/' + suburbSearch )
                    .map(( response: any ) => {
                      return response.json().localities.locality || [];
                    })
                    .catch(this.handleError);
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
