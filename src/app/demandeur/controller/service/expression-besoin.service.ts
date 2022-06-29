import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule, HttpParams} from "@angular/common/http";

import {ExpressionBesoin} from "../model/expression-besoin.model";
import {ifStmt} from "@angular/compiler/src/output/output_ast";
import {ExpressionBesoinItem} from "../model/expressionBesoinItem.model";
import {ServiceDemandeur} from "../model/serviceDemandeur.model";
import {global} from "@angular/compiler/src/util";
import {Produit} from "../model/produit.model";
import {User} from "../model/user.model";
import {NatureDemande} from "../model/natureDemande.model";
import {Observable} from "rxjs";
import {AuthService} from "../auth/auth.service";
import {TokenService} from "./token.service";

@Injectable({
  providedIn: 'root'
})

export class ExpressionBesoinService {
  get natureDemandes(): Array<NatureDemande> {
    if (this._natureDemandes == null) {
      this._natureDemandes = new Array<NatureDemande>();
    }
    return this._natureDemandes;
  }

  private authService: AuthService

  set natureDemandes(value: Array<NatureDemande>) {
    this._natureDemandes = value;
  }


  public returnImp: string = "error";
  private _userName: string;
  private _expressionBesoin: ExpressionBesoin;
  private _expressionBesoins: Array<ExpressionBesoin>;
  private _url: string = "http://localhost:8095/centre-project/v1/designation-item"
  private _loadeduser = new User();

  private _expressionBesoinItem: ExpressionBesoinItem
  private _serviceDemandeur: ServiceDemandeur
  private _expressionBesoinItems: Array<ExpressionBesoinItem>;

  get loadeduser(): User {
    return this._loadeduser;
  }

  set loadeduser(value: User) {
    this._loadeduser = value;
  }

  get userName(): string {
    return this._userName;
  }

  set userName(value: string) {
    this._userName = value;
  }

  private _expressionBesoinItemlist: Array<ExpressionBesoinItem>;
  private _services: Array<ServiceDemandeur>;
  private _produit: Produit;
  private reference: String;
  private _user: User;
  private _natureDemande: NatureDemande;

  private _natureDemandes: Array<NatureDemande>;


  public cloneListExpression(expressionBesoin: ExpressionBesoin) {

    let clone = new ExpressionBesoin();
    clone.id = expressionBesoin.id;
    clone.reference = expressionBesoin.reference;
    clone.dateExb = expressionBesoin.dateExb;
    clone.objet = expressionBesoin.objet;
    clone.statut = expressionBesoin.statut;
    clone.expressionBesoinItems = expressionBesoin.expressionBesoinItems;
    clone.natureDemande = expressionBesoin.natureDemande;
    return clone;

  }

  get natureDemande(): NatureDemande {
    if (this._natureDemande == null) {
      this._natureDemande = new NatureDemande();
    }
    return this._natureDemande;
  }


  set natureDemande(value: NatureDemande) {
    this._natureDemande = value;
  }


  public loadedByUserName() {
    this.userName = this.tokenService.getUsername();
    this.http.get<User>("http://localhost:8096/v1/admin/user/username/" + this.userName).subscribe(
      data => {
        this.loadeduser = data;
        console.log(this.loadeduser)
      }
    )
    this.expressionBesoin.user = this.loadeduser;
  }

  public clonelistExpressionBesoinItem(expressionBesoinItem: ExpressionBesoinItem) {

    let myclone = new ExpressionBesoinItem();
    myclone.id = expressionBesoinItem.id;
    myclone.quantite = expressionBesoinItem.quantite;
    myclone.ref = expressionBesoinItem.ref;
    myclone.date = expressionBesoinItem.date;
    myclone.produit = expressionBesoinItem.produit;
    return myclone;
  }

  //
  public cloneProduit(produit: Produit) {
    let myProduct = new Produit();
    myProduct.libelle = produit.libelle;
    // myProduct.expressionBesoinItems=produit.expressionBesoinItems;
    return myProduct;
  }

  public getlistofExpressionBesoinItem() {

    // this.produit.expressionBesoinItems.push(this.clonelistExpressionBesoinItem(this.expressionBesoinItem));
    this.expressionBesoinItem.produit = this.cloneProduit(this.produit);
    // this.expressionBesoinItem.produit.libelle=this.produit.libelle;
    this.expressionBesoin.expressionBesoinItems.push(this.clonelistExpressionBesoinItem(this.expressionBesoinItem));
    this.expressionBesoinItem = null;
    this.produit.libelle = null;
  }

  public init() {
    // this.user.serviceDemandeur = this.serviceDemandeur;
    this.expressionBesoin.user = this.user;
  }

  get serviceDemandeur(): ServiceDemandeur {
    if (this._serviceDemandeur == null) {
      this._serviceDemandeur = new ServiceDemandeur();
    }
    return this._serviceDemandeur;
  }


  // public findExpressionBesoinItemByExpressionObjet(expressionBesoin: ExpressionBesoin) {
  //
  //   this.http.get<Array<ExpressionBesoinItem>>("http://localhost:8095/centre-project/v1/designation-item/expression-besoin/objet/" + expressionBesoin.objet).subscribe(
  //     data => {   console.log("00000000000");
  //       this.expressionBesoin.expressionBesoinItems = data;
  //     }
  //   )
  //   return this.expressionBesoin.expressionBesoinItems;
  // }


  public getExpressionBesoinItems() {
    this.http.get<Array<ExpressionBesoinItem>>(this._url + "/").subscribe(
      data => {
        this.expressionBesoinItems = data;
      }, error => {
        console.log(error)
      }
    )
  }


  get produit(): Produit {
    if (this._produit == null) {
      this._produit = new Produit();
    }
    return this._produit;
  }

  set produit(value: Produit) {
    this._produit = value;
  }

  get expressionBesoinItem(): ExpressionBesoinItem {
    if (this._expressionBesoinItem == null) {
      this._expressionBesoinItem = new ExpressionBesoinItem();
    }
    return this._expressionBesoinItem;
  }

  set expressionBesoinItem(value: ExpressionBesoinItem) {
    this._expressionBesoinItem = value;
  }

  constructor(private http: HttpClient, private authServicee: AuthService, private tokenService: TokenService) {
  }

  get expressionBesoin(): ExpressionBesoin {
    if (this._expressionBesoin == null) {
      this._expressionBesoin = new ExpressionBesoin();
    }
    return this._expressionBesoin;
  }

  set expressionBesoin(value: ExpressionBesoin) {
    this._expressionBesoin = value;
  }


  public getExpressionBesoins() {

    this.http.get<Array<ExpressionBesoin>>("http://localhost:8096/v1/admin/expression-besoin/").subscribe(
      data => {
        this.expressionBesoins = [...data]
        console.log(data)
      }
    )
  }


  public deletefromlist(index: number) {
    this.expressionBesoin.expressionBesoinItems.splice(index, 1)
  }

  public update(index: number, expressionBesoinItem: ExpressionBesoinItem) {
    this.expressionBesoinItem = this.clonelistExpressionBesoinItem(expressionBesoinItem);
  }


//
  // public saveProduit(){
  //   console.log('produit');
  //   this.http.post("http://localhost:8095/centre-project/v1/admin/produit/",this.produit).subscribe(
  //     data=>{
  //       console.log("saved");
  //     }
  //   )
  // }


  public save() {
    this.loadedByUserName();
    this.expressionBesoin.statut = "En attente ",
      this.http.post("http://localhost:8096/v1/admin/expression-besoin/",
        this.expressionBesoin).subscribe(
        data => {
          if (data > 0) {
            this.expressionBesoins.push(this.cloneListExpression(this.expressionBesoin));
            this.expressionBesoin.natureDemande = null;
            this.expressionBesoin.user = null;
            this.expressionBesoin.reference = null;
            this.expressionBesoin.expressionBesoinItems = null;

            (<HTMLInputElement>document.getElementById("btn")).disabled = false;
            (<HTMLElement>document.getElementById("btn")).hidden = false;
          } else if (data === -1) {
            console.log("-1")
          } else {
            console.log(data);
          }
          error => {
            console.log(error)
          }
        }
      )
  }


  public

  findAllservices() {
    console.log(5);
    this.http.get<Array<ServiceDemandeur>>("http://localhost:8096/v1/admin/service-demandeur/").subscribe(
      data => {
        console.log(data);

        this.services = data;
      }
    )
    return this._services;
  }


  findAllnatures() {
    this.http.get<Array<NatureDemande>>("http://localhost:8096/centre-project/v1/nature-demande/").subscribe(
      data => {
        this.natureDemandes = [...data];
        console.log(222222222222222222222)
      }
    )
    return this._natureDemande;

  }


  get services()
    :
    Array<ServiceDemandeur> {
    if (this._services == null
    ) {
      this._services = new Array<ServiceDemandeur>();
    }
    return this._services;
  }

  set services(value
                 :
                 Array<ServiceDemandeur>
  ) {
    this._services = value;
  }

  get expressionBesoins()
    :
    Array<ExpressionBesoin> {
    if (this._expressionBesoins == null
    ) {
      this._expressionBesoins = new Array<ExpressionBesoin>();
    }
    return this._expressionBesoins;
  }

  set expressionBesoins(value
                          :
                          Array<ExpressionBesoin>
  ) {
    this._expressionBesoins = value;
  }

  // public getReferenceExpressionBesoin() {   console.log(888888);
  //   this.http.get<string>("http://localhost:8095/centre-project/v1/expression-besoin/expressionBesoin/",this.expressionBesoin).subscribe(
  //     data => {
  //
  //       console.log(data);
  //
  //     }
  //   )
  // }

  imprimer() {
// this.getReferenceExpressionBesoin();
    console.log(this.expressionBesoin.objet);
    this.http.get<string>("http://localhost:8095/centre-project/v1/designation-item/imprimer/objet/" + this.expressionBesoin.objet).subscribe(
      data => {
        this.returnImp = data
        console.log(data)
      }, error => {
        console.log(error)
      }
    );
  }

  get expressionBesoinItems()
    :
    Array<ExpressionBesoinItem> {
    if (this._expressionBesoinItems == null
    ) {
      this._expressionBesoinItems = new Array<ExpressionBesoinItem>();
    }
    return this._expressionBesoinItems;
  }

  set expressionBesoinItems(value
                              :
                              Array<ExpressionBesoinItem>
  ) {
    this._expressionBesoinItems = value;
  }


  findExpressionBesoinItemByExpressionRef(expressionBesoin
                                            :
                                            ExpressionBesoin
  ) {
    console.log(expressionBesoin.reference)
    this.http.get<Array<ExpressionBesoinItem>>("http://localhost:8095/centre-project/v1/designation-item/expression-besoin/reference/" + expressionBesoin.reference).subscribe(
      data => {
        console.log(data);
        this.expressionBesoin.expressionBesoinItems = data;
      }
    )
    return this.expressionBesoin.expressionBesoinItems;
  }


  get user()
    :
    User {

    if (this._user == null) this._user = new User();
    return this._user;
  }

  set user(value
             :
             User
  ) {
    this._user = value;
  }
}
