import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ExpressionBesoin} from "../../controller/model/expression-besoin.model";
import {EnAttenteService} from "../../controller/service/en-attente.service";
import {ServiceDemandeur} from "../../controller/model/service-demandeur.model";
import {User} from "../../controller/model/user.model";
import {EnCoursService} from "../../controller/service/en-cours.service";
import {FournisseurComponent} from "../fournisseur/fournisseur.component";
import {ServicesService} from "../../controller/service/services.service";
import {ExpressionBesoinItemComponent} from "../expression-besoin-item/expression-besoin-item.component";
import {MatIcon} from "@angular/material/icon";
import {EnAttenteItemsComponent} from "../en-attente-items/en-attente-items.component";
import {EnCoursItemsComponent} from "../en-cours-items/en-cours-items.component";
import {DialogComponent} from "../dialog/dialog.component";

@Component({
  selector: 'app-en-attente',
  templateUrl: "./en-attente.component.html",
  styleUrls: ['./en-attente.component.css'],


})


export class EnAttenteComponent implements OnInit {

  constructor(private enCoursService: EnCoursService, public dialog: MatDialog, private enAttenteService: EnAttenteService,
              private DIALOG: MatDialog, private servicesService: ServicesService) {
  }

  get expressionBesoins(): Array<ExpressionBesoin> {
    return this.enAttenteService.expressionBesoins;
  }

  ngOnInit(): void {
    this.enAttenteService.getUserBesoinsByStatut('en attente conslt');
  }

  get users(): Array<User> {
    return this.enAttenteService.users;
  }

  save(expressionBesoin: ExpressionBesoin) {

    this.enAttenteService.save(expressionBesoin);
  }

  archiver(expressionBesoin: ExpressionBesoin) {
    this.enAttenteService.archiver(expressionBesoin);
  }

  vider(i: number) {
    this.enAttenteService.vider(i);
  }





  public openDialog() {
    this.DIALOG.open(DialogComponent, {
      height: '400px',
      width: '600px'
    })
  }

  public getExpressionBesoinItems(expressionBesoin: ExpressionBesoin) {
    this.servicesService.getExpresssionBesoinItems(expressionBesoin);
  }

  getItemsByExpressionBesoinRef(expressionBesoin: ExpressionBesoin) {
    this.enAttenteService.getItemsByExpressionBesoinRef(expressionBesoin);
  }


  public f() {
    this.enCoursService.getExpressionBesoinsAcceptees();
  }
}
