import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { RestService } from './rest.service';
import { Resource } from './models/resource';

@Injectable()
export class ResourceService {

  constructor(
    private http: HttpClient,
    private rest: RestService
  ) { }

  getResources(id: number): Observable<Resource[]> {
    const url = this.rest.URL() + 'Publicacion?idPublicacion=' + id;
    return this.http.get<Resource[]>(url);
  }

}
