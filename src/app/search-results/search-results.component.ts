import { Component, OnInit, Input } from '@angular/core';
import { Publication } from '../models/publication';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  @Input() private loggedUsed: string;
  @Input() private nombre: string;
  @Input() private carnet: string;
  @Input() private universidad: string;
  @Input() private reputacion: number;
  @Input() private seguido: boolean;
  @Input() private habilidades: string[];
  private posts: Publication[];

  private display = false;

  constructor(private searchServ: SearchService) { }

  ngOnInit() {
  }

  follow() {
    this.searchServ.follow(this.carnet, this.loggedUsed).subscribe(result => {
      this.seguido = true;
    });
  }

  displayPosts() {
    this.searchServ.getPosts(this.carnet).subscribe(response => {
      this.posts = response;
      this.display = true;
    });
  }

  closePosts() {
    this.display = false;
  }
}
