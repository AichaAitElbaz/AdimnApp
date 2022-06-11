import { Component, OnInit } from '@angular/core';
import {DashboardComponent} from "../dashboard/dashboard.component";
import {DashboardService} from "../../controller/service/dashboard.service";
import {User} from "../../controller/model/user.model";

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {
  public numberOfUsers:number;
  public numberOfExpressionBesoinEnattente:number;

  constructor(private dashboardservice :DashboardService) { }

  ngOnInit(): void {
    this.dashboardservice.getNumberOfUsers().subscribe(data =>{
      this.numberOfUsers=data;
    });
    this.dashboardservice.getNumberOfExpressionBesoinEnAttente().subscribe(data =>{
      this.numberOfExpressionBesoinEnattente=data;
    });
  }

  get user(): User
  {
    return this.dashboardservice.user;
  }
}
