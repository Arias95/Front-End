import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as CryptoJS from 'crypto-js';
import { Observable } from 'rxjs/Observable';

import { User } from './models/user';
import { UserTest } from './models/usertest';

@Injectable()
export class UserService {
  private url = 'http://192.168.0.10:5555/api/Cuenta/login';
  private username: string;

  constructor(private http: HttpClient) { }

  login(id: string, pass: string): Observable<User> {
    const hash = CryptoJS.SHA256(pass);
    const usrDTO = {
      userID: id,
      password: pass
    };
    console.log(usrDTO);
    return this.http.post<User>(this.url, usrDTO);
  }

  getUsername(): string {
    return this.username;
  }

  setUsername(name: string) {
    this.username = name;
  }
}
