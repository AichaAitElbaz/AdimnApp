import {Article} from "./article.model";
import {Ligne} from "./ligne.model";

export class Paragraphe {

  public   id:number ;
  public  reference:string;
  public  code:string;
  public  libellePara:string;
  public  libelleArticle:string;
  public  libelleChapitre:string;
  public  article=new Article();
  public ligneList =new Array<Ligne>() ;
}
