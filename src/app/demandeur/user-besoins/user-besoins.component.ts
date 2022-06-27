import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { MatSnackBar } from '@angular/material/snack-bar';
import {User} from "../controller/model/user.model";
import {UserService} from "../controller/service/user.service";
import {NgbNavConfig} from "@ng-bootstrap/ng-bootstrap";



@Component({
  selector: 'app-user-besoins',
  templateUrl: './user-besoins.component.html',
  styleUrls: ['./user-besoins.component.css']
})
export class UserBesoinsComponent implements OnInit {

  constructor(config: NgbNavConfig) {
    // customize default values of navs used by this component tree
    config.destroyOnHide = false;
    config.roles = false;
  }
  ngOnInit() {
  }






}
