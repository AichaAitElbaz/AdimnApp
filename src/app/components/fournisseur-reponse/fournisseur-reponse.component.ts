import { Component, OnInit } from '@angular/core';
import {ExpressionBesoinItem} from "../../controller/model/expression-besoin-item.model";
import {FournisseurService} from "../../controller/service/fournisseur.service";
import {TableauBesoinItem1} from "../../controller/model/tableau-besoin-item1.mpdel";
import {ExpressionBesoinItemComponent} from "../expression-besoin-item/expression-besoin-item.component";
import {MatDialog} from "@angular/material/dialog";
import {TableaubackComponent} from "../tableauback/tableauback.component";
import {TableauBesoin} from "../../controller/model/tableau-besoin.model";
import {TableauBesoinService} from "../../controller/service/tableau-besoin.service";
import {TableauBesoinItem} from "../../controller/model/tableau-besoin-item.model";

@Component({
  selector: 'app-fournisseur-reponse',
  templateUrl: './fournisseur-reponse.component.html',
  styleUrls: ['./fournisseur-reponse.component.css']
})
export class FournisseurReponseComponent implements OnInit {

  constructor(private fournisseurService:FournisseurService,private DIALOG:MatDialog,private tableauBesoinService:TableauBesoinService) { }

  ngOnInit(): void {
this.fournisseurService.getTableauBrsoinsEnCours();
  }
  get expressionBesoinsItemsValidees(): Array<ExpressionBesoinItem> {
    return this.fournisseurService.expressionBesoinsItemsValidees;
  }

  findTableauItemByexprCode(expressionBesoinItem: ExpressionBesoinItem) {
    this.fournisseurService.findTableauItemByexprCode(expressionBesoinItem);
  }

  get tableauBesoins(): Array<TableauBesoin> {
    return this.fournisseurService.tableauBesoins;
  }

  get tableauBesoinItems(): TableauBesoinItem[] {
    return this.tableauBesoinService.tableauBesoinItems;
  }
  openDialog() {
    this.DIALOG.open(TableaubackComponent, {
      height: '400px',
      width: '600px'})
  }

  findTableauBesoinItemsByTableauBesoinRef(reference:string){
    this.tableauBesoinService.findTableauBesoinItemsByTableauBesoinRef(reference)
  }
}
