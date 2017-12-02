import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-register-admi',
  templateUrl: './register-admi.component.html',
  styleUrls: ['./register-admi.component.css']
})
export class RegisterAdmiComponent implements OnInit {
  private userID: string;
  private password: string;
  private pwdConfirm: string;
  private email: string;
  private name: string;
  private lname: string;
  private nameAlert = false;
  private passwordAlert = false;
  private requiredAlert = false;

  constructor(
    private userServ: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  registerAdmin() {
    if (this.password !== this.pwdConfirm) {
      this.passwordAlert = true;
    } if (this.userID === undefined || this.password === undefined || this.pwdConfirm === undefined ||
          this.email === undefined || this.name === undefined || this.lname === undefined) {
      this.requiredAlert = true;
    } else {
      const hash = CryptoJS.SHA256(this.password);
      const newUser = {
        userName: this.userID,
        nombre: this.name,
        apellido: this.lname,
        email: this.email,
        password: hash.toString(CryptoJS.enc.Base64),
      };
      this.userServ.registerAdmin(newUser).subscribe(response => {
        this.userServ.changeUser(this.userID);
        this.router.navigate(['/admin']);
      }, err => {
        this.nameAlert = true;
      });
    }
  }

  closeNameAlert() {
    this.nameAlert = false;
  }

  closePasswordAlert() {
    this.passwordAlert = false;
  }

  closeRequiredAlert() {
    this.requiredAlert = false;
  }
}
