import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable()
/**
 * Вызываем проверку токенна из роутинга
 */
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private auth: AuthService,
    private jwtHelper: JwtHelperService,
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = this.auth.getToken();

    // наличие токена
    if (token == null) {
      this.router.navigateByUrl('/auth/login');
      return false;
    }

    // проверка актуальности токена по времени
    // if (this.jwtHelper.isTokenExpired(token)) {  // для НОРМ бека и токена
    if (!token) {  // для ФЕЙК бека
      this.router.navigateByUrl('/auth/login');
      return false;
    }

    return true;
  }

}
