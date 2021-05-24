import { Component, OnInit } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { distinctUntilChanged, switchMap, switchMapTo, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
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
