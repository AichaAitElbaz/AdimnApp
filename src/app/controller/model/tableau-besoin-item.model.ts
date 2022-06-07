import {Fournisseur} from "./fournisseur.model";
import {TableauBesoin} from "./tableau-besoin.model";

export class TableauBesoinItem {
  public fournisseur:Fournisseur;
  public tableauBesoin=new TableauBesoin();
  public reference:string;
  public tva:number;
  public ttc:number;
  public ht:number;
}
