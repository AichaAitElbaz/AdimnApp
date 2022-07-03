import { Component, OnInit } from '@angular/core';
import {ExpressionBesoinItem} from "../../controller/model/expression-besoin-item.model";
import {TableauBesoinService} from "../../controller/service/tableau-besoin.service";

@Component({
  selector: 'app-attente-devis-details',
  templateUrl: './attente-devis-details.component.html',
  styleUrls: ['./attente-devis-details.component.css']
})
export class AttenteDevisDetailsComponent implements OnInit {

  constructor(private tableauBesoinService:TableauBesoinService) { }

  ngOnInit(): void {
  }
  get foundeditems(): ExpressionBesoinItem[] {
    return this.tableauBesoinService.foundeditems;
  }
}
