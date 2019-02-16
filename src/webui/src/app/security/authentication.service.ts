import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from "../../environments/environment";

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    return this.http.post<any>( environment.API_BASE_PATH + '/token', {username, password})
      .pipe(map(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      }));
  }

  register(registerData) {
    return this.http.post<any>( environment.API_BASE_PATH + '/token/register', registerData)
      .pipe(map(resp => {
        return resp;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
