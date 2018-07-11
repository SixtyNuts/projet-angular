import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class RealTimeLoggedInGuard implements CanActivate {

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (this.authenticationService.currentUserToken === null) {
      this.router.navigate(['/connexion']);
      return false;
    }

    const loggedIn = this.authenticationService.isAuthenticatedReal();
    loggedIn.subscribe(
      isLoggedIn => {
        if (!isLoggedIn) {
          this.router.navigate(['/connexion']);
        }
      }
    );

    return loggedIn;
  }
}
