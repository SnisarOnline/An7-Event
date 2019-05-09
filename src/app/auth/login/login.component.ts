import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl'],
})
export class LoginComponent implements OnInit {

  loginModel = {
    username: 'admin',
    password: 'admin'
  };
  errors: any = {
    non_field_errors: [],
  };

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    const token = this.auth.getToken();
    if (token) {
      this.router.navigateByUrl('');
    }
  }

  login(): void {
    this.auth.login( this.loginModel ).toPromise()
      .then(isLogged => {
        if (isLogged) {
          this.router.navigate(['']);
        }
      })
      .catch(data => {
        data = data.json();
        console.log('ERR catch LoginComponent login = ', data);
        this.errors.non_field_errors = data.non_field_errors;
      });
  }

}
