import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'storage';

  loggedIn: Observable<boolean>;

  constructor(private authService: AuthService) { 
    this.loggedIn = of(false);
  }

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe(x => {this.loggedIn = of(x)});
  }

  logout(): void {
    this.authService.logout();
  }
}
