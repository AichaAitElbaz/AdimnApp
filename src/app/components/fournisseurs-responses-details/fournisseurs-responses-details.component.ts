import { Component, OnInit } from '@angular/core';
import {FournisseurService} from "../../controller/service/fournisseur.service";
import {MatDialog} from "@angular/material/dialog";
import {TableauBesoinService} from "../../controller/service/tableau-besoin.service";
import {CmdService} from "../../controller/service/cmd.service";
import {EnCoursService} from "../../controller/service/en-cours.service";
import {TableauBesoin} from "../../controller/model/tableau-besoin.model";
import {ExpressionBesoinItem} from "../../controller/model/expression-besoin-item.model";
import {TableauBesoinItem} from "../../controller/model/tableau-besoin-item.model";
import {TableaubackComponent} from "../tableauback/tableauback.component";
import {Fournisseur} from "../../controller/model/fournisseur.model";

@Component({
  selector: 'app-fournisseurs-responses-details',
  templateUrl: './fournisseurs-responses-details.component.html',
  styleUrls: ['./fournisseurs-responses-details.component.css']
})
export class FournisseursResponsesDetailsComponent implements OnInit {


  constructor(private fournisseurService: FournisseurService, private DIALOG: MatDialog, private tableauBesoinService: TableauBesoinService, private cmdService: CmdService
    , private enCoursService: EnCoursService) {
  }

  ngOnInit(): void {
    // this.fournisseurService.getTableauBrsoinsEnCours();
    this.fournisseurService.findTabItemRecus();
  }

  get tableauBesoin1(): TableauBesoin {
    return this.fournisseurService.tableauBesoin1;
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

  get tableauBesoinItemss(): TableauBesoinItem[] {
    return this.fournisseurService.tableauBesoinItemss;
  }

  openDialog() {
    this.DIALOG.open(TableaubackComponent, {
      height: '400px',
      width: '600px'
    })
  }

  fonction(event, tableauBesoinItem: TableauBesoinItem) {
    if (event.target.checked == true) {
      this.tableauBesoinService.reponseSelectionnee=tableauBesoinItem;
      this.tableauBesoinService.findItemsByTableauBeosinItemRef(tableauBesoinItem.reference)
    }
  }

  setReponsesSeletcionnees() {
    this.tableauBesoinService.setReponsesSeletcionnees();
  }

  findTableauBesoinItemByTabAndFournisseur(tableauBesoin: TableauBesoin, fournisseur: Fournisseur) {
    this.cmdService.findTableauBesoinItemByTabAndFournisseur(tableauBesoin, fournisseur)
  }

  navigate(component: string) {
    this.enCoursService.navigate(component)
  }

  findTabItemByRef(ref:string){
    this.fournisseurService.findTabItemByRef(ref)
  }
  get tableauBesoinItems(): TableauBesoinItem[] {
    return this.tableauBesoinService.tableauBesoinItems;
  }
}
