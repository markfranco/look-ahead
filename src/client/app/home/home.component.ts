import { Component } from '@angular/core';
import { AusPostService } from '../shared/aus-post.service';

@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent  {

  name: string;
  email: string;
  suburbSearch: string = '';
  suburbs: any[];
  errorMessage: string;
  submitted: boolean = false;
  emailPattern: RegExp = /^[a-z0-9_\-\.]{2,}@[a-z0-9_\-\.]{2,}\.[a-z]{2,}$/;

  constructor( public ausPostService: AusPostService) { }

  lookForSuburb() {
    this.suburbs = null;

    if ( this.suburbSearch && this.suburbSearch.length >= 3 ) {
      this.ausPostService.getSuburbs(this.suburbSearch)
                        .subscribe(
                          suburbs => this.suburbs = suburbs,
                          error => this.errorMessage = <any>error
                        );
    }
  }

  populateSuburb(suburb: any) {
    this.suburbSearch = `${suburb.location} ${suburb.state} ${suburb.postcode}`;
    this.suburbs = null;
  }

  clearSuburb() {
    this.suburbSearch = null;
  }

  onSubmit() {
    this.submitted = true;
  }


}
