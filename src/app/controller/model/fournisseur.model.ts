import {TypeFournisseur} from "./type-fournisseur.mpdel";
import {FournisseurItem} from "./fournisseur-item.mpdel";

export class Fournisseur {
  public  id: number;
  public referenceFournisseur:string;
  public nomFournisseur:string;
  public adresseFournisseur:string;
  public telephoneFournisseur:string;
  public faxFournisseur:string;
  public villeFournisseur:string;
  public emailFournisseur:string;
  // public fournisseurItem=new FournisseurItem();
}
