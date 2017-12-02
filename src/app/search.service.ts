import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { RestService } from './rest.service';
import { SearchResult } from './models/search-result';
import { Status } from './models/status';

@Injectable()
export class SearchService {

  constructor(
    private http: HttpClient,
    private rest: RestService
  ) { }

  search(criteria: any): Observable<SearchResult[]> {
    const url = this.rest.URL() + 'Cuenta/buscar';
    return this.http.post<SearchResult[]>(url, criteria);
  }

  follow(seguido: string, seguidor: string): Observable<Status[]> {
    const url = this.rest.URL() + 'Cuenta/seguir';
    const req = {
      seguidor: seguidor,
      seguido: seguido
    };

    return this.http.post<Status[]>(url, req);
  }
}
