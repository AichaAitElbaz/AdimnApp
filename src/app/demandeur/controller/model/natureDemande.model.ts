import {ExpressionBesoin} from "./expression-besoin.model";

export class NatureDemande {
  public id: number;
  public ref: string;
  public nom: string;
  public expressionBesoins:Array<ExpressionBesoin>
}
