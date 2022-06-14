import { Component, OnInit } from '@angular/core';
import {TableauBesoinItem} from "../../controller/model/tableau-besoin-item.model";
import {CmdService} from "../../controller/service/cmd.service";
import {EnAttenteItemsComponent} from "../en-attente-items/en-attente-items.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-en-attente-livraison',
  templateUrl: './en-attente-livraison.component.html',
  styleUrls: ['./en-attente-livraison.component.css']
})
export class EnAttenteLivraisonComponent implements OnInit {

  constructor(private cmdService:CmdService,private DIALOG:MatDialog) { }

  ngOnInit(): void {
    this.cmdService.getEnAttenteLaivraisonItems();
  }
  get tableauBesoinItemsEnAttenteLaivraison(): TableauBesoinItem[] {
    return this.cmdService.tableauBesoinItemsEnAttenteLaivraison;
  }
  public openDialog() {
    this.DIALOG.open(EnAttenteItemsComponent, {
      height: '400px',
      width: '600px'
    })
  }
  findTableauBesoinItemByRef(ref:string){
    this.cmdService.findTableauBesoinItemByRef(ref);
  }
}
