import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { RestService } from './rest.service';
import { Comment } from './models/comment';
import { PostComment } from './models/postComment';

@Injectable()
export class CommentService {

  constructor(
    private http: HttpClient,
    private rest: RestService
  ) {}

  getComments(id: string): Observable<Comment[]>  {
    const url = this.rest.URL() + 'Publicacion?idPub=' + id;
    return this.http.get<Comment[]>(url);
  }

  postComment(comment: any): Observable<PostComment[]> {
    const url = this.rest.URL() + 'Publicacion/comentar';
    return this.http.post<PostComment[]>(url, comment);
  }
}
