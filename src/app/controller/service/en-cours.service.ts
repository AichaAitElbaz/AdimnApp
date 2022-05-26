import {Injectable} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../../components/dialog/dialog.component";
import {ExpressionBesoin} from "../model/expression-besoin.model";
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user.model";
import {ServiceDemandeur} from "../model/service-demandeur.model";
import {ExpressionBesoinItem} from "../model/expression-besoin-item.model";

@Injectable({
  providedIn: 'root'
})

export class EnCoursService {
  private _expressionBesoinsAcceptees: Array<ExpressionBesoin>;
  private _users2: Array<User>;
  private _service: ServiceDemandeur;
  private _expressionBesoinItems: Array<ExpressionBesoinItem>

  constructor(private dialog: MatDialog, private http: HttpClient) {
  }

  public openDialog() {
    this.dialog.open(DialogComponent)
  }

  public getExpressionBesoinsAcceptees() {
    console.log("ven")
//
    const iterator = "en Cours";
    this.http.get<Array<ExpressionBesoin>>("http://localhost:8096/v1/admin/expression-besoin/statut/" + iterator).subscribe(
      data => {
        console.log(data)

        this.expressionBesoinsAcceptees = [...data];
      }
    )
  }

  public affecter() {
    this.expressionBesoinsAcceptees.forEach(
      e => {
        this.users2.push(e.user);
      }
    )

  }

  public getitems() {
    this.http.get<Array<ExpressionBesoinItem>>("http://localhost:8096/v1/admin/expression-besoin-item/expression-besoin/statut/en%20Cours").subscribe(
      data => {
        this.expressionBesoinItems = [...data];
      }
    )
  }

  get expressionBesoinsAcceptees(): Array<ExpressionBesoin> {
    if (this._expressionBesoinsAcceptees == null) this._expressionBesoinsAcceptees = new Array<ExpressionBesoin>();
    return this._expressionBesoinsAcceptees;
  }

  set expressionBesoinsAcceptees(value: Array<ExpressionBesoin>) {
    this._expressionBesoinsAcceptees = value;
  }


  get users2(): Array<User> {
    if (this._users2 == null) this._users2 = new Array<User>()
    return this._users2;
  }

  set users(value: Array<User>) {
    this._users2 = value;
  }

  get service(): ServiceDemandeur {
    if (this._service == null) this._service = new ServiceDemandeur();
    return this._service;
  }

  set service(value: ServiceDemandeur) {
    this._service = value;
  }


  get expressionBesoinItems(): Array<ExpressionBesoinItem> {
    if (this._expressionBesoinItems == null) this._expressionBesoinItems = new Array<ExpressionBesoinItem>();
    return this._expressionBesoinItems;
  }

  set expressionBesoinItems(value: Array<ExpressionBesoinItem>) {
    this._expressionBesoinItems = value;
  }

  public save(id) {
    id.statut="validée";
    this.http.post("http://localhost:8096/v1/admin/expression-besoin-item/",id).subscribe(
      data=>{
        console.log(data);
      })



  }

  update(id: ExpressionBesoinItem) {
    id.statut="null";
    this.http.post("http://localhost:8096/v1/admin/expression-besoin-item/",id).subscribe(
      data=>{
        console.log(data);
      })
  }
}
