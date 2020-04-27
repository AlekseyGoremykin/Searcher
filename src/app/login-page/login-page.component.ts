import { Component, OnInit } from '@angular/core';
import {AppGuardGuard} from "../app-guard.guard";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../interfaces";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(public log: AppGuardGuard) { }

  loginPanel: FormGroup;
  user: User;

  ngOnInit(): void {
    this.loginPanel = new FormGroup({
      login: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    })
  }

  login() {
    this.user= {
      login: this.loginPanel.value.login,
      password: this.loginPanel.value.password
    }

    this.log.login(this.user)
  }

}
