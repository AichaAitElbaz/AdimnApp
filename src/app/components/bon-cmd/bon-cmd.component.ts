import {Component, OnInit} from '@angular/core';
import {TableauBesoinItem} from "../../controller/model/tableau-besoin-item.model";
import {TableauBesoinService} from "../../controller/service/tableau-besoin.service";
import {CmdService} from "../../controller/service/cmd.service";
import {ExpressionBesoinItem} from "../../controller/model/expression-besoin-item.model";
import {Commande} from "../../controller/model/commande.model";
import {Fournisseur} from "../../controller/model/fournisseur.model";
import {FournisseurService} from "../../controller/service/fournisseur.service";

@Component({
  selector: 'app-bon-cmd',
  templateUrl: './bon-cmd.component.html',
  styleUrls: ['./bon-cmd.component.css']
})
export class BonCmdComponent implements OnInit {

  constructor(private cmdService: CmdService, private tableauBesoinService: TableauBesoinService,private fournisseurService:FournisseurService) {
  }

  ngOnInit(): void {
    this.tableauBesoinService.findItemsByTableauBeosinItemRef(this.cmd.tableauBesoinItem.reference);
  }


  get tableauBesoinItem(): TableauBesoinItem {
    return this.tableauBesoinService.tableauBesoinItem;
  }



  get cmd(): Commande {
    return this.cmdService.cmd;
  }
  get foundeditems(): ExpressionBesoinItem[] {
    return this.tableauBesoinService.foundeditems;
  }
  savebnCommande(cmd: Commande) {
    this.cmdService.savebnCommande(cmd);
  }
}
