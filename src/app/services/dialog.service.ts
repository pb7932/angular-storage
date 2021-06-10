import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  confirmed = new Subject<boolean>();

  constructor() { }

  confirm(): Observable<boolean> {
    return this.confirmed;
  }

  save() {
    this.confirmed.next(true);
  }

  refuse() {
    this.confirmed.next(false);
  }
}
