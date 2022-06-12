import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";
import {EnCoursService} from "../../controller/service/en-cours.service";
import {ExpressionBesoin} from "../../controller/model/expression-besoin.model";
import {User} from "../../controller/model/user.model";
import {Router} from '@angular/router';
import {FournisseurComponent} from "../fournisseur/fournisseur.component";
import {ServicesService} from "../../controller/service/services.service";
import {ExpressionBesoinItemComponent} from "../expression-besoin-item/expression-besoin-item.component";
import {EnAttenteService} from "../../controller/service/en-attente.service";
import {ItemEnCoursComponent} from "../item-en-cours/item-en-cours.component";
import {EnCoursItemsComponent} from "../en-cours-items/en-cours-items.component";
import {TypeFournisseurComponent} from "../typeFournisseur/typeFournisseur.component";

@Component({
  selector: 'app-en-cours',
  templateUrl: './en-cours.component.html',
  styleUrls: ['./en-cours.component.css']
})
export class EnCoursComponent implements OnInit {
  constructor(private enCoursService: EnCoursService, private DIALOG: MatDialog, private servicesService: ServicesService, private enAttenteService: EnAttenteService
  ,private router:Router) {
  }

  ngOnInit(): void {
    this.enCoursService.getExpressionBesoinsAcceptees();
    this.enCoursService.affecter();
  }


  get expressionBesoinsAcceptees(): Array<ExpressionBesoin> {
    return this.enCoursService.expressionBesoinsAcceptees;
  }

  get users2(): Array<User> {
    return this.enCoursService.users2;
  }

  public getExpressionBesoinItems(expressionBesoin: ExpressionBesoin) {
    this.servicesService.getExpresssionBesoinItems(expressionBesoin);
  }

  public openDialog2() {
    this.DIALOG.open(EnCoursItemsComponent, {
      height: '400px',
      width: '600px'
    })
  }
  getItemsByExpressionBesoinRef(expressionBesoin: ExpressionBesoin) {
    this.enAttenteService.getItemsByExpressionBesoinRef(expressionBesoin);
  }
  openTypeFournisseur() {
    this.router.navigate(["tf"])
  }

  archiver(expressionBesoin: ExpressionBesoin) {
    this.enAttenteService.archiver(expressionBesoin);
  }

  update(expressionBesoin: ExpressionBesoin) {
    this.enAttenteService.update(expressionBesoin);
  }

  navigate(component: string) {
    this.enCoursService.navigate(component)
  }



}
