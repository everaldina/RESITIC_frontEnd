import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReloadFrameService {
  private reloadSubject = new Subject<void>();

  reloadFrame() {
    this.reloadSubject.next();
  }

  get reloadEvent() {
    return this.reloadSubject.asObservable();
  }
}
