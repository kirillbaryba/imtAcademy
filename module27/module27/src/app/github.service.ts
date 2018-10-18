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
    return this.http.get('https://localhost:3000/users');
  }

  getPosts() {
    return this.http.get('https://localhost:3000/posts');
  }

  getPostsForUser(authorId) {
    return this.http.get(`https://localhost:3000/posts?authorId=${authorId}`);
  }
  getComments() {
    return this.http.get('https://localhost:3000/comments');
  }
  addUser(user) {
    return this.http.post('https://localhost:3000/users', user);
  }
  addPost(title, authorId) {
    return this.http.post('https://localhost:3000/posts', { title, authorId });
  }
  removeUser(id) {
    return this.http.delete(`https://localhost:3000/users/${id}`);
  }
}
