import { Component, OnInit } from '@angular/core';
import {ExpressionBesoinItem} from "../../controller/model/expression-besoin-item.model";
import {FournisseurService} from "../../controller/service/fournisseur.service";
import {EnAttenteService} from "../../controller/service/en-attente.service";
import {TableauBesoinItem} from "../../controller/model/tableau-besoin-item.model";
import {CmdService} from "../../controller/service/cmd.service";

@Component({
  selector: 'app-en-attente-items',
  templateUrl: './en-attente-items.component.html',
  styleUrls: ['./en-attente-items.component.css']
})
export class EnAttenteItemsComponent implements OnInit {

  constructor(private cmdService:CmdService,private fournisseurService:FournisseurService,private enAttenteService:EnAttenteService) { }

  ngOnInit(): void {

  }
  get expressionBesoinsItems(): Array<ExpressionBesoinItem> {
    return this.enAttenteService.expressionBesoinsItems;
  }
  get foundedtableauBesoinItem(): TableauBesoinItem {
    return this.cmdService.foundedtableauBesoinItem;
  }
}


