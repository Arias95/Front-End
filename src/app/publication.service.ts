import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { RestService } from './rest.service';
import { Publication } from './models/publication';
import { Tutoria } from './models/tutoria';
import { Status } from './models/status';

@Injectable()
export class PublicationService {

  constructor(
    private http: HttpClient,
    private rest: RestService
  ) {}

  getPublications(carnet: string): Observable<Publication[]> {
    const url = this.rest.URL() + 'Publicacion?carnet=' + carnet;
    return this.http.get<Publication[]>(url);
  }

  likePost(id: number, carnet: string): Observable<Status[]> {
    const url = this.rest.URL() + 'Publicacion/darlike';
    const reqBody = {
      idPublicacion: id,
      carnet: carnet,
      isLike: true
    };
    return this.http.post<Status[]>(url, reqBody);
  }

  dislikePost(id: number, carnet: string): Observable<Status[]> {
    const url = this.rest.URL() + 'Publicacion/darlike';
    const reqBody = {
      idPublicacion: id,
      carnet: carnet,
      isLike: false
    };
    return this.http.post<Status[]>(url, reqBody);
  }

  getTutoria(id: number): Observable<Tutoria> {
    const url = this.rest.URL() + 'Publicacion?idTutoria=' + id;
    return this.http.get<Tutoria>(url);
  }

  goTutoria(id: number, carnet: string): Observable<Status[]> {
    const url = this.rest.URL() + 'Publicacion/tutoria/matricular';
    const req = {
      idPublicacion: id,
      carnet: carnet
    };

    return this.http.post<Status[]>(url, req);
  }
}
