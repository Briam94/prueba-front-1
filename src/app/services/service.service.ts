import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url = 'https://api.github.com/search/users?q=YOUR_NAME';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.url);
  }
}
