
import {ExpressionBesoin} from "./expression-besoin.model";
import {ServiceDemandeur} from "./serviceDemandeur.model";

export class User {
  public id:number;
  public reference:string;
  public nom:string;
  public prenom:string;
  public username:string;
  public password:string;
  public serviceDemandeur:string;
  public authorities: any [];
  public expressionBesoins =new Array<ExpressionBesoin>();
}
