import {ExpressionBesoin} from "./expression-besoin.model";
import {Fournisseur} from "./fournisseur.model";
import {ExpressionBesoinItem} from "./expression-besoin-item.model";
import {TableauBesoinItem} from "./tableau-besoin-item.model";

export class TableauBesoin {
  public reference:string;
  public statut:string;
  public expressionBesoinItems=new Array<ExpressionBesoinItem>();
  public tableauBesoinItems=new Array<TableauBesoinItem>();
  public tva:number;
  public id:number;
  public ttc:number;
}
