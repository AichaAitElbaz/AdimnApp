import { Component, OnInit } from '@angular/core';
import {ArchiveeService} from "../../controller/service/archivee.service";
import {ExpressionBesoin} from "../../controller/model/expression-besoin.model";
import {EnAttenteService} from "../../controller/service/en-attente.service";
import {DialogComponent} from "../dialog/dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-demandes-traitees',
  templateUrl: './demandes-traitees.component.html',
  styleUrls: ['./demandes-traitees.component.css']
})
export class DemandesTraiteesComponent implements OnInit {

  constructor(private archiveeService:ArchiveeService,private enAttenteService:EnAttenteService,private DIALOG:MatDialog) { }

  ngOnInit(): void {
    this.archiveeService.getExpressionBesoinsTraitees();
  }
  get expressionBesoinsTraitees(): Array<ExpressionBesoin> {
    return this.archiveeService.expressionBesoinsTraitees;
  }
  getItemsByExprRef(expressionBesoin: ExpressionBesoin) {
    this.enAttenteService.getItemsByExpressionBesoinRef(expressionBesoin);
  }

  getItemsByExpressionBesoinRef(expressionBesoin: ExpressionBesoin) {
    this.enAttenteService.getItemsByExpressionBesoinRef(expressionBesoin);
  }
  public openDialog2() {
    this.DIALOG.open(DialogComponent, {
      height: '400px',
      width: '600px'})
  }
}
