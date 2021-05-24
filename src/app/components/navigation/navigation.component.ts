import { Component, OnInit } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { switchMap, switchMapTo } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  loggedIn: boolean = false;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
   const value = this.authService.isLogIn()!;
   const result = value.pipe(switchMapTo(this.authService.isLoggedIn));
   result.subscribe((x) => {this.loggedIn = x});
  }

}
