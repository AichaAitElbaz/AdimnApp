import { Component, OnInit } from '@angular/core';
import {FournisseurService} from "../../controller/service/fournisseur.service";
import {TableauBesoinItem} from "../../controller/model/tableau-besoin-item.mpdel";

@Component({
  selector: 'app-tableauback',
  templateUrl: './tableauback.component.html',
  styleUrls: ['./tableauback.component.css']
})
export class TableaubackComponent implements OnInit {

  constructor(private fournisseurService:FournisseurService) { }

  ngOnInit(): void {
  }
  get tableauBesoinItems(): Array<TableauBesoinItem> {
    return this.fournisseurService.tableauBesoinItems;
  }
}
