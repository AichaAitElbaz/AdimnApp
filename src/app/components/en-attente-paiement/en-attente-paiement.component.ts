import { Component, OnInit } from '@angular/core';
import {CmdService} from "../../controller/service/cmd.service";
import {Commande} from "../../controller/model/commande.model";
import {
  EnAttenteLaivraisonDetailsComponent
} from "../en-attente-laivraison-details/en-attente-laivraison-details.component";
import {Dialog} from "primeng/dialog";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-en-attente-paiement',
  templateUrl: './en-attente-paiement.component.html',
  styleUrls: ['./en-attente-paiement.component.css']
})
export class EnAttentePaiementComponent implements OnInit {

  constructor(private cmdService:CmdService,private DIALOG:MatDialog) { }


  get cmdsEnAttPaiemenet(): Commande[] {
    return this.cmdService.cmdsEnAttPaiemenet;
  }
  ngOnInit(): void {
    this.cmdService.getCmdsAttPaiement();
  }
  fonction(event, commande: Commande) {
    if (event.target.checked == true) {
      this.cmdService.cmdsPayees.push(commande);
    }
  }
  setCmdLaivree(){
    this.cmdService.setCmdLaivree(this.cmdService.cmdsPayees,"payee");
  }
  findCmdByCode(cmd: Commande) {
    this.cmdService.findCmdByCode(cmd)
  }
  public openDialog() {
    this.DIALOG.open(EnAttenteLaivraisonDetailsComponent, {
      height: '400px',
      width: '600px'
    })
  }
}
