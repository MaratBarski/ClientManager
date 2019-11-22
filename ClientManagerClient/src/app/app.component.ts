import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exam';
  constructor(
    private userService: UserService,
    private router: Router) { }
  signOut(): void {
    this.userService.logOut();
    this.router.navigate(['/Login']);
  }
}
