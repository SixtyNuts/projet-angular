import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AvailabilityAware } from '../models/AvailabilityAware';
import { UserCredentials } from '../models/UserCredentials';
import { UserToken } from '../models/UserToken';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl = environment.baseUrl;
  currentUserToken = null;

  constructor(private http: HttpClient) {
    this.currentUserToken = localStorage.getItem('currentUserToken');
  }

  isEmailAvailable(email: string): Observable <boolean> {
    const url = `${this.baseUrl}/api/users/${email}/email-availability`;
    return this.http.get<AvailabilityAware>(url)
      .pipe(map(json => json.available === true)
    );
  }

  isUsernameAvailable(username: string): Observable < boolean > {
    const url = `${this.baseUrl}/api/users/${username}/username-availability`;
    return this.http.get<AvailabilityAware>(url)
      .pipe(map(json => json.available === true)
    );
  }

  register(user): Observable < string > {
    const url = `${this.baseUrl}/api/users/register`;
    return this.http.post<UserToken>(url, user).pipe(
      map((json) => json.token)
    );
  }

  login(credentials: UserCredentials): Observable < string > {
    const url = `${this.baseUrl}/api/users/token`;
    const headers = new HttpHeaders(
      {
        'Authorization': 'Basic ' + btoa(`${credentials.username}:${credentials.password}`)
      }
    );

    return this.http.get<UserToken>(url, { headers }).pipe(
      map((json) => json.token)
    );
  }

  setCurrentUserToken(token: string) {
    this.currentUserToken = token;
    localStorage.setItem('currentUserToken', token);
  }
}
