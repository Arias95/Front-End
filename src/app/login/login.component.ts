import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';

import { User } from '../../app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private userID: string;
  private password: string;
  private loginInfo: User;
  private alert = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.userID, this.password)
      .subscribe(user => {
        console.log('Ahora si');
      }, err => {
        this.alert = true;
      });
  }

  closeAlert() {
    this.alert = false;
  }
}
