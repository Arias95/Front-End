import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent implements OnInit {
  @Input()
  private postId: number;
  @Input()
  private commenter: string;
  private commentBox: string;
  private comments = [];
  constructor() { }

  ngOnInit() {
  }

  comment () {
    const commt = {
      id: 14,
      user: 'Oscar Arias',
      date: Date(),
      content: this.commentBox
    };

    this.comments.push(commt);
    this.commentBox = '';
  }
}
