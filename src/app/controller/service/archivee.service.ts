import { Injectable } from '@angular/core';
import {ExpressionBesoin} from "../model/expression-besoin.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ArchiveeService {
private _expressionBesoins:Array<ExpressionBesoin>
  constructor(private http:HttpClient) { }
  public getExpressionBesoins() {
    console.log("ven")
//
    const iterator = "en Cours";
    this.http.get<Array<ExpressionBesoin>>("http://localhost:8096/v1/admin/expression-besoin/statut/"+iterator).subscribe(
      data => {
        console.log(data)

        this._expressionBesoins = [...data];
      }
    )
  }

  get expressionBesoins(): Array<ExpressionBesoin> {
  if (this._expressionBesoins==null)this._expressionBesoins=new Array<ExpressionBesoin>();
    return this._expressionBesoins;
  }

  set expressionBesoins(value: Array<ExpressionBesoin>) {
    this._expressionBesoins = value;
  }
}
