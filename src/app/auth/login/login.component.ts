import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  login():void {
    this.authService.login('admin', '123').subscribe(() => {
      this.authService.isLogIn()?.subscribe(x => {
        if(x == true) {
          const redirectUrl = 'admin';
          this.router.navigate([redirectUrl]);
        }
      });
      /*if(result == true) {
        const redirectUrl = '/admin';
        
        this.router.navigate([redirectUrl]);
      }
      */
    });
  }
}