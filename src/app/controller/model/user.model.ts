import {ServiceDemandeur} from "./service-demandeur.model";
import {ExpressionBesoin} from "./expression-besoin.model";

export class User {
  public id: number;
  public reference: string;
  public username: string;
  public password: string;
  public serviceDemandeur: string;
  public expressionBesoins = new Array<ExpressionBesoin>();
  public accountNonExpired: boolean;
  public accountNonLocked: boolean;
  public credentialsNonExpired: boolean;
  public enabled: boolean;
}
