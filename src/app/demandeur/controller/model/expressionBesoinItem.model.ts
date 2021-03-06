import {ExpressionBesoin} from "./expression-besoin.model";
import {Produit} from "./produit.model";

export class ExpressionBesoinItem {
  public id: number;
  public ref: string;
  public quantite: number;
  public date: string;
  public expressionBesoin: ExpressionBesoin;
  public produit= new Produit();
}
