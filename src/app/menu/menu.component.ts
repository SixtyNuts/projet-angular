import { Component, OnInit } from '@angular/core';
import { OverlayService } from '../overlay.service';
import { filter } from 'rxjs/operators';
import { Router, ResolveStart, NavigationEnd, ActivatedRoute, RouteConfigLoadEnd, ActivationEnd } from '@angular/router';
import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  isOpen = false;
  displayedOnCurrentRoute = true;
  private fragment: string;

  constructor(private overlayService: OverlayService,
    private route: ActivatedRoute,
    private router: Router,
    public authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.overlayService.getStatusObservable('main')
      .pipe(
        filter(isDisplayed => isDisplayed === false)
      )
      .subscribe(() => this.isOpen = false);

    this.route.fragment.subscribe(fragment => this.fragment = fragment);

    this.router.events
      .pipe( filter(event => event instanceof ResolveStart) )
      .subscribe((event) => {
        this.overlayService.hide('main');
      });

    this.router.events
      .pipe( filter(event => event instanceof ActivationEnd) )
      .subscribe((event: ActivationEnd) => {
        this.displayedOnCurrentRoute = event.snapshot.data.menuDisabled ? false : true;
      });
  }

  open() {
    this.overlayService.display('main');
    this.isOpen = true;
  }

  close() {
    this.overlayService.hide('main');
    this.isOpen = false;
  }
}
