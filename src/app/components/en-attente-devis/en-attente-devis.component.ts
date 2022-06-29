import { Component, OnInit } from '@angular/core';
import {ExpressionBesoinItem} from "../../controller/model/expression-besoin-item.model";
import {TableauBesoinService} from "../../controller/service/tableau-besoin.service";
import {TableauBesoinItem} from "../../controller/model/tableau-besoin-item.model";
import {TableauBesoin} from "../../controller/model/tableau-besoin.model";
import {DialogComponent} from "../dialog/dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {AttenteDevisDetailsComponent} from "../attente-devis-details/attente-devis-details.component";
import {AttenteDevisFournisseursComponent} from "../attente-devis-fournisseurs/attente-devis-fournisseurs.component";

@Component({
  selector: 'app-en-attente-devis',
  templateUrl: './en-attente-devis.component.html',
  styleUrls: ['./en-attente-devis.component.css']
})
export class EnAttenteDevisComponent implements OnInit {
  constructor(private DIALOG:MatDialog,private tableauBesoinService:TableauBesoinService) { }

  ngOnInit(): void {
    this.tableauBesoinService.getItemsEnAttenteDeDevis();
  }


  get tableauBesoins(): TableauBesoin[] {
    return this.tableauBesoinService.tableauBesoins;
  }
  findDesignationsByTableauBesoinsRef(tableauBesoin:TableauBesoin){
    this.tableauBesoinService.findDesignationsByTableauBesoinsRef(tableauBesoin);
  }
  findFournisseursByStatutTableauBesoinRef(statut:string,tableauBesoin:TableauBesoin) {
    this.tableauBesoinService.findFournisseursByStatutTableauBesoinRef(statut,tableauBesoin)
  }
  public openDetails() {
    this.DIALOG.open(AttenteDevisDetailsComponent, {
      height: '600px',
      width: '600px'
    })
  }

  public openFournisseurs() {
    this.DIALOG.open(AttenteDevisFournisseursComponent, {
      height: '600px',
      width: '600px'
    })
  }
}
