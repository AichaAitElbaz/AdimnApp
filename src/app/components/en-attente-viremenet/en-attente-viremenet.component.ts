import { Component, OnInit } from '@angular/core';
import {CmdService} from "../../controller/service/cmd.service";
import {Commande} from "../../controller/model/commande.model";
import {
  EnAttenteLaivraisonDetailsComponent
} from "../en-attente-laivraison-details/en-attente-laivraison-details.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-en-attente-viremenet',
  templateUrl: './en-attente-viremenet.component.html',
  styleUrls: ['./en-attente-viremenet.component.css']
})
export class EnAttenteViremenetComponent implements OnInit {

  constructor(private cmdService:CmdService,private DIALOG:MatDialog) { }

  ngOnInit(): void {
    this.cmdService.getCommandeEnattenteVirement();
  }
  get cmdsEnAttVirement(): Commande[] {
    return this.cmdService.cmdsEnAttVirement;
  }
  fonction(event, commande: Commande) {
    if (event.target.checked == true) {
      this.cmdService.cmdsTerminees.push(commande);
    }
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

  setCmdTerminee() {
    this.cmdService.updateCmdStatue(this.cmdService.cmdsTerminees,"terminee");
  }
}
