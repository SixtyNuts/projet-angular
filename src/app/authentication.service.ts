import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AvailabilityAware } from './shared/model/AvailabilityAware'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl = environment.baseUrl;
  currentUser = null;

  constructor(private http: HttpClient) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  isEmailAvailable(email: string): Observable<any> {
    const url = `${this.baseUrl}/api/users/${email}/email-availability`;
    return this.http.get<AvailabilityAware>(url)
      .pipe(map(json => json.available === true)
    );
  }

  isUsernameAvailable(username: string): Observable<any> {
    const url = `${this.baseUrl}/api/users/${username}/username-availability`;
    return this.http.get<AvailabilityAware>(url)
      .pipe(map(json => json.available === true)
    );
  }

  register(user) {
    const url = `${this.baseUrl}/api/users/register`;
    return this.http.post<JSON>(url, user);
  }

  setCurrentUser(user) {
    this.currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
  }
}
