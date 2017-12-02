import { Injectable } from '@angular/core';

@Injectable()
export class RestService {
  private url = 'http://172.18.254.31:5555/api/';

  constructor() { }

  URL(): string {
    return this.url;
  }
}
