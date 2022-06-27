import {ExpressionBesoinItem} from "./expressionBesoinItem.model";

export class Produit {
  public id:number;
  public libelle:string;
  public expressionBesoinItems = new Array<ExpressionBesoinItem>();
}
