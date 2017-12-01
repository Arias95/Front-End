import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { RestService } from './rest.service';
import { Publication } from './models/publication';

@Injectable()
export class PublicationService {
  headers = new Headers({
    'Content-Type': 'application/json'
  });

  constructor(
    private http: HttpClient,
    private rest: RestService
  ) {}

  getPublications(carnet: string): Observable<Publication[]> {
    const url = this.rest.URL() + 'Publicacion?carnet=' + carnet;
    console.log(url);
    return this.http.get<Publication[]>(url);
  }

}
