import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { RestService } from './rest.service';
import { SearchResult } from './models/search-result';
import { Status } from './models/status';
import { Publication } from './models/publication';

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

  getPosts(seguido: string, seguidor: string): Observable<Publication[]> {
    const url = this.rest.URL() + 'Publicacion/publicacionUsuario';
    const req = {
      seguidor: seguidor,
      seguido: seguido
    };
    return this.http.post<Publication[]>(url, req);
  }

  getApoyos(carnet: string): Observable<number> {
    const url = this.rest.URL() + 'Cuenta?carnet=' + carnet;
    return this.http.get<number>(url);
  }

  darApoyo(dador: string, receptor: string, habilidad: string): Observable<Status[]> {
    const url = this.rest.URL() + 'Cuenta/apoyo';
    const req = {
      carnetDar: dador,
      carnetRecibir: receptor,
      habilidad: habilidad
    };
    console.log(req);
    return this.http.post<Status[]>(url, req);
  }
}
