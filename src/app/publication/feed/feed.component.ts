import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PublicationService } from '../../publication.service';
import { Publication } from '../../models/publication';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  private posts: Publication[];

  constructor(
    private http: HttpClient,
    private publicationService: PublicationService
  ) { }

  ngOnInit() {
    this.getPublications();
  }

  getPublications(): void {
    this.publicationService.getPublications()
      .subscribe(data => {
        this.posts = data;
      }, err => {
        console.log(err);
      });
  }
}
