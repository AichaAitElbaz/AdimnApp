import {Chapitre} from "./chapitre.model";

export class Exercice {
  public id: number;
  public reference: string;
  public libelle: string;
  public chapitreList=new Array<Chapitre>();
}
