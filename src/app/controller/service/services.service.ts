import {Injectable} from '@angular/core';
import {ExpressionBesoin} from "../model/expression-besoin.model";
import {HttpClient} from "@angular/common/http";
import {ExpressionBesoinItem} from "../model/expression-besoin-item.model";
import {Produit} from "../model/produit.model";
import {ServiceDemandeur} from "../model/service-demandeur.model";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private _expressionBesoinItems: Array<ExpressionBesoinItem>;
  private _expressionBesoin: ExpressionBesoin;
  private _expressionBesoinItem: ExpressionBesoinItem;
  private _produit:Produit;

  constructor(private http: HttpClient) {
  }

  public getExpresssionBesoinItems(expressionBesoin: ExpressionBesoin) {
    this.http.get<Array<ExpressionBesoinItem>>("http://localhost:8095/centre-project/v1/designation-item/expression-besoin/reference/" + expressionBesoin.reference).subscribe(
      data => {
     this.expressionBesoinItems = [...data]
      }
    )
  }


  get expressionBesoinItems(): Array<ExpressionBesoinItem> {
    if (this._expressionBesoinItems == null) this._expressionBesoinItems = new Array<ExpressionBesoinItem>()
    return this._expressionBesoinItems;
  }

  set expressionBesoinItems(value: Array<ExpressionBesoinItem>) {
    this._expressionBesoinItems = value;
  }

  public getlistofExpressionBesoinItem() {
    // this.produit.expressionBesoinItems.push(this.clonelistExpressionBesoinItem(this.expressionBesoinItem));
    this.expressionBesoinItem.produit = this.produit;
    // this.expressionBesoinItem.produit.libelle=this.produit.libelle;
    this.expressionBesoin.expressionBesoinItems.push(this.expressionBesoinItem);
  }

  get expressionBesoin(): ExpressionBesoin {
    if (this.expressionBesoin==null)this.expressionBesoin=new ExpressionBesoin();
    return this._expressionBesoin;
  }

  set expressionBesoin(value: ExpressionBesoin) {
    this._expressionBesoin = value;
  }


  get expressionBesoinItem(): ExpressionBesoinItem {
    if (this._expressionBesoinItem==null)this.expressionBesoinItem=new ExpressionBesoinItem();
    return this._expressionBesoinItem;
  }

  set expressionBesoinItem(value: ExpressionBesoinItem) {
    this._expressionBesoinItem = value;
  }

  get produit(): Produit {
    if (this._produit==null)this._produit=new Produit();
    return this._produit;
  }

  set produit(value: Produit) {
    this._produit = value;
  }

  save(serviceDemandeur: ServiceDemandeur) {
    this.http.post("http://localhost:8096/v1/admin/service-demandeur/",serviceDemandeur).subscribe(
      data=>{

      }
    )
  }
}
