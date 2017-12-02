import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
  @Input() private loggedUser: string;
  @Input() private carnet: string;
  @Input() private apoyos: number;
  @Input() private habilidades: string[];
  private habilidad: string;

  private alert = false;
  private failureAlert = false;

  constructor(private searchServ: SearchService) { }

  ngOnInit() {
  }

  darApoyo() {
    this.searchServ.darApoyo(this.loggedUser, this.carnet, this.habilidad).subscribe(response => {
      this.alert = true;
    }, err => {
      this.failureAlert = true;
    });
  }

  closeFailure() {
    this.failureAlert = false;
  }

  closeAlert() {
    this.alert = false;
  }
}
