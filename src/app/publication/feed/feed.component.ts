import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PublicationService } from '../../publication.service';
import { Publication } from '../../models/publication';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  @Input() private user: string;
  private posts: Publication[];

  constructor(
    private publicationService: PublicationService
  ) { }

  ngOnInit() {
    this.getPublications();
  }

  getPublications(): void {
    this.publicationService.getPublications(this.user)
      .subscribe(response => {
        this.posts = response;
      },
      err => console.log('Error'));
  }
}
