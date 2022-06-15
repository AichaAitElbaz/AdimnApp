import {Component, OnInit} from '@angular/core';
import {TableauBesoinItem} from "../../controller/model/tableau-besoin-item.model";
import {TableauBesoinService} from "../../controller/service/tableau-besoin.service";
import {CmdService} from "../../controller/service/cmd.service";
import {ExpressionBesoinItem} from "../../controller/model/expression-besoin-item.model";
import {Commande} from "../../controller/model/commande.model";
import {Fournisseur} from "../../controller/model/fournisseur.model";

@Component({
  selector: 'app-bon-cmd',
  templateUrl: './bon-cmd.component.html',
  styleUrls: ['./bon-cmd.component.css']
})
export class BonCmdComponent implements OnInit {

  constructor(private cmdService: CmdService,private tableauBesoinService:TableauBesoinService) {
  }

  ngOnInit(): void {
  }

  get tableauBesoinItem(): TableauBesoinItem {
    return this.cmdService.tableauBesoinItem;
  }

  get cmd(): Commande {
    return this.cmdService.cmd;
  }
  savebnCommande(cmd: Commande){
    this.cmdService.savebnCommande(cmd);
  }
  // sendEmail(fournisseur: Fournisseur) {
  //   this.tableauBesoinService.sendEmail(fournisseur)
  // }
}
