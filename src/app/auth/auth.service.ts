import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: BehaviorSubject<boolean>;
  redirectUrl: string | null = 'admin';

  constructor() { 
    this.isLoggedIn = new BehaviorSubject<boolean>(false);
    //this.isLoggedIn = new BehaviorSubject<boolean>(true);
    console.log('created auth service ' + Date.now().toFixed());
  }

  login(username: string, password: string): Observable<boolean> {
    if(username == 'admin' && password == '123') {
      return of(true).pipe(
        delay(1000),
        tap(() => {this.isLoggedIn.next(true)})
      );
    }
    return of(false);
  }

  logout(): void {
    this.isLoggedIn.next(false);
  }
}
