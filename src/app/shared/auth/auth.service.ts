import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../model/user.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const httpHeaders = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()
export class AuthService {

  private authorization = 'apiTokenAuth/';

  constructor(private http: HttpClient) {}

  /**
   * User authorization
   * @param authUser
   * @returns {Observable<boolean>}
   */
  login( authUser ): Observable<boolean>  {
    /*
     *  angular-in-memory-web-api - возвращает то что отправляем. и Поетому
     *  fakeToken - как пример получаемого токена от бека
     */
    const FakeToken = {
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIn0.UfFqFnX-9Y8FQj7sy0zNQQipBj8cNt3n3GMf_Rj6iHE',
      user: {
        user_id: '7e52e737-e7e8-44fe-8ae5-2c27160e5249',
        is_admin: true
      }
    };

    return this.http
      .post( 'api/' + this.authorization, FakeToken, httpHeaders )
      .pipe(map((response: any) => {  // Убрал типизацию для ФЕЙК бека
      // .pipe(map((response: Response) => {  // для НОРМ бека
        // const { token, user } = response.json(); // для НОРМ бека
        const {token, user} = response; // для ФЕЙК бека

        if (token) {
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(user));
          return true;
        } else {
          return false;
        }

      }));
  }


  isLogged(): boolean {
    return localStorage.getItem('token') != null;
  }

  logout(): void {
    // localStorage.clear(); // очиска всего локального хранилищя
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  getUser(): User {
    return JSON.parse(localStorage.getItem('user')) as User;
  }

}

