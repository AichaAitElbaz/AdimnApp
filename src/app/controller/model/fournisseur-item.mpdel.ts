import {Fournisseur} from "./fournisseur.model";
import {TypeFournisseur} from "./type-fournisseur.mpdel";

export class FournisseurItem {
  public id:number;
  public reference:string;
  public fournisseur=new Fournisseur();
  public typeFournisseur=new TypeFournisseur();
}
