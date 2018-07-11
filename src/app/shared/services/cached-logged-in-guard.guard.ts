import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class CachedLoggedInGuardGuard implements CanActivate {
  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.authenticationService.currentUserToken === null) {
        this.router.navigate(['/connexion']);
        return false;
      }

      return true;
  }
}
