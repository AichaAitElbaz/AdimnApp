import { Injectable } from '@angular/core';
import {ExpressionBesoin} from "../model/expression-besoin.model";
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class ArchiveeService {
private _expressionBesoinsArchivees:Array<ExpressionBesoin>;
private _expressionBesoinsTraitees:Array<ExpressionBesoin>;
private _users:Array<User>;

  constructor(private http:HttpClient) { }


  get expressionBesoinsTraitees(): Array<ExpressionBesoin> {
    return this._expressionBesoinsTraitees;
  }

  set expressionBesoinsTraitees(value: Array<ExpressionBesoin>) {
    this._expressionBesoinsTraitees = value;
  }

  get expressionBesoinsArchivees(): Array<ExpressionBesoin> {
    if (this._expressionBesoinsArchivees==null)this._expressionBesoinsArchivees=new Array<ExpressionBesoin>()
    return this._expressionBesoinsArchivees;
  }

  set expressionBesoinsArchivees(value: Array<ExpressionBesoin>) {
    this._expressionBesoinsArchivees = value;
  }

  getExpressionBesoinsArchivee() {
    const iterator = "Archivée";
    this.http.get<Array<ExpressionBesoin>>("http://localhost:8096/v1/admin/expression-besoin/statut/"+iterator).subscribe(
      data => {
        this.expressionBesoinsArchivees = [...data];
      }
    )  }
  getExpressionBesoinsTraitees() {
    console.log("ven")
    const iterator = "traitee";
    this.http.get<Array<ExpressionBesoin>>("http://localhost:8096/v1/admin/expression-besoin/statut/"+iterator).subscribe(
      data => {
        console.log(data)

        this.expressionBesoinsTraitees = [...data];
      }
    )  }

  public affecter() {
    this.expressionBesoinsArchivees.forEach(
      e => {
        this.users.push(e.user);

      }
    )

  }


  get users(): Array<User> {
    if (this._users==null)this.users=new Array<User>()
    return this._users;
  }

  set users(value: Array<User>) {
    this._users = value;
  }


}
