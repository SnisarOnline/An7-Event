import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth/auth.service';

@Component({
  selector: 'app-logout',
  template: '',
})
export class LogoutComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
    console.log('START CONSTRUCTOR LogoutComponent');
  }

  ngOnInit() {
    this.authService.logout(); // jwt
    // this.router.navigateByUrl('');
    this.router.navigateByUrl('/auth/login');
  }

}
