import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.userID, this.password)
      .subscribe(user => {
        this.userService.changeUser(this.userID);
        this.router.navigate(['/home']);
      }, err => {
        this.alert = true;
      });
  }

  closeAlert() {
    this.alert = false;
  }
}
