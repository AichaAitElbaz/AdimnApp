import { Component, OnInit } from '@angular/core';
import {ExpressionBesoin} from "../../controller/model/expression-besoin.model";
import {ArchiveeService} from "../../controller/service/archivee.service";
import {EnCoursService} from "../../controller/service/en-cours.service";
import {User} from "../../controller/model/user.model";
import {EnAttenteService} from "../../controller/service/en-attente.service";
import {ExpressionBesoinItemComponent} from "../expression-besoin-item/expression-besoin-item.component";
import {MatDialog} from "@angular/material/dialog";
import {ServicesService} from "../../controller/service/services.service";
import {RefuseeItemsComponent} from "../refusee-items/refusee-items.component";
import {EnAttenteItemsComponent} from "../en-attente-items/en-attente-items.component";
import {DialogComponent} from "../dialog/dialog.component";

@Component({
  selector: 'app-archivee',
  templateUrl: './archivee.component.html',
  styleUrls: ['./archivee.component.css']
})
export class ArchiveeComponent implements OnInit {

  constructor(private archiveeService:ArchiveeService,private enAttenteService:EnAttenteService,private DIALOG:MatDialog,private servicesService:ServicesService) { }

  ngOnInit(): void {
    this.archiveeService.getExpressionBesoinsArchivee();
  }
  get expressionBesoinsArchivees(): Array<ExpressionBesoin> {
    return this.archiveeService.expressionBesoinsArchivees;
  }

  get users(): Array<User> {
    return this.archiveeService.users;
  }

  save(expressionBesoin: ExpressionBesoin) {
    this.enAttenteService.save(expressionBesoin);
  }
  public openDialog2() {
    this.DIALOG.open(DialogComponent, {
      height: '400px',
      width: '600px'})
  }
  getItemsByExprRef(expressionBesoin: ExpressionBesoin) {
    this.enAttenteService.getItemsByExpressionBesoinRef(expressionBesoin);
  }

  getItemsByExpressionBesoinRef(expressionBesoin: ExpressionBesoin) {
    this.enAttenteService.getItemsByExpressionBesoinRef(expressionBesoin);
  }

}
