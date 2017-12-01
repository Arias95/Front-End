import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../../comment.service';
import { UserService } from '../../user.service';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent implements OnInit {
  @Input() private publication: string;
  private comments: Comment[];
  private commentBox: string;
  private commenter: string;
  private isEmpty = true;

  constructor(
    private commentServ: CommentService,
    private userServ: UserService
  ) { }

  ngOnInit() {
    this.getComments();
    this.userServ.currentUser.subscribe(user => this.commenter = user);
  }

  postComment() {
    const commt = {
      carnet: this.commenter,
      idPublicacion: this.publication,
      comentario: this.commentBox
    };

    this.commentServ.postComment(commt).subscribe(response => {
      let newComment = new Comment();
      newComment.nombreDueno = 'Nuevo';
      newComment.apellidoDueno = 'Comentario';
      newComment.fecha = Date();
      newComment.comentario = this.commentBox;

      this.comments.push(newComment);
      }, err => console.log(err));
  }

  getComments(): void {
    this.commentServ.getComments(this.publication).subscribe(response => {
      if (response.length !== 0) {
        this.isEmpty = false;
        this.comments = response;
      }
    }, err => console.log('Error cargando comentarios'));
  }
}
