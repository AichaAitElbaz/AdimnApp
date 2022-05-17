import {ExpressionBesoin} from "./expression-besoin.model";

export class ServiceDemandeur {
  public id: number;
  public reference: string;
  public  nom:string;
  public expressionBesoins = new Array<ExpressionBesoin>();
}
