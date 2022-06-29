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
import {AttenteDevisDetailsComponent} from "../attente-devis-details/attente-devis-details.component";
import {AttenteDevisFournisseursComponent} from "../attente-devis-fournisseurs/attente-devis-fournisseurs.component";
import {
  FournisseursResponsesDetailsComponent
} from "../fournisseurs-responses-details/fournisseurs-responses-details.component";

@Component({
  selector: 'app-fournisseur-reponse',
  templateUrl: './fournisseur-reponse.component.html',
  styleUrls: ['./fournisseur-reponse.component.css']
})
export class FournisseurReponseComponent implements OnInit {
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
  findFournisseursByTableauBesoinRef(tableauBesoin:TableauBesoin) {
    this.tableauBesoinService.findFournisseursByStatutTableauBesoinRef("recu",tableauBesoin);
  }
  public openDetails() {
    this.DIALOG.open(AttenteDevisDetailsComponent, {
      height: '600px',
      width: '600px'
    })
  }

  public openFournisseurs(tableauBesoin:TableauBesoin) {
    this.findFournisseursByTableauBesoinRef(tableauBesoin)
    this.DIALOG.open(FournisseursResponsesDetailsComponent, {
      height: '600px',
      width: '600px'
    })
  }

}
