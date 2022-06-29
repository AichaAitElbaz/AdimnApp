import {TypeFournisseur} from "./type-fournisseur.mpdel";
import {FournisseurItem} from "./fournisseur-item.mpdel";
import {TableauBesoinItem} from "./tableau-besoin-item.model";

export class Fournisseur {
  public  id: number;
  public referenceFournisseur:string;
  public nomFournisseur:string;
  public statut:string;
  public adresseFournisseur:string;
  public telephoneFournisseur:string;
  public faxFournisseur:string;
  public villeFournisseur:string;
  public emailFournisseur:string;
}
