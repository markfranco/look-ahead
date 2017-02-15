import { FormsModule } from '@angular/forms';
import {
  async,
  TestBed
 } from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';

import { HomeComponent } from './home.component';

export function main() {
  // describe('Home component', () => {

  //   beforeEach(() => {

  //     TestBed.configureTestingModule({
  //       imports: [FormsModule],
  //       declarations: [HomeComponent],
  //       providers: [
  //         { provide: NameListService, useValue: new MockNameListService() }
  //       ]
  //     });

  //   });

  // });
}

class MockNameListService {

  returnValue: string[];

  get(): Observable<string[]> {
    return Observable.create((observer: any) => {
      observer.next(this.returnValue);
      observer.complete();
    });
  }
}
