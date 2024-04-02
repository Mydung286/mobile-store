import { Injectable } from '@angular/core';
import { LoginForm, RegisterForm } from './auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated: boolean = false
  isloading: boolean = false
  constructor(private router: Router) { }
  Users: any[] = [
    {
      email: 'itc.edu@gmail.com',
      password: '123456789'
    }
  ]
  login(form: LoginForm) {
    if (form.email = this.Users[0].email && form.password == this.Users[0].password) {
      this.isAuthenticated = true
      this.router.navigate([''])
    } else {
      alert('login not success')
      this.isAuthenticated = false
    }
  }
  register(form: RegisterForm) {
    if (form.password != form.comfirm_password) {
      return
    } else {
      this.Users.push(form)
      this.router.navigate(['login'])
      this.isAuthenticated = true
    }
    console.log(this.Users)
  }
  logout() {
    this.router.navigate(['login'])
    this.isAuthenticated = false
  }
}
