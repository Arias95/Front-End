import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as CryptoJS from 'crypto-js';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { RestService } from './rest.service';
import { User } from './models/user';

@Injectable()
export class UserService {
  private loggedUser = new BehaviorSubject<string>('default');
  currentUser = this.loggedUser.asObservable();

  constructor(
    private http: HttpClient,
    private rest: RestService
  ) { }

  login(id: string, pass: string): Observable<string> {
    const url = this.rest.URL() + 'Cuenta/validate';
    const hash = CryptoJS.SHA256(pass);
    const usrDTO = {
      userID: id,
      password: pass
    };

    return this.http.post<string>(url, usrDTO);
  }

  getUserData(id: string): Promise<User[]> {
    const url = this.rest.URL() + 'Cuenta/login?carnet=' + id;
    return this.http.get<User[]>(url).toPromise();
  }

  changeUser(user: string) {
    this.loggedUser.next(user);
  }
}
