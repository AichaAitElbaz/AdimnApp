import {Component, OnInit} from '@angular/core';
import {TableauBesoinItem} from "../../controller/model/tableau-besoin-item.model";
import {CmdService} from "../../controller/service/cmd.service";
import {EnAttenteItemsComponent} from "../en-attente-items/en-attente-items.component";
import {MatDialog} from "@angular/material/dialog";
import {Commande} from "../../controller/model/commande.model";
import {CmdComponent} from "../cmd/cmd.component";
import {BonCmdComponent} from "../bon-cmd/bon-cmd.component";
import {
  EnAttenteLaivraisonDetailsComponent
} from "../en-attente-laivraison-details/en-attente-laivraison-details.component";

@Component({
  selector: 'app-en-attente-livraison',
  templateUrl: './en-attente-livraison.component.html',
  styleUrls: ['./en-attente-livraison.component.css']
})
export class EnAttenteLivraisonComponent implements OnInit {

  constructor(private cmdService: CmdService, private DIALOG: MatDialog) {
  }

  ngOnInit(): void {
    this.cmdService.getCommandeEnattenteLivraison();
  }

  get cmdsAttLaivr(): Commande[] {
    return this.cmdService.cmdsAttLaivr;
  }

  get tableauBesoinItemsEnAttenteLaivraison(): TableauBesoinItem[] {
    return this.cmdService.tableauBesoinItemsEnAttenteLaivraison;
  }

  public openDialog() {
    this.DIALOG.open(EnAttenteLaivraisonDetailsComponent, {
      height: '400px',
      width: '600px'
    })
  }

  findTableauBesoinItemByRef(ref: string) {
    this.cmdService.findTableauBesoinItemByRef(ref);
  }

  findCmdByCode(cmd: Commande) {
    this.cmdService.findCmdByCode(cmd)
  }

  fonction(event, commande: Commande) {
    if (event.target.checked == true) {
      this.cmdService.cmdsLaivrees.push(commande);
    }
  }
  setCmdLaivree(){
    this.cmdService.setCmdLaivree(this.cmdService.cmdsLaivrees,"laivree");
  }

  sendBnReception() {
    this.cmdService.sendBnReception();
  }
}
