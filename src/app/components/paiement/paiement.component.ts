import { Component, OnInit } from '@angular/core';
import {DashboardService} from "../../controller/service/dashboard.service";
import {User} from "../../controller/model/user.model";
import {TableauBesoinService} from "../../controller/service/tableau-besoin.service";

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {
public users:Array<User>;
  constructor(private dashboardservice: DashboardService,private tableauBesoinService:TableauBesoinService) { }

  ngOnInit(): void {
    this.dashboardservice.getUsers().subscribe(
      data=>this.users=[...data]
    )


  }

}
