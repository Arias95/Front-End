import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../user.service';
import { PublicationService } from '../../publication.service';

@Component({
  selector: 'app-tutoria-post',
  templateUrl: './tutoria.component.html',
  styleUrls: ['./tutoria.component.css']
})
export class TutoriaPostComponent implements OnInit {
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
  private assistanceAlert = false;
  private ownAlert = false;

  private fecha: string;
  private hora: string;
  private lugar: string;
  private asistentes: number;
  private costo: string;

  constructor(
    private userServ: UserService,
    private publicationServ: PublicationService
  ) { }

  ngOnInit() {
    this.userServ.currentUser.subscribe(response => {
      this.loggedUser = response;
    });
  }

  toggle() {
    if (!this.visible) {
      this.publicationServ.getTutoria(this.id).subscribe(response => {
        this.fecha = response.fecha;
        this.hora = response.hora;
        this.lugar = response.lugar;
        this.asistentes = response.asistentes;
        this.costo = response.costo;
        this.visible = true;
      });
    } else {
      this.visible = false;
    }
  }

  like() {
    if (this.rated) {
      this.ratedAlert = true;
    } else {
      this.publicationServ.likePost(this.id, this.loggedUser).subscribe(response => {
        this.rated = true;
        this.likes++;
      }, err => {
        this.ratedAlert = true;
      });
    }
  }

  dislike() {
    if (this.rated) {
      this.ratedAlert = true;
    } else {
      this.publicationServ.dislikePost(this.id, this.loggedUser).subscribe(response => {
        this.rated = true;
        this.dislikes++;
      }, err => {
        this.ratedAlert = true;
      });
    }
  }

  goTutoria() {
    this.publicationServ.goTutoria(this.id, this.loggedUser).subscribe(response => {
      this.asistentes++;
      this.assistanceAlert = true;
    }, err => {
      this.ownAlert = true;
    });
  }

  closeAlert() {
    this.ratedAlert = false;
  }

  closeAssistance() {
    this.assistanceAlert = false;
  }

  closeOwn() {
    this.ownAlert = true;
  }

}
