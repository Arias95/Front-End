import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as CryptoJS from 'crypto-js';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { RestService } from './rest.service';
import { User } from './models/user';
import { Country } from './models/country';
import { University } from './models/university';
import { Skill } from './models/skill';
import { NewSkill } from './models/new-skill';
import { Category } from './models/category';
import { Status } from './models/status';
import { Publication } from './models/publication';

@Injectable()
export class UserService {
  private loggedUser = new BehaviorSubject<string>('default');
  currentUser = this.loggedUser.asObservable();

  constructor(
    private http: HttpClient,
    private rest: RestService
  ) { }

  // ===== LOGIN FUNCTIONS =====

  login(id: string, pass: string): Observable<string> {
    const url = this.rest.URL() + 'Cuenta/validate';
    const hash = CryptoJS.SHA256(pass);
    const usrDTO = {
      userID: id,
      password: hash.toString(CryptoJS.enc.Base64)
    };
    return this.http.post<string>(url, usrDTO);
  }

  loginAdmin(id: string, pass: string): Observable<string> {
    const url = this.rest.URL() + 'Cuenta/validateAdmi';
    const hash = CryptoJS.SHA256(pass);
    const usrDTO = {
      userID: id,
      password: hash.toString(CryptoJS.enc.Base64)
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

  // ===== REGISTER FUNCTIONS =====

  getCountries(): Observable<Country[]> {
    const url = this.rest.URL() + 'Universidad';
    return this.http.get<Country[]>(url);
  }

  addCountry(name: string): Observable<Status[]> {
    const url = this.rest.URL() + 'Universidad?pais=' + name;
    return this.http.post<Status[]>(url, {});
  }

  getUniversities(country: string): Observable<University[]> {
    const url = this.rest.URL() + 'Universidad?pais=' + country;
    return this.http.get<University[]>(url);
  }

  getSkills(): Observable<Skill[]> {
    const url = this.rest.URL() + 'Habilidad?tipo=0';
    return this.http.get<Skill[]>(url);
  }

  getSkillsUser(carnet: string): Observable<Skill[]> {
    const url = this.rest.URL() + 'Cuenta/habilidad?carnet=' + carnet;
    return this.http.get<Skill[]>(url);
  }

  getSkillsCat(category: string): Observable<Skill[]> {
    const url = this.rest.URL() + 'Habilidad?nombreCategoria=' + category;
    return this.http.get<Skill[]>(url);
  }

  addSkill(newSkill: NewSkill): Observable<Status[]> {
    const url = this.rest.URL() + 'Habilidad';
    return this.http.post<Status[]>(url, newSkill);
  }

  getCategories(): Observable<Category[]> {
    const url = this.rest.URL() + 'Habilidad?tipo=1';
    return this.http.get<Category[]>(url);
  }

  addCategory(category: string): Observable<Status[]> {
    const url = this.rest.URL() + 'Habilidad?nombre=' + category;
    return this.http.post<Status[]>(url, {});
  }

  register(newUser: any): Observable<Status> {
    const url = this.rest.URL() + 'Cuenta/register';
    return this.http.post<Status>(url, newUser);
  }

  registerAdmin(newUser: any): Observable<Status> {
    const url = this.rest.URL() + 'Cuenta/registerAdmi';
    return this.http.post<Status>(url, newUser);
  }

  getPosts(carnet: string): Observable<Publication[]> {
    const url = this.rest.URL() + 'Publicacion?carnetEstudiante=' + carnet;
    return this.http.get<Publication[]>(url);
  }

  postTutoria(request: any): Observable<Status[]> {
    const url = this.rest.URL() + 'Publicacion/tutoria';
    return this.http.post<Status[]>(url, request);
  }
}
