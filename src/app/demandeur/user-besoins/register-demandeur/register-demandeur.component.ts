import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../controller/model/user.model";
import {AuthService} from "../../controller/auth/auth.service";
import {Router} from "@angular/router";
import {SignInDemandeurComponent} from "../sign-in/sign-in.component";
import {MessageService} from "primeng/api";
import {ExpressionBesoinService} from "../../controller/service/expression-besoin.service";
import {ServiceDemandeur} from "../../controller/model/serviceDemandeur.model";

@Component({
  selector: 'app-register-demandeur',
  templateUrl: './register-demandeur.component.html',
  styleUrls: ['./register-demandeur.component.css'],
  providers: [MessageService]
})
export class RegisterDemandeurComponent implements OnInit {

  registerForm = new FormGroup({
    prenom: new FormControl('', Validators.required),
    nom: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    service: new FormControl('', Validators.required),
  })

  constructor(private expressionBesoinService:ExpressionBesoinService,private authService: AuthService, private router: Router) {
  }
  get services(): Array<ServiceDemandeur> {
    return this.expressionBesoinService.services;
  }
  ngOnInit(): void {
    this.expressionBesoinService.findAllservices();

  }


  submit() {
    this.authService.register();
  }

  register() {
    console.log(this.user)
    const formValues = this.registerForm.value;
    const {prenom, nom, username, password,service} = formValues;
    this.user.lastname = nom;
    this.user.serviceDemandeur=service;
    this.user.firstname = prenom;
    this.user.username = username;
    this.user.password = password;
    this.authService.register();
  }

  msgs: any;

  show() {
    this.msgs.push({severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks'});
  }

  // Getters && Setters
  get user(): User {
    return this.authService.user;
  }

  set user(value: User) {
    this.authService.user = value;
  }

  navigate(component: string) {
    this.authService.navigate(component);
  }

}
