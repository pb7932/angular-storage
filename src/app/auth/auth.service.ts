import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;
  redirectUrl: string | null = null;

  constructor() { }

  login(username: string, password: string): Observable<boolean> {
    //username == 'admin' && password == '123'
    if(1) {
      return of(true).pipe(
        delay(1000),
        tap(() => this.isLoggedIn = true)
      );
    }
    return of(false);
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
