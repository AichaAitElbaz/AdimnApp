import {Paragraphe} from "./paragraphe.model";
import {Rubrique} from "./rubrique.model";

export class Ligne {

  public id:number;
  public  reference:string;
  public  code:string;
  public  libelle:string;
  public  creditPaiement:string;
  public  Rap:string;
  public  Arrieres:string;
  public  libelleFonc:string;
  public  libelleCGNC:string;
  public  libelleArticle:string;
  public  libelleChapitre:string;
  public  libelleParagraphe:string;
  public  codeNaturePrestation:string;
  public  paragraphe=new Paragraphe();
  public rubriqueList=new Array<Rubrique>() ;
}
