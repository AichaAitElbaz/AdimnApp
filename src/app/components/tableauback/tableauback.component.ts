import { Component, OnInit } from '@angular/core';
import {FournisseurService} from "../../controller/service/fournisseur.service";
import {TableauBesoinItem1} from "../../controller/model/tableau-besoin-item1.mpdel";
import {TableauBesoinItem} from "../../controller/model/tableau-besoin-item.model";
import {CmdService} from "../../controller/service/cmd.service";

@Component({
  selector: 'app-tableauback',
  templateUrl: './tableauback.component.html',
  styleUrls: ['./tableauback.component.css']
})
export class TableaubackComponent implements OnInit {

  constructor(private fournisseurService:FournisseurService,private cmdService:CmdService) { }

  ngOnInit(): void {
  }
  get tableauBesoinItemDetail(): TableauBesoinItem {
    return this.cmdService.tableauBesoinItemDetail;
  }
}
