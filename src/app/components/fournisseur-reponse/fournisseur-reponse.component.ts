import { Component, OnInit } from '@angular/core';
import {ExpressionBesoinItem} from "../../controller/model/expression-besoin-item.model";
import {FournisseurService} from "../../controller/service/fournisseur.service";
import {TableauBesoinItem} from "../../controller/model/tableau-besoin-item.mpdel";
import {ExpressionBesoinItemComponent} from "../expression-besoin-item/expression-besoin-item.component";
import {MatDialog} from "@angular/material/dialog";
import {TableaubackComponent} from "../tableauback/tableauback.component";

@Component({
  selector: 'app-fournisseur-reponse',
  templateUrl: './fournisseur-reponse.component.html',
  styleUrls: ['./fournisseur-reponse.component.css']
})
export class FournisseurReponseComponent implements OnInit {

  constructor(private fournisseurService:FournisseurService,private DIALOG:MatDialog) { }

  ngOnInit(): void {
    this.fournisseurService.getItemsValidees();

  }
  get expressionBesoinsItemsValidees(): Array<ExpressionBesoinItem> {
    return this.fournisseurService.expressionBesoinsItemsValidees;
  }

  findTableauItemByexprCode(expressionBesoinItem: ExpressionBesoinItem) {
    this.fournisseurService.findTableauItemByexprCode(expressionBesoinItem);
  }



  openDialog() {
    this.DIALOG.open(TableaubackComponent, {
      height: '400px',
      width: '600px'})
  }
}
