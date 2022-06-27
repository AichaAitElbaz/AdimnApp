import {formatDate} from "@angular/common";
import {ExpressionBesoinItem} from "./expressionBesoinItem.model";
import {ServiceDemandeur} from "./serviceDemandeur.model";
import {Produit} from "./produit.model";
import {User} from "./user.model";
import {NatureDemande} from "./natureDemande.model";



export class ExpressionBesoin {
  public id: number;
  public reference: string;
  public objet: string;
  public dateExb: string;
  public statut: string;
  public expressionBesoinItems = new Array<ExpressionBesoinItem>();
  // public expressionBesoinItem=new ExpressionBesoinItem();
  //public expressionBesoinItemlist=new Array<ExpressionBesoinItem>();
  // public serviceDemandeur = new ServiceDemandeur();
  public user=new User();
  public natureDemande=new NatureDemande();
}
