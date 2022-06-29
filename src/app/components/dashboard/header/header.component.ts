import { Component, OnInit } from '@angular/core';
import {DashboardService} from "../../../controller/service/dashboard.service";
import {TableauBesoinComponent} from "../../tableau-besoin/tableau-besoin.component";
import {MatDialog} from "@angular/material/dialog";
import {SideBareComponent} from "../../side-bare/side-bare.component";
import {FournisseurComponent} from "../../fournisseur/fournisseur.component";
import {ExpressionBesoin} from "../../../controller/model/expression-besoin.model";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../../controller/auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public nbrofExpressionBesoinEnAttente:number;
public ExpressionBesoinEnAttentes:Array<ExpressionBesoin>;
  constructor(private dashboardservice:DashboardService,private DIALOG: MatDialog,private http:HttpClient , private auth: AuthService) { }


  ngOnInit(): void {
    this.dashboardservice.getNumberOfExpressionBesoinEnAttente().subscribe(data => {
      this.nbrofExpressionBesoinEnAttente = data;});

    this.showNotifications();
  }


  showNotifications() {
      this.http.get<Array<ExpressionBesoin>>("http://localhost:8095/centre-project/v1/expression-besoin/statut/"+"En attente").subscribe(
        data=>{
          this.ExpressionBesoinEnAttentes=[...data];
          console.log("show"+data)
        }
      )
  }
  logout() {
    this.auth.logout();
  }
}
