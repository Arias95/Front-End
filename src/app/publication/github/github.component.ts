import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  @Input() private address: string;
  window: NewWindow;

  constructor() { }

  ngOnInit() {
  }

  openLink() {
    window.open('https://github.com/' + this.address);
  }
}

interface NewWindow extends Window { // Usada para abrir link dinamicamente en una nueva pestana
  newFunction(): void;
}
