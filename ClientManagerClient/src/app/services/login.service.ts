import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements CanActivate {
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  canActivate() {
    if (!this.userService.isLogin) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
