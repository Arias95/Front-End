import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Publication } from './models/publication';

@Injectable()
export class PublicationService {
  private url = 'http://192.168.0.10:5555/api/';
  headers = new Headers({
    'Content-Type': 'application/json'
  });

  constructor(
    private http: HttpClient
  ) {}

  getPublications(carnet: string): Observable<Publication[]> {
    return this.http.get<Publication[]>(this.url + 'Publicacion?carnet=' + carnet);
  }

}
