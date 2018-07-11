import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class IsAnonymousGuardGuard implements CanActivate {
  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authenticationService.currentUserToken !== null) {
      this.router.navigate(['/evenements']);
      return false;
    }

    return true;
  }
}
