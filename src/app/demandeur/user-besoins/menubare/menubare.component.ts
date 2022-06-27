import { Component, OnInit } from '@angular/core';
import {NgbNavConfig} from '@ng-bootstrap/ng-bootstrap';
import {AuthService} from "../../controller/auth/auth.service";


@Component({
  selector: 'app-menubare',
  templateUrl: './menubare.component.html',
  styleUrls: ['./menubare.component.css'],
  providers: [NgbNavConfig]
})
export class MenubareComponent implements OnInit {

  constructor(private auth: AuthService) {
  }

  ngOnInit(): void {
  }

  logout() {
    this.auth.logout();
  }
}


