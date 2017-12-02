import { Component, OnInit, Input } from '@angular/core';
import { Publication } from '../models/publication';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  @Input() private loggedUser: string;
  @Input() private nombre: string;
  @Input() private carnet: string;
  @Input() private universidad: string;
  @Input() private reputacion: number;
  @Input() private seguido: boolean;
  @Input() private habilidades: string[];
  private apoyos: number;
  private posts: Publication[];

  private display = false;
  private displaySupport = false;

  constructor(private searchServ: SearchService) { }

  ngOnInit() {
    this.getApoyos();
  }

  follow() {
    this.searchServ.follow(this.carnet, this.loggedUser).subscribe(result => {
      this.seguido = true;
    });
  }

  displayPosts() {
    this.searchServ.getPosts(this.carnet, this.loggedUser).subscribe(response => {
      this.posts = response;
      this.display = true;
    });
  }

  getApoyos() {
    this.searchServ.getApoyos(this.loggedUser).subscribe(response => {
      this.apoyos = response;
    });
  }

  closePosts() {
    this.display = false;
  }

  support() {
    if (this.displaySupport === true) {
      this.displaySupport = false;
    } else {
      this.displaySupport = true;
    }
  }
}
