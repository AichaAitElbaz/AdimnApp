import {Component, OnInit} from '@angular/core';
import {DashboardComponent} from "../dashboard/dashboard.component";
import {DashboardService} from "../../controller/service/dashboard.service";
import {User} from "../../controller/model/user.model";
import {Chart} from "chart.js";
import {AjaxError} from "rxjs/ajax";
import {TabViewModule} from 'primeng/tabview';





@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {
  ///
  public users = new Array<User>();



  ///
  public numberOfUsers: number;
  public numberOfExpressionBesoinEnattente: number;
  public numberOfCommande: number;
  public number: number;
  public list_montant_mois = new Array();
  public list_montant_mois_commande = new Array();
  public listMonth: [];
  public listMonthcommande: [];
  public graphmois: any;
  public graphmoiscommande: any;
  public ttc_par_annee:number;
  //
  id: number;
  username: string;
  service: string;

  constructor(private dashboardservice: DashboardService) {

  }

  ngOnInit(): void {
    this.dashboardservice.get_ttc_par_annee().subscribe(
      data=>this.ttc_par_annee=data
    )
    this.dashboardservice.getUsers().subscribe(
      data => {
        this.users = [...data];

      }
    )

    this.shekmonth();
    this.graph_commande_budjet();
    this.dashboardservice.getNumberOfUsers().subscribe(data => {
      this.numberOfUsers = data;
    });
    this.dashboardservice.getNumberOfExpressionBesoinEnAttente().subscribe(data => {
      this.numberOfExpressionBesoinEnattente = data;
    });
    this.dashboardservice.getnbrOfCommande().subscribe(data => {
      this.numberOfCommande = data;
    });


    /////////
    const myChart = new Chart("myChart", {
      type: 'bar',
      data: {
        labels: ['janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'out', 'septembre', 'october', 'novembre', 'december'],
        datasets: [{
          label: "nombre d'expression  e besoins par moi",
          data: this.list_montant_mois,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    const myChart2 = new Chart("myChart2", {
      type: 'line',
      data: {
        labels: ['janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'out', 'septembre', 'october', 'novembre', 'december'],
        datasets: [{
          label: "nombre d'expression  e besoins par moi",
          data: this.list_montant_mois_commande,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    ////////

    ////
  }

  search() {
    if (this.username == "") {
      this.ngOnInit();
    } else {
      this.users = this.users.filter(
        res => {
          return res.username.toLocaleLowerCase().match(this.username.toLocaleLowerCase())
        }
      )
    }
  }

  get user(): User {
    return this.dashboardservice.user;
  }


  public shekmonth() {

    this.dashboardservice.get_statistic_graph_mois("JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER").subscribe((Liste_montants_mois_string) => {

      Liste_montants_mois_string.forEach(elem => {
        if (elem != null) {
          this.number = +elem;
          this.list_montant_mois.push(this.number);
        } else {
          this.number = 0;
          this.list_montant_mois.push(this.number);
        }
      })
    })


  }
  public graph_commande_budjet() {

    this.dashboardservice.get_statistic_graph_commande_budjet("JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER").subscribe((Liste_montants_mois_string) => {

      Liste_montants_mois_string.forEach(elem => {
        if (elem != null) {
          this.number = +elem;
          this.list_montant_mois_commande.push(this.number);
        } else {
          this.number = 0;
          this.list_montant_mois_commande.push(this.number);
        }
      })
    })

  }

///////////////////////


}
