import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ExpressionBesoinItem} from "../model/expressionBesoinItem.model";

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  private _url:string="http://localhost:8095/centre-project/v1/designation-item";

  private _expressionBesoinItems:Array<ExpressionBesoinItem>;
  constructor(private http:HttpClient) { }

  public findAllExpressionBesoinItems(){
    console.log(8888)
    this.http.get<Array<ExpressionBesoinItem>>(this._url+"/").subscribe(
      data=>{
        this.expressionBesoinItems=[...data]
      }
    )
  }

  get expressionBesoinItems(): Array<ExpressionBesoinItem> {
    if (this._expressionBesoinItems==null){
      this._expressionBesoinItems=new Array<ExpressionBesoinItem>();
    }
    return this._expressionBesoinItems;
  }

  set expressionBesoinItems(value: Array<ExpressionBesoinItem>) {
    this._expressionBesoinItems = value;
  }
}
