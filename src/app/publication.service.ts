import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Publication } from './models/publication';

@Injectable()
export class PublicationService {
  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getPublications(): Observable<Publication[]> {
    return this.http.get<Publication[]>(this.url + '/publications/');
  }

}
