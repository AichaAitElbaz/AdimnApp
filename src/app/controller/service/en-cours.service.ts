import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../../components/dialog/dialog.component";
import {ExpressionBesoin} from "../model/expression-besoin.model";
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user.model";
import {ServiceDemandeur} from "../model/service-demandeur.model";

@Injectable({
  providedIn: 'root'
})
export class EnCoursService {
private _expressionBesoins:Array<ExpressionBesoin>
  private _user:User;
private _service:ServiceDemandeur;
  constructor(private dialog:MatDialog,private http:HttpClient) { }
  public openDialog() {
   this.dialog.open(DialogComponent)
  }
  public getExpressionBesoins() {
    console.log("ven")
//
    const iterator = "en Cours";
    this.http.get<Array<ExpressionBesoin>>("http://localhost:8096/v1/admin/expression-besoin/statut/"+iterator).subscribe(
      data => {
  console.log(data)

  this.expressionBesoins = [...data];
}
    )
  }
  public affecter() {
    console.log(this.expressionBesoins)
    this.user.expressionBesoins = this.expressionBesoins;
    this.user.serviceDemandeur = this.service;
  }
  get expressionBesoins(): Array<ExpressionBesoin> {
  if (this._expressionBesoins==null)this._expressionBesoins=new Array<ExpressionBesoin>();
    return this._expressionBesoins;
  }

  set expressionBesoins(value: Array<ExpressionBesoin>) {
    this._expressionBesoins = value;
  }

  get user(): User {
    if (this._user==null)this._user=new User();
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  get service(): ServiceDemandeur {
    if (this._service==null)this._service=new ServiceDemandeur();
    return this._service;
  }

  set service(value: ServiceDemandeur) {
    this._service = value;
  }

  getExpressionBesoinsArchivee() {
    console.log("ven")
//
    const iterator = "Archivée";
    this.http.get<Array<ExpressionBesoin>>("http://localhost:8096/v1/admin/expression-besoin/statut/"+iterator).subscribe(
      data => {
        console.log(data)

        this.expressionBesoins = [...data];
      }
    )  }
}
