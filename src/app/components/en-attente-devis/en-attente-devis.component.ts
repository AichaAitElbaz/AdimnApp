import { Component, OnInit } from '@angular/core';
import {ExpressionBesoinItem} from "../../controller/model/expression-besoin-item.model";
import {TableauBesoinService} from "../../controller/service/tableau-besoin.service";

@Component({
  selector: 'app-en-attente-devis',
  templateUrl: './en-attente-devis.component.html',
  styleUrls: ['./en-attente-devis.component.css']
})
export class EnAttenteDevisComponent implements OnInit {

  constructor(private tableauBesoinService:TableauBesoinService) { }

  ngOnInit(): void {
    this.tableauBesoinService.getItemsEnAttenteDeDevis();
  }
  get itemsEnvoyee(): ExpressionBesoinItem[] {
    return this.tableauBesoinService.itemsEnvoyee;
  }

}
