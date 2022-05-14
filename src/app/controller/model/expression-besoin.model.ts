import {User} from "./user.model";
import {ServiceDemandeur} from "./service-demandeur.model";

export class ExpressionBesoin {
  public id: number;
  public reference: string;
  public objet: string;
  public dateExb: string;
  public statut: string;
  public service:ServiceDemandeur;
  public user:User;
}
