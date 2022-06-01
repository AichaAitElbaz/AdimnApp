import {Fournisseur} from "./fournisseur.model";
import {ExpressionBesoinItem} from "./expression-besoin-item.model";

export class TableauBesoinItem {
  public reference:string;
  public statut:string;
  public fournisseur:Fournisseur;
  public expressionBesoinItem:ExpressionBesoinItem;
}
