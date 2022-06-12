import {Ligne} from "./ligne.model";

export class Rubrique {
  public id:number;
  public  reference:string;
  public  libelle:string;
  public  code:string;
  public  codeLigne:string;
  public  codeParagraphe:string;
  public  codeArticle:string;
  public  libelleChapitre:string;
  public  ligne=new Ligne();

}
