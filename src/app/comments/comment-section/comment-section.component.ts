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
  private comments = [
    {
      id: 12,
      user: 'Choco',
      date: Date(),
      content: 'Esta mamando perro'
    },
    {
      id: 13,
      user: 'Alguien que sabe',
      date: Date(),
      content: 'Mamando esta usted.'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
