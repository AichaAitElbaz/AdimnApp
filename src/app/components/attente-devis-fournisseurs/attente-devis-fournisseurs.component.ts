import { Component, OnInit } from '@angular/core';
import {Fournisseur} from "../../controller/model/fournisseur.model";
import {TableauBesoinService} from "../../controller/service/tableau-besoin.service";
import {TableauBesoinItem} from "../../controller/model/tableau-besoin-item.model";

@Component({
  selector: 'app-attente-devis-fournisseurs',
  templateUrl: './attente-devis-fournisseurs.component.html',
  styleUrls: ['./attente-devis-fournisseurs.component.css']
})
export class AttenteDevisFournisseursComponent implements OnInit {

  constructor(private tableauBesoinService:TableauBesoinService) { }

  ngOnInit(): void {
  }
  get tableauBesoinItems(): TableauBesoinItem[] {
    return this.tableauBesoinService.tableauBesoinItems;
  }
}
