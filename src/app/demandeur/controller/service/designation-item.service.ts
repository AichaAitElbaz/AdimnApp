import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ExpressionBesoinItem} from "../model/expressionBesoinItem.model";
import {ExpressionBesoin} from "../model/expression-besoin.model";
import {ExpressionBesoinService} from "./expression-besoin.service";
import {Produit} from "../model/produit.model";

@Injectable({
  providedIn: 'root'
})
export class ExpressionBesoinItemService {
private _products:Array<Produit>=[];
private _produit:Produit;
  // private _expressionBesoinsRefusees: Array<ExpressionBesoin>;
  // private _url:string="http://localhost:8095/centre-project/v1/expression-besoin";
  //
  // public getExpressionBesoinsRefusees() {
  //
  //   this.http.get<Array<ExpressionBesoin>>(this._url+"/statut/Refusee/username/"+"elidrissi").subscribe(
  //     data => {
  //       this.expressionBesoinsRefusees = [...data]
  //       console.log(data)
  //     }
  //   )
  // }
  get produit(): Produit {
    if (this._produit==null){this._produit=new Produit();}
    return this._produit;
  }

  set produit(value: Produit) {
    this._produit = value;
  }

  private _expressionBesoinItem:ExpressionBesoinItem;

  get expressionBesoinItem(): ExpressionBesoinItem {
    return this._expressionBesoinItem;
  }

  set expressionBesoinItem(value: ExpressionBesoinItem) {
    this._expressionBesoinItem = value;
  }



  constructor(private http:HttpClient) { }


  get products(): Array<Produit> {
  if (this._products==null){
    this.products=new Array<Produit>();
  }
    return this._products;
  }

  set products(value: Array<Produit>) {
    this._products = value;
  }


  // get expressionBesoinsRefusees(): Array<ExpressionBesoin> {
  //   if (this._expressionBesoinsRefusees==null)this._expressionBesoinsRefusees=new Array<ExpressionBesoin>();
  //   return this._expressionBesoinsRefusees;
  // }
  //
  // set expressionBesoinsRefusees(value: Array<ExpressionBesoin>) {
  //   this._expressionBesoinsRefusees = value;
  // }
}
