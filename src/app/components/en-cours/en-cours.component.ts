import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";
import {EnCoursService} from "../../controller/service/en-cours.service";
import {ExpressionBesoin} from "../../controller/model/expression-besoin.model";
import {User} from "../../controller/model/user.model";
import { Router } from '@angular/router';
import {FournisseurComponent} from "../fournisseur/fournisseur.component";
import {ServicesService} from "../../controller/service/services.service";
import {ExpressionBesoinItemComponent} from "../expression-besoin-item/expression-besoin-item.component";

@Component({
  selector: 'app-en-cours',
  templateUrl: './en-cours.component.html',
  styleUrls: ['./en-cours.component.css']
})
export class EnCoursComponent implements OnInit {
  constructor(private enCoursService:EnCoursService,private DIALOG:MatDialog,private servicesService:ServicesService) {}

  ngOnInit(): void {
    this.enCoursService.getExpressionBesoinsAcceptees();
    this.enCoursService.affecter();
  }


  get expressionBesoinsAcceptees(): Array<ExpressionBesoin> {
    return this.enCoursService.expressionBesoinsAcceptees;
  }
  public openDialog() {
    this.DIALOG.open(FournisseurComponent, {
      height: '400px',
      width: '600px'})
  }
  get users2(): Array<User> {
    return this.enCoursService.users2;
  }
  public getExpressionBesoinItems(expressionBesoin:ExpressionBesoin){
    this.servicesService.getExpresssionBesoinItems(expressionBesoin);
  }
  public openDialog2() {
    this.DIALOG.open(ExpressionBesoinItemComponent, {
      height: '400px',
      width: '600px'})
  }
}
