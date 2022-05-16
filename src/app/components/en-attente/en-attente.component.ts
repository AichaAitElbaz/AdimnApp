import {Component, OnInit} from '@angular/core';


import {MatDialog} from "@angular/material/dialog";
import {ExpressionBesoin} from "../../controller/model/expression-besoin.model";
import {EnAttenteService} from "../../controller/service/en-attente.service";
import {ServiceDemandeur} from "../../controller/model/service-demandeur.model";
import {User} from "../../controller/model/user.model";
import {EnCoursService} from "../../controller/service/en-cours.service";

@Component({
  selector: 'app-en-attente',
  templateUrl: "./en-attente.component.html",
  styleUrls: ['./en-attente.component.css'],




})


export class EnAttenteComponent implements OnInit {

  constructor(public dialog: MatDialog, private enAttenteService: EnAttenteService,private enCoursService:EnCoursService ) {
  }

  get expressionBesoins(): Array<ExpressionBesoin> {

    return this.enAttenteService.expressionBesoins;
  }

  ngOnInit(): void {
    this.enAttenteService.getExpressionBesoins();
    // this.enAttenteService.findUserByExpressionDeBesoinRef(this.enAttenteService.expressionBesoin);
    this.enCoursService.affecter();
    // this.user.expressionBesoins.forEach(e => this.enAttenteService.save(e))
  }

  get user(): User {
    return this.enAttenteService.user;
  }

  save(expressionBesoin:ExpressionBesoin) {

    this.enAttenteService.save(expressionBesoin);}

  archiver(expressionBesoin: ExpressionBesoin) {
    this.enAttenteService.archiver(expressionBesoin);
  }

  vider(i:number) {
    this.enAttenteService.vider(i);
  }

  update(expressionBesoin: ExpressionBesoin) {
    this.enAttenteService.update(expressionBesoin);
  }
}