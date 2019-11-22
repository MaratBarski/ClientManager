import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponse } from '../model/loginResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  get isLogin(): boolean {
    return !!localStorage.getItem('token');
  }

  logOut(): void {
    localStorage.removeItem('token');
  }

  loginUser(userName: string, password: string): Observable<LoginResponse> {
    return this.http.post<any>(
      environment.serverUrl + 'api/Login/Authenticate',
      {
        userName: userName,
        password: password
      }
    );
  }
}
