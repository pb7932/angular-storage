import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: Observable<boolean>;
  redirectUrl: string | null = null;

  constructor() { 
    this.isLoggedIn = of(false);
  }

  login(username: string, password: string): Observable<boolean> {
    if(username == 'admin' && password == '123') {
      return of(true).pipe(
        delay(1000),
        tap(() => this.isLoggedIn = of(true))
      );
    }
    return of(false);
  }

  logout(): void {
    this.isLoggedIn = of(false);
  }

  isLogIn(): Observable<boolean> | undefined {
    return this.isLoggedIn;
  }
}
