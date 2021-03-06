import { Component, OnInit } from '@angular/core';
import {DashboardService} from "../../controller/service/dashboard.service";
import {User} from "../../controller/model/user.model";
import {TableauBesoinService} from "../../controller/service/tableau-besoin.service";
import {Commande} from "../../controller/model/commande.model";
import {CmdService} from "../../controller/service/cmd.service";

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {
public users:Array<User>;
  constructor(private dashboardservice: DashboardService,private tableauBesoinService:TableauBesoinService,private cmdService:CmdService) { }

  ngOnInit(): void {
    // this.dashboardservice.getUsers().subscribe(
    //   data=>this.users=[...data]
    // )

this.cmdService.getCmdsAttPaiement();
  }
  get cmdsAttLaivr(): Commande[] {
    return this.cmdService.cmdsEnAttPaiemenet;
  }
}
