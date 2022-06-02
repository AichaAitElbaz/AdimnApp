import {ExpressionBesoin} from "./expression-besoin.model";
import {Fournisseur} from "./fournisseur.model";

export class TableauBesoin {
  public id:number;
  public reference:string;
  public expressionBesoin=new ExpressionBesoin();
  public fournisseur:Fournisseur;
}
