import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Output() searchEmitter = new EventEmitter<any>();
  @Input() private loggedUsed: string;
  private searchIn: string;
  private criteria: string;

  constructor() { }

  ngOnInit() {
  }

  sendEvent() {
    const search = {
      carnet: this.loggedUsed,
      filtro: this.criteria,
      dato: this.searchIn
    };

    this.searchEmitter.emit(search);
  }

}
