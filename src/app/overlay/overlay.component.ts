import { Component, OnInit, Input } from '@angular/core';
import { OverlayService } from '../overlay.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {

  @Input() name: string;
  display = 'none';
  isDisplayedObservable: Observable<boolean>;

  constructor(private overlayService: OverlayService) { }

  hide() {
    this.overlayService.hide(this.name);
  }

  ngOnInit() {
    this.isDisplayedObservable = this.overlayService.getStatusObservable(this.name);
    this.isDisplayedObservable.subscribe(
      isVisible => {
        this.display = isVisible ? 'block' : 'none';
      }
    );
  }

}
