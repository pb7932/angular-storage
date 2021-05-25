import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  loggedIn: boolean;

  constructor(private authService: AuthService,
    private router: Router) {
      this.username = '';
      this.password = '';
      this.loggedIn = true;
     }

  ngOnInit(): void {
  }

  login():void {
    this.authService.login(this.username, this.password).subscribe(() => {
      this.loggedIn = true;
      this.authService.isLoggedIn.subscribe(x => {
        if(x == true) {
          const redirectUrl = this.authService.redirectUrl;
          this.router.navigate([redirectUrl]);
        }
        else {
          this.loggedIn = false;
        }
      });
    });
  }
}
