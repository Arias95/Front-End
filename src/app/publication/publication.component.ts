import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {
  @Input() title: string;
  @Input() user: string;
  @Input() desc: string;
  @Input() skill: string;
  private visible: boolean;

  constructor() { }

  ngOnInit() {
  }

}
