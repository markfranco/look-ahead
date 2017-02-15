import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/do';  // for debugging
import 'rxjs/add/operator/toPromise';
import { Config } from '../shared/config/env.config';

@Injectable()
export class AusPostService {

  constructor(private http: Http) {}

  // createAuthorizationHeader( headers: Headers ) {
  //   headers.append('AUTH-KEY', Config.ausPostKey);
  // }

  getSuburbs( suburbSearch: string ) {
    let headers = new Headers();
    return this.http.get( Config.api + '/api/ausPostSuburbSearch/' + suburbSearch )
                    // .toPromise()
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
