import { Component, OnInit } from '@angular/core';
import {Commande} from "../../controller/model/commande.model";
import {CmdService} from "../../controller/service/cmd.service";
import {FournisseurItem} from "../../controller/model/fournisseur-item.mpdel";
import {ExpressionBesoinItem} from "../../controller/model/expression-besoin-item.model";
import {TableauBesoinService} from "../../controller/service/tableau-besoin.service";

@Component({
  selector: 'app-en-attente-laivraison-details',
  templateUrl: './en-attente-laivraison-details.component.html',
  styleUrls: ['./en-attente-laivraison-details.component.css']
})
export class EnAttenteLaivraisonDetailsComponent implements OnInit {

  constructor(private cmdService:CmdService,private tableauBesoinService:TableauBesoinService) { }

  ngOnInit(): void {
  }

  get foundedcmd(): Commande {
    return this.cmdService.foundedcmd;
  }
  get foundeditems(): ExpressionBesoinItem[] {
    return this.tableauBesoinService.foundeditems;
  }
  }

