import { Component } from '@angular/core';
import { Produsts } from './produsts';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab7';
  constructor(private authService: AuthService) { }
  isAuthenticated() {
    return this.authService.isAuthenticated
  }
  logout() {
    this.authService.logout();
  }
}
