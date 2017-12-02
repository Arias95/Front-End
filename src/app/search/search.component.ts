import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../models/search-result';
import { SearchService } from '../search.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private results: SearchResult[];
  private loggedUser: string;

  constructor(
    private searchServ: SearchService,
    private userServ: UserService
  ) { }

  ngOnInit() {
    this.userServ.currentUser.subscribe(response => {
      this.loggedUser = response;
    });
  }

  search($event) {
    console.log($event);
    this.searchServ.search($event).subscribe(response => {
      this.results = response;
    });
  }

}
