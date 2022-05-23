import {ServiceDemandeur} from "./service-demandeur.model";
import {ExpressionBesoin} from "./expression-besoin.model";

export class User {
  public id:number;
  public ref:string;
  public username:string;
  public serviceDemandeur:string;
  public expressionBesoins =new Array<ExpressionBesoin>();
}
