import {Paragraphe} from "./paragraphe.model";
import {Chapitre} from "./chapitre.model";

export class Article {
 public id:number;
 public reference:string;
 public libelle:string;
 public code:string;
 public libelleChapitre:string;
 public paragrapheList=new Array<Paragraphe>() ;
 public chapitre=new Chapitre() ;
}
