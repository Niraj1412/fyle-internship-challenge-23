// api.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getUser(username: string): Observable<any> {
    return this.httpClient.get(`https://api.github.com/users/${username}`);
  }

  getRepos(username: string, page: number, perPage: number): Observable<any> {
    return this.httpClient.get(`https://api.github.com/users/${username}/repos?page=${page}&per_page=${perPage}`);
  }

  // Updated getUserProfile method to require a username argument
  getUserProfile(username: string): Observable<any> {
    return this.httpClient.get(`https://api.github.com/users/${username}`);
  }
}
