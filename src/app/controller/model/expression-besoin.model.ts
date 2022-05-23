import {User} from "./user.model";
import {ServiceDemandeur} from "./service-demandeur.model";
import {ExpressionBesoinItem} from "./expression-besoin-item.model";

export class ExpressionBesoin {
  public id: number;
  public reference: string;
  public objet: string;
  public dateExb: string;
  public statut: string;
  public user=new User();
  public expressionBesoinItems = new Array<ExpressionBesoinItem>();

}
