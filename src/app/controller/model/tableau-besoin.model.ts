import {ExpressionBesoin} from "./expression-besoin.model";
import {Fournisseur} from "./fournisseur.model";
import {ExpressionBesoinItem} from "./expression-besoin-item.model";
import {TableauBesoinItem} from "./tableau-besoin-item.model";

export class TableauBesoin {
  public id:number;
  public reference:string;
  public statut:string;
  public expressionBesoinItems: Array<ExpressionBesoinItem>;
  public tableauBesoinItems: Array<TableauBesoinItem>;
  public tva:number;
  public ttc:number;
}
