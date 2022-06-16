import {Component, OnInit} from '@angular/core';
import {ExpressionBesoinItem} from "../../controller/model/expression-besoin-item.model";
import {FournisseurService} from "../../controller/service/fournisseur.service";
import {TableauBesoinItem1} from "../../controller/model/tableau-besoin-item1.mpdel";
import {ExpressionBesoinItemComponent} from "../expression-besoin-item/expression-besoin-item.component";
import {MatDialog} from "@angular/material/dialog";
import {TableaubackComponent} from "../tableauback/tableauback.component";
import {TableauBesoin} from "../../controller/model/tableau-besoin.model";
import {TableauBesoinService} from "../../controller/service/tableau-besoin.service";
import {TableauBesoinItem} from "../../controller/model/tableau-besoin-item.model";
import {Fournisseur} from "../../controller/model/fournisseur.model";
import {CmdService} from "../../controller/service/cmd.service";
import {EnCoursService} from "../../controller/service/en-cours.service";

@Component({
  selector: 'app-fournisseur-reponse',
  templateUrl: './fournisseur-reponse.component.html',
  styleUrls: ['./fournisseur-reponse.component.css']
})
export class FournisseurReponseComponent implements OnInit {

  constructor(private fournisseurService: FournisseurService, private DIALOG: MatDialog, private tableauBesoinService: TableauBesoinService, private cmdService: CmdService
    , private enCoursService: EnCoursService) {
  }

  ngOnInit(): void {
    // this.fournisseurService.getTableauBrsoinsEnCours();
    this.fournisseurService.findTabItemEnAttente();
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
      this.tableauBesoinService.reponseSelectionnees.push(tableauBesoinItem);
      // this.tableauBesoinService.sendBonCommande(tableauBesoinItem);
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
  findTabItemEnAttente(){
    this.fournisseurService.findTabItemEnAttente();
  }
  findTabItemByRef(ref:string){
    this.fournisseurService.findTabItemByRef(ref)
  }
}
