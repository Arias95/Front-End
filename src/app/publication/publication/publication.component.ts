import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations'; // Animaciones

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {
  // Input es temporal, deberian llegar por REST
  @Input() title: string;
  @Input() user: string;
  @Input() desc: string;
  @Input() skill: string;

  likes: number;
  dislikes: number;
  private visible: boolean;

  constructor() {
    this.visible = false;
    this.likes = 0;
    this.dislikes = 0;
  }

  ngOnInit() {
  }

  toggle() {
    if (!this.visible) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  like() {
    this.likes++;
  }

  dislike() {
    this.dislikes++;
  }
}