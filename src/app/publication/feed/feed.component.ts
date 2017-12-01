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
  private empty = false;

  constructor(
    private publicationService: PublicationService
  ) {}

  ngOnInit() {
    this.getPublications(this.user);
  }

  getPublications(user: string): void {
    this.publicationService.getPublications(user)
      .subscribe(response => {
        if (response == null) {
          this.empty = true;
        }
        this.posts = response;
      },
      err => console.log('Error'));
  }
}
