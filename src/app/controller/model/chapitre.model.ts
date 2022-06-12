import {Exercice} from "./exercice.model";
import {ChapitreType} from "./chapitre-type.model";
import {Article} from "./article.model";

export class Chapitre {
  public id: number;
  public reference: string;
  public libelle: string;
  public libelleType: string;
  public libelleExercice: string;
  public exercice = new Exercice();
  public chapitreType = new ChapitreType();
  public articleList = new Array<Article>();
}
