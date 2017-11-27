import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() id: number;
  @Input() user: string;
  @Input() date: string;
  @Input() content: string;

  constructor() { }

  ngOnInit() {
  }

}
