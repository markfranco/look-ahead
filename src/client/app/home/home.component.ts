import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/name-list/name-list.service';

import { AusPostService } from '../shared/aus-post.service';

@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {

  newName: string = '';
  suburbSearch: string = '';
  suburbs: any[];
  errorMessage: string;
  names: any[] = [];

  constructor( public nameListService: NameListService, public ausPostService: AusPostService) {}

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.getNames();
  }

  getNames() {
    this.nameListService.get()
      .subscribe(
        names => this.names = names,
        error => this.errorMessage = <any>error
      );
  }

  addName(): boolean {
    // TODO: implement nameListService.post
    this.names.push(this.newName);
    this.newName = '';
    return false;
  }

  lookForSuburb() {
    this.suburbs = null;

    if ( this.suburbSearch.length >= 3 ) {
      this.ausPostService.getSuburbs(this.suburbSearch)
                        .subscribe(
                          suburbs => this.suburbs = suburbs,
                          error => this.errorMessage = <any>error
                        );
    }
  }

  populateSuburb(suburb: any) {
    console.log('suburb', suburb);
    this.suburbSearch = `${suburb.location} ${suburb.state} ${suburb.postcode}`;
    this.suburbs = null;
  }

  clearSuburb() {
    this.suburbSearch = null;
  }


}
