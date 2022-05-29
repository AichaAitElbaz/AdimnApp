import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Fournisseur} from "../model/fournisseur.model";
import {TypeFournisseur} from "../model/type-fournisseur.mpdel";
import {ExpressionBesoinItem} from "../model/expression-besoin-item.model";
import {ExpressionBesoin} from "../model/expression-besoin.model";
import {EnCoursService} from "./en-cours.service";
import {TableauBesoinItem} from "../model/tableau-besoin-item.mpdel";

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  private _fournisseur: Fournisseur;
  private _fournisseurs: Array<Fournisseur>;
  private _typesfournisseur: Array<TypeFournisseur>;
  private _expressionBesoinsItems: Array<ExpressionBesoinItem>;
  private _expressionBesoinsItemsValidees: Array<ExpressionBesoinItem>;
  private _expressionBesoins: Array<ExpressionBesoin>;
  private _itemsValidee: Array<ExpressionBesoinItem>;
  private _tableauBesoinItem:TableauBesoinItem

  constructor(private http: HttpClient, private enCoursService: EnCoursService) {
  }


  public getTypes() {
    this.http.get<Array<TypeFournisseur>>("http://localhost:8096/v1/admin/type-fournisseur/").subscribe(
      data => {
        this.typesfournisseur = [...data];
        console.log(data)
      }
    )
  }

  public getFournisseursByType(typeFournisseur: TypeFournisseur) {
    console.log(5555)
    this.http.get<Array<Fournisseur>>("http://localhost:8096/v1/admin/fournisseur/type-fournisseur/reference/" + typeFournisseur.reference).subscribe(
      data => {
        this.fournisseurs = [...data];
      }
    )
  }


  get fournisseurs(): Array<Fournisseur> {
    if (this._fournisseurs == null) this._fournisseurs = new Array<Fournisseur>();
    return this._fournisseurs;
  }

  set fournisseurs(value: Array<Fournisseur>) {
    this._fournisseurs = value;
  }

  get fournisseur(): Fournisseur {
    if (this._fournisseur == null) this._fournisseur = new Fournisseur();
    return this._fournisseur;
  }

  set fournisseur(value: Fournisseur) {
    this._fournisseur = value;
  }

  get typesfournisseur(): Array<TypeFournisseur> {
    if (this._typesfournisseur == null) this._typesfournisseur = new Array<TypeFournisseur>();
    return this._typesfournisseur;
  }

  set typesfournisseur(value: Array<TypeFournisseur>) {
    this._typesfournisseur = value;
  }

  addFourniseeur(fournisseur: Fournisseur) {
    this.http.post("http://localhost:8096/v1/admin/fournisseur/", fournisseur).subscribe(
      data => {

      }
    )
  }

  getItems() {
    this.http.get<Array<ExpressionBesoinItem>>("http://localhost:8096/v1/admin/expression-besoin-item/expression-besoin/statut/en%20Cours").subscribe(
      data => {
        this.expressionBesoinsItems = [...data]
        console.log(data)
      }
    )
  }

  public getlistofExpressionBesoinItem() {
    this.enCoursService.expressionBesoinsAcceptees.forEach(e => e.expressionBesoinItems = this.expressionBesoinsItems);
  }

  get expressionBesoinsItems(): Array<ExpressionBesoinItem> {
    if (this._expressionBesoinsItems == null) this._expressionBesoinsItems = new Array<ExpressionBesoinItem>();
    return this._expressionBesoinsItems;
  }

  set expressionBesoinsItems(value: Array<ExpressionBesoinItem>) {
    this._expressionBesoinsItems = value;
  }


  get expressionBesoins(): Array<ExpressionBesoin> {
    if (this._expressionBesoins == null) this._expressionBesoins = new Array<ExpressionBesoin>();
    return this._expressionBesoins;
  }

  set expressionBesoins(value: Array<ExpressionBesoin>) {
    this._expressionBesoins = value;
  }

  getItemsValidees() {
    this.http.get<Array<ExpressionBesoinItem>>("http://localhost:8096/v1/admin/expression-besoin-item/statut/valid%C3%A9e").subscribe(
      data => {
        this.expressionBesoinsItemsValidees = [...data]
        console.log(data)
      }
    )
  }


  get expressionBesoinsItemsValidees(): Array<ExpressionBesoinItem> {
    return this._expressionBesoinsItemsValidees;
  }

  set expressionBesoinsItemsValidees(value: Array<ExpressionBesoinItem>) {
    this._expressionBesoinsItemsValidees = value;
  }

  setItemsEnvoyees() {
    this.expressionBesoinsItemsValidees.forEach(e => {
      e.statut = "envoyeé";
      this.http.post("http://localhost:8096/v1/admin/expression-besoin-item/", e).subscribe(
        data => {
          console.log(99999999999999999999)
        }
      )
    })
  }

  getFournisseurs() {
    this.http.get<Array<Fournisseur>>("http://localhost:8096/v1/admin/fournisseur/").subscribe(
      data => {
        this.fournisseurs = [...data]
      }
    )
  }

  getItemsValidée() {
    this.http.get<Array<ExpressionBesoinItem>>("http://localhost:8096/v1/admin/expression-besoin-item/statut/valid%C3%A9e").subscribe(
      data => {
        this.itemsValidee = [...data];
      }
    )
  }


  get itemsValidee(): Array<ExpressionBesoinItem> {
    if (this._itemsValidee == null) this._itemsValidee = new Array<ExpressionBesoinItem>();
    return this._itemsValidee;
  }

  set itemsValidee(value: Array<ExpressionBesoinItem>) {
    this._itemsValidee = value;
  }

  saveitem(expressionBesoinItem: ExpressionBesoinItem) {
    this.http.post("http://localhost:8096/v1/admin/expression-besoin-item/", expressionBesoinItem).subscribe(
      data => {
        console.log("hello");
        console.log(data);
      })
  }

  saveTableauBesoinItem(itemsValidee: Array<ExpressionBesoinItem>) {
    let i=0;
    itemsValidee.forEach(i => {
      i.fournisseurs.forEach(f => {
        this._tableauBesoinItem.statut="enregistrée";
        this.tableauBesoinItem.reference="t_"+i+1;
        this.tableauBesoinItem.fournisseur = f;
        this.tableauBesoinItem.expressionBesoinItem = i;
        console.log(this.tableauBesoinItem);
        this.http.post("/v1/admin/tableau-besoin-item/",this.tableauBesoinItem);
      })
    })
  }

  get tableauBesoinItem(): TableauBesoinItem {
    if (this._tableauBesoinItem==null)this._tableauBesoinItem=new TableauBesoinItem();
    return this._tableauBesoinItem;
  }

  set tableauBesoinItem(value: TableauBesoinItem) {
    this._tableauBesoinItem = value;
  }
}
