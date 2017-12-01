import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private feed = true;
  private addPublication = false;
  private loggedUser: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.currentUser.subscribe(user => this.loggedUser = user);
  }

}
