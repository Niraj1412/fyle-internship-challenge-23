// api.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

<<<<<<< HEAD
  getUser(username: string): Observable<any> {
    return this.httpClient.get(`https://api.github.com/users/${username}`);
  }

  getRepos(username: string, page: number, perPage: number): Observable<any> {
    return this.httpClient.get(`https://api.github.com/users/${username}/repos?page=${page}&per_page=${perPage}`);
  }

  // Updated getUserProfile method to require a username argument
  getUserProfile(username: string): Observable<any> {
    return this.httpClient.get(`https://api.github.com/users/${username}`);
=======
  getUser(githubUsername: string): Observable<any> {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}`);
  }

  getRepos(githubUsername: string, page: number, perPage: number): Observable<any> {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}/repos?page=${page}&per_page=${perPage}`);
>>>>>>> 72e878f57935db1c226c598d4f3072b13d958ef7
  }
}
