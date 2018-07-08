import { Component, OnInit } from '@angular/core';
import { OverlayService } from '../overlay.service';
import { filter } from 'rxjs/operators';
import { Router, ResolveStart } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  isOpen = false;

  constructor(private overlayService: OverlayService, private router: Router) { }

  ngOnInit() {
    this.overlayService.getStatusObservable('home')
      .pipe(
        filter(isDisplayed => isDisplayed === false)
      )
      .subscribe(() => this.isOpen = false);

    this.router.events
        .pipe( filter(event => event instanceof ResolveStart) )
        .subscribe((event) => {
          this.overlayService.hide('home');
        });
  }

  open() {
    this.overlayService.display('home');
    this.isOpen = true;
  }

  close() {
    this.overlayService.hide('home');
    this.isOpen = false;
  }

}
