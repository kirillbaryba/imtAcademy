import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getUsers() {
    // return this.http.get('https://api.github.com/users?since=135');
    // return this.http.get(`https://jsonplaceholder.typicode.com/users`);
    return this.http.get(`https://localhost:3000/users`);
  }
  getPosts() {
    // return this.http.get('https://api.github.com/users?since=135');
    return this.http.get(`https://localhost:3000/posts`);
  }
}
