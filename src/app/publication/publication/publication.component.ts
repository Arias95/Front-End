import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../user.service';
import { PublicationService } from '../../publication.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {
  @Input() private id: number;
  @Input() private title: string;
  @Input() private user: string;
  @Input() private desc: string;
  @Input() private skill: string;
  @Input() private likes: number;
  @Input() private dislikes: number;
  @Input() private interes: number;

  private loggedUser: string;

  private visible = false;
  private rated = false;
  private ratedAlert = false;

  constructor(
    private userServ: UserService,
    private publicationServ: PublicationService
  ) { }

  ngOnInit() {
    this.userServ.currentUser.subscribe(response => {
      this.loggedUser = response;
    });
    if (this.interes !== 0) {
      this.rated = true;
    }
  }

  toggle() {
    if (!this.visible) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  like() {
    if (this.rated) {
      this.ratedAlert = true;
    } else {
      this.rated = true;
      this.likes++;
      this.publicationServ.likePost(this.id, this.loggedUser).subscribe();
    }
  }

  dislike() {
    if (this.rated) {
      this.ratedAlert = true;
    } else {
      this.rated = true;
      this.dislikes++;
      this.publicationServ.dislikePost(this.id, this.loggedUser).subscribe();
    }
  }

  closeAlert() {
    this.ratedAlert = false;
  }
}
