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

@Component({
  selector: 'app-en-attente',
  templateUrl: "./en-attente.component.html",
  styleUrls: ['./en-attente.component.css'],
})
export class EnAttenteComponent implements OnInit {

  constructor(private enCoursService:EnCoursService,public dialog: MatDialog, private enAttenteService: EnAttenteService,
              private DIALOG:MatDialog,private servicesService:ServicesService) {
  }

  get expressionBesoins2(): Array<ExpressionBesoin> {

    return this.enAttenteService.expressionBesoins2;
  }

  ngOnInit(): void {
    this.enAttenteService.getExpressionBesoins();

    this.enAttenteService.affecter();
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

  update(expressionBesoin: ExpressionBesoin) {
    this.enAttenteService.update(expressionBesoin);
  }

  updateInUser(expressionBesoin:ExpressionBesoin) {
    this.enAttenteService.updateInUser(expressionBesoin);
  }
  public openDialog() {
    this.DIALOG.open(ExpressionBesoinItemComponent, {
      height: '400px',
      width: '600px'})
  }
  public getExpressionBesoinItems(expressionBesoin:ExpressionBesoin){
    this.servicesService.getExpresssionBesoinItems(expressionBesoin);
  }


}

