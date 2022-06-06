import {Fournisseur} from "./fournisseur.model";
import {TableauBesoin} from "./tableau-besoin.model";

export class TableauBesoinItem {
  public fournisseur:Fournisseur;
  public tableauBesoin:TableauBesoin;
  public reference:string;
}
