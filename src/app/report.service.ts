import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { RestService } from './rest.service';
import { Report } from './models/report';
import { ReportRequest } from './models/reportRequest';

@Injectable()
export class ReportService {

  constructor(
    private http: HttpClient,
    private rest: RestService
  ) { }

  getReport(request: ReportRequest): Observable<Report[]> {
    const url = this.rest.URL() + 'Reporte';
    return this.http.post<Report[]>(url, request);
  }
}
