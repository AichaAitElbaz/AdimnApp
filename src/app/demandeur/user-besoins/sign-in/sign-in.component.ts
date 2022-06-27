import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {User} from "../../controller/model/user.model";
import {UserService} from "../../controller/service/user.service";
import {HttpClient} from "@angular/common/http";
import {Router, RouterModule} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../controller/auth/auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInDemandeurComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
  get loadeduser(): User {
    return this.authService.loadeduser;
  }
  constructor(private authService: AuthService,
              ) {
  }

  ngOnInit(): void {

  }

  submit() {
    const formValues = this.loginForm.value;
    const username = formValues.username;
    const passowrd = formValues.password;
    this.authService.loginUser(username, passowrd);
    if (this.authService.error != null){
      console.log("not")
    }else {
      console.log("good")
    }
  }


  navigate(component: string) {
    this.authService.navigate(component)
  }
}
