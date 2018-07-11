import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse, HttpResponseBase} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {Observable, of, Subscription, timer} from 'rxjs';
import { map } from 'rxjs/operators';
import { AvailabilityAware } from '../models/AvailabilityAware';
import { UserCredentials } from '../models/UserCredentials';
import { UserToken } from '../models/UserToken';
import { User } from '../models/User';
import {catchError, switchMap} from 'rxjs/internal/operators';
import {Error} from 'tslint/lib/error';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl = environment.baseUrl;
  currentUserToken = null;
  checkTokenSubscription: Subscription;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserToken = localStorage.getItem('currentUserToken');
    this.startCheckingSessionTimeout();
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

  logout() {
    this.currentUserToken = null;
    localStorage.removeItem('currentUserToken');
    this.router.navigate(['/']);
  }

  startCheckingSessionTimeout() {
    const DELAY_BETWEEN_CHECKS = 30000;
    this.checkTokenSubscription = timer(DELAY_BETWEEN_CHECKS, DELAY_BETWEEN_CHECKS).subscribe(() => {
      if (this.currentUserToken) {
        this.currentUserToken = localStorage.getItem('currentUserToken');
        this.isAuthenticatedReal().subscribe(
          isReallyauthenticated => {
            if (!isReallyauthenticated) {
              this.logout();
            }
          }
        );
      }
    });
  }

  authenticate(token: string) {
    this.currentUserToken = token;
    localStorage.setItem('currentUserToken', token);
    this.startCheckingSessionTimeout();
  }

  isAuthenticatedCached(): boolean {
    return this.currentUserToken != null;
  }

  isAuthenticatedReal(): Observable<boolean> {
    const url = `${this.baseUrl}/api/users/me`;
    const headers = new HttpHeaders(
      {
        'Authorization': 'Bearer ' + this.currentUserToken
      }
    );

    return this.http.get<User>(url, {headers: headers, observe: 'response'}).pipe(
      map((response: any) => true ),
      catchError(error => of(false))
    );
  }
}
