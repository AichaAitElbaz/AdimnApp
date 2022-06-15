import {Fournisseur} from "./fournisseur.model";
import {Rubrique} from "./rubrique.model";
import {TableauBesoinItem} from "./tableau-besoin-item.model";

export class Commande {
  public id: number;
  public code: string;
  public statut: string;
  public raisonSociale: string;
  public adresse: string;
  public totalTtc: string;
  public exercice: string;
  public totalHt: number;
  public TVA: number;
  public dateCommande = new Date();
  public etablissement: string;
  public serviceDemandeur: string;
  public tableauBesoinItem = new TableauBesoinItem();
  public rubrique = new Rubrique();
  public nature: string
}
