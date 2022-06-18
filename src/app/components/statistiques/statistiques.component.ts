import {Component, OnInit} from '@angular/core';
import {DashboardComponent} from "../dashboard/dashboard.component";
import {DashboardService} from "../../controller/service/dashboard.service";
import {User} from "../../controller/model/user.model";
import {Chart} from "chart.js";
import {AjaxError} from "rxjs/ajax";
import {TabViewModule} from 'primeng/tabview';
import {ColorPicker} from "primeng/colorpicker";


export interface PeriodicElement {
  x: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, x: 'Hydrogen', weight: 1.0079, symbol: 'H'},

];


@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {
  ///
  public users = new Array<User>();

  displayedColumns: string[] = ['id', 'username', 'reference', 'service'];
  dataSource = this.users;

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
  //
  id: number;
  ttc_par_anne: number;
  username: string;
  service: string;

  constructor(private dashboardservice: DashboardService) {

  }

  ngOnInit(): void {
    this.dashboardservice.getttc_par_annee().subscribe(
      data=>this.ttc_par_anne=data
    )
    this.dashboardservice.getUsers().subscribe(
      data => {
        this.users = [...data];
        console.log(this.users)

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
          label: "nombre d'expressions de besoins par moi",
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

            min: 0,

            ticks: {
              // forces step size to be 50 units
              stepSize: 1
          }
        }
        }
      }
    });const myChart3 = new Chart("myChart3", {
      type: 'doughnut',
      data: {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
        }]
      }

    });
    const myChart2 = new Chart("myChart2", {
      type: 'line',
      data: {
        labels: ['janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'out', 'septembre', 'october', 'novembre', 'december'],
        datasets: [{
          label: "les charges de cette annee en DH",
          data: this.list_montant_mois_commande,
          borderColor: 'rgb(54, 162, 235)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {

          y: {

            min: 0,

            ticks: {
              // forces step size to be 50 units
              stepSize: 100
            }
          }
        }
      }
    });
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
}
