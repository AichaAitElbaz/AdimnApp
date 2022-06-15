import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Fournisseur} from "../model/fournisseur.model";
import {TypeFournisseur} from "../model/type-fournisseur.mpdel";
import {ExpressionBesoinItem} from "../model/expression-besoin-item.model";
import {ExpressionBesoin} from "../model/expression-besoin.model";
import {EnCoursService} from "./en-cours.service";
import {TableauBesoinItem1} from "../model/tableau-besoin-item1.mpdel";
import {FournisseurItem} from "../model/fournisseur-item.mpdel";
import {TableauBesoin} from "../model/tableau-besoin.model";
import {TableauBesoinService} from "./tableau-besoin.service";
import {TableauBesoinItem} from "../model/tableau-besoin-item.model";

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  private _fournisseur = new Fournisseur();
  private _fournisseurItem = new FournisseurItem();
  private _fournisseurs: Array<Fournisseur>;
  private _typesfournisseur: Array<TypeFournisseur>;
  private _expressionBesoinsItems: Array<ExpressionBesoinItem>;
  private _expressionBesoinsItemsValidees: Array<ExpressionBesoinItem>;
  private _expressionBesoins: Array<ExpressionBesoin>;
  private _tableauBesoinItems: Array<TableauBesoinItem1>;
  private _fournisseurItems: Array<FournisseurItem>;
  private _expressionBesoin: ExpressionBesoin;
  private _tableauBesoin: TableauBesoin;
  private _tableauBesoins = new Array<TableauBesoin>();
  private _tableauBesoinItemss = new Array<TableauBesoinItem>();
  private _tableauBesoinItem = new TableauBesoinItem();
  private _tableauBesoin1 = new TableauBesoin();


  private emails = new Array<string>();

  constructor(private http: HttpClient, private tableauBesoinService: TableauBesoinService) {
  }

  clonefournisseure(fournisseur: Fournisseur) {
    let myclone = new Fournisseur();
    myclone.id = fournisseur.id;
    myclone.nomFournisseur = fournisseur.nomFournisseur;
    myclone.adresseFournisseur = fournisseur.adresseFournisseur;
    myclone.telephoneFournisseur = fournisseur.telephoneFournisseur;
    myclone.emailFournisseur = fournisseur.emailFournisseur;
    myclone.villeFournisseur = fournisseur.villeFournisseur;
    myclone.faxFournisseur = fournisseur.faxFournisseur;
    return myclone;
  }

  get tableauBesoinItem(): TableauBesoinItem {
    return this._tableauBesoinItem;
  }

  set tableauBesoinItem(value: TableauBesoinItem) {
    this._tableauBesoinItem = value;
  }

  get tableauBesoin1(): TableauBesoin {
    return this._tableauBesoin1;
  }

  set tableauBesoin1(value: TableauBesoin) {
    this._tableauBesoin1 = value;
  }

  get fournisseurItem(): FournisseurItem {
    if (this._fournisseurItem == null) this._fournisseurItem = new FournisseurItem();
    return this._fournisseurItem;
  }

  set fournisseurItem(value: FournisseurItem) {
    this._fournisseurItem = value;
  }

  public getFournisseursByType(t:TypeFournisseur) {
    this.fournisseurItem.typeFournisseur=t;
    this.http.get<Array<FournisseurItem>>("http://localhost:8096/v1/admin/fournisseur-item/type-fournisseur/reference/" + t.reference).subscribe(
      data => {
        this.fournisseurItems = [...data];
      }
    )
  }

  public getTypes() {
    this.http.get<Array<TypeFournisseur>>("http://localhost:8096/v1/admin/type-fournisseur/").subscribe(
      data => {
        this.typesfournisseur = [...data];
        console.log(this.typesfournisseur)
      }
    )
  }


  get tableauBesoins(): Array<TableauBesoin> {
    return this._tableauBesoins;
  }

  set tableauBesoins(value: Array<TableauBesoin>) {
    this._tableauBesoins = value;
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

  get tableauBesoinItemss(): TableauBesoinItem[] {
    return this._tableauBesoinItemss;
  }

  set tableauBesoinItemss(value: TableauBesoinItem[]) {
    this._tableauBesoinItemss = value;
  }

  addFourniseeur(fournisseurItem: FournisseurItem) {
    // fournisseur.fournisseurItem = this.fournisseurItem;
    console.log(fournisseurItem)
    this.http.post("http://localhost:8096/v1/admin/fournisseur-item/", fournisseurItem).subscribe(
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

  // public getlistofExpressionBesoinItem() {
  //   this.enCoursService.expressionBesoinsAcceptees.forEach(e => e.expressionBesoinItems = this.expressionBesoinsItems);
  // }

  get expressionBesoinsItems(): Array<ExpressionBesoinItem> {
    if (this._expressionBesoinsItems == null) this._expressionBesoinsItems = new Array<ExpressionBesoinItem>();
    return this._expressionBesoinsItems;
  }

  set expressionBesoinsItems(value: Array<ExpressionBesoinItem>) {
    this._expressionBesoinsItems = value;
  }

  // public getTraiteesExpr() {
  //   this.http.get<Array<ExpressionBesoin>>("http://localhost:8096/v1/admin/expression-besoin/statut/trait%C3%A9e").subscribe(
  //     data => {
  //       this.expressionBesoins = [...data];
  //       console.log(this.expressionBesoins)
  //     }
  //   )
  // }


  get expressionBesoins(): Array<ExpressionBesoin> {
    return this._expressionBesoins;
  }

  set expressionBesoins(value: Array<ExpressionBesoin>) {
    this._expressionBesoins = value;
  }


  get expressionBesoinsItemsValidees(): Array<ExpressionBesoinItem> {
    return this._expressionBesoinsItemsValidees;
  }

  set expressionBesoinsItemsValidees(value: Array<ExpressionBesoinItem>) {
    this._expressionBesoinsItemsValidees = value;
  }


  getFournisseurs() {
    this.http.get<Array<Fournisseur>>("http://localhost:8096/v1/admin/fournisseur/").subscribe(
      data => {
        this.fournisseurs = [...data]
      }
    )
  }

  findTableauItemByexprCode(expressionBesoinItem: ExpressionBesoinItem) {
    this.http.get<Array<TableauBesoinItem1>>("http://localhost:8096/v1/admin/tableau-besoin-item/code/" + expressionBesoinItem.code).subscribe(
      data => {
        this.tableauBesoinItems = [...data];
      })
  }


  get tableauBesoinItems(): Array<TableauBesoinItem1> {
    if (this._tableauBesoinItems == null) this._tableauBesoinItems = new Array<TableauBesoinItem1>();
    return this._tableauBesoinItems;
  }

  set tableauBesoinItems(value: Array<TableauBesoinItem1>) {
    this._tableauBesoinItems = value;
  }


  get fournisseurItems(): Array<FournisseurItem> {
    if (this._fournisseurItems == null) this._fournisseurItems = new Array<FournisseurItem>();
    return this._fournisseurItems;
  }

  set fournisseurItems(value: Array<FournisseurItem>) {
    this._fournisseurItems = value;
  }


  get expressionBesoin(): ExpressionBesoin {
    if (this._expressionBesoin == null) this._expressionBesoin = new ExpressionBesoin();
    return this._expressionBesoin;
  }

  set expressionBesoin(value: ExpressionBesoin) {
    this._expressionBesoin = value;
  }

  saveExprennvoye(expressionBesoin: ExpressionBesoin) {
    expressionBesoin.statut = 'envoyée';
    console.log(expressionBesoin)
    this.http.post("http://localhost:8096/v1/admin/expression-besoin/", expressionBesoin).subscribe(
      data => {
        console.log(expressionBesoin)
      }
    );

  }

  public getExprTraitee() {
    this.http.get<Array<ExpressionBesoin>>("http://localhost:8096/v1/admin/expression-besoin/statut/trait%C3%A9e").subscribe(
      data => {
        this.expressionBesoins = [...data];
      }
    )
  }

  get tableauBesoin(): TableauBesoin {
    if (this._tableauBesoin == null) this._tableauBesoin = new TableauBesoin();
    return this._tableauBesoin;
  }

  set tableauBesoin(value: TableauBesoin) {
    this._tableauBesoin = value;
  }

  saveTableauBesoin(tableauBesoin: TableauBesoin) {
    console.log(tableauBesoin)
    this.http.post("http://localhost:8096/v1/admin/tableau-besoin/", tableauBesoin).subscribe(
      data => {
        console.log("hello")

      }
    );
  }



  getEmail(fournisseur: Fournisseur) {
    this.emails.push(fournisseur.emailFournisseur);
  }

  findTableauBesoinItemsByTableauBesoinRef(reference: string) {
    this.http.get<Array<TableauBesoinItem>>("http://localhost:8096/v1/admin/tableau-besoin-item/tableau-besoin/" + reference).subscribe(
      data => {
        this.tableauBesoinItemss = [...data]
        console.log('data')
        console.log(data)
      }
    )
  }

  findTabItemEnAttente() {
    this.http.get<Array<TableauBesoinItem>>("http://localhost:8096/v1/admin/tableau-besoin-item/statut/reponse").subscribe(
      data => {
        this.tableauBesoinItemss = [...data]
      }
    )
  }

  findTabItemByRef(ref: string) {
    console.log(ref)
    this.http.get<TableauBesoinItem>("http://localhost:8096/v1/admin/tableau-besoin-item/reference/"+ref).subscribe(
      data => {
        console.log(data)
        this.tableauBesoinItem = data;
      }
    )
  }
}



