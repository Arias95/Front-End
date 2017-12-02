import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { RestService } from './rest.service';
import { NewUni } from './models/new-university';
import { Status } from './models/status';

@Injectable()
export class UniversityService {

  constructor(
    private http: HttpClient,
    private rest: RestService
  ) { }

  addUniversity(newUni: NewUni): Observable<Status[]> {
    const url = this.rest.URL() + 'Universidad';
    return this.http.post<Status[]>(url, newUni);
  }
}
