import {ExpressionBesoinItem} from "./expression-besoin-item.model";

export class Produit {
  public id:number;
  public libelle:string;
  public expressionBesoinItems = new Array<ExpressionBesoinItem>();
}
