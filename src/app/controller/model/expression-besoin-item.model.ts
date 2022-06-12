import {ExpressionBesoin} from "./expression-besoin.model";
import {Produit} from "./produit.model";
import {Fournisseur} from "./fournisseur.model";
import {TableauBesoin} from "./tableau-besoin.model";

export class ExpressionBesoinItem {
  public id: number;
  public code: number;
  public pu: number;
  public pt: number;
  public ref: string;
  public libelle: string;
  public quantite: number;
  public date: string;
  public statut: string;
  public refExpr: string;
  public expressionBesoin: ExpressionBesoin;
  public tableauBesoin: TableauBesoin;
  public produit=new Produit();
}
