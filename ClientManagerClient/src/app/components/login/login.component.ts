import { Component, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { LoginResponse } from 'src/app/model/loginResponse';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {

  userName = 'test';
  userPassword = '123';
  isLoding = false;
  private _subsriptions: Array<Subscription> = [];
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnDestroy(): void {
    this._subsriptions.forEach(s => s.unsubscribe());
  }
  login(): void {
    this.isLoding = true;
    this._subsriptions.push(
      this.userService.loginUser(this.userName, this.userPassword)
        .subscribe((res: LoginResponse) => {
          this.isLoding = false;
          if (res.isLogin) {
            localStorage.setItem('token',res.token);
            this.router.navigate(['/Users']);
          } else {
            alert('Login error');
          }
        }));
  }
}
