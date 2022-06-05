import {Fournisseur} from "./fournisseur.model";
import {ExpressionBesoinItem} from "./expression-besoin-item.model";

export class TableauBesoinItem {
  public id:number;
  public reference:string;
  public expressionBesoinItem=new ExpressionBesoinItem();
  public fournisseur:Fournisseur
}
