import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  private overlaysObservables: Map<string, BehaviorSubject<boolean>> = new Map();

  constructor() { }

  public display(overlayName) {
    this.getStatusSubject(overlayName).next(true);
  }

  hide(overlayName) {
    this.getStatusSubject(overlayName).next(false);
  }

  getStatusObservable(overlayName): Observable<boolean> {
    return this.getStatusSubject(overlayName).asObservable();
  }

  private getStatusSubject(overlayName): BehaviorSubject<boolean> {
    if (!this.overlaysObservables.has(overlayName)) {
      const newOverlayObservable = new BehaviorSubject(false);
      this.overlaysObservables.set(overlayName, newOverlayObservable);
    }
    return this.overlaysObservables.get(overlayName);
  }
}
