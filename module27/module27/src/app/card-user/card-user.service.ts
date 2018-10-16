import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardUserService {
  constructor(private http: HttpClient) {}

  getUser(id) {
    return this.http.get(`https://localhost:3000/users`);
    // return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
  getPost(id) {
    return this.http.get(`https://localhost:3000/posts`);
    // return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
