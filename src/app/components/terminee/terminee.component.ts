import { Component, OnInit } from '@angular/core';
import {CmdService} from "../../controller/service/cmd.service";
import {MatDialog} from "@angular/material/dialog";
import {Commande} from "../../controller/model/commande.model";
import {
  EnAttenteLaivraisonDetailsComponent
} from "../en-attente-laivraison-details/en-attente-laivraison-details.component";

@Component({
  selector: 'app-terminee',
  templateUrl: './terminee.component.html',
  styleUrls: ['./terminee.component.css']
})
export class TermineeComponent implements OnInit {

  constructor(private cmdService:CmdService,private DIALOG:MatDialog) { }

  ngOnInit(): void {
    this.cmdService.getCmdsTerminees();

  }
  get cmdsTerminees(): Commande[] {
    return this.cmdService.cmdsTerminees;
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
