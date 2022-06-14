import { Component, OnInit } from '@angular/core';
import {DashboardService} from "../../controller/service/dashboard.service";
import {User} from "../../controller/model/user.model";

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {
public users:Array<User>;
  constructor(private dashboardservice: DashboardService) { }

  ngOnInit(): void {
    this.dashboardservice.getUsers().subscribe(
      data=>this.users=[...data]
    )
  }

}
