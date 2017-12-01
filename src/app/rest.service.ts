import { Injectable } from '@angular/core';

@Injectable()
export class RestService {
  private url = 'http://192.168.0.10:5555/api/';

  constructor() { }

  URL(): string {
    return this.url;
  }
}
