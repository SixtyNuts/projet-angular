import { Component,  HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-home-intro',
  templateUrl: './home-intro.component.html',
  styleUrls: ['./home-intro.component.scss']
})
export class HomeIntroComponent implements OnInit {

  logoTopNavVisible: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
  }
  
  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    if (number > 100) {
      this.logoTopNavVisible = true;
    } else if (this.logoTopNavVisible && number < 10) {
      this.logoTopNavVisible = false;
    }
  }

}
