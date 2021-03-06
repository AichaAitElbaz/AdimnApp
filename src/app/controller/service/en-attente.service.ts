import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ExpressionBesoin} from "../model/expression-besoin.model";
import {ServiceDemandeur} from "../model/service-demandeur.model";
import {User} from "../model/user.model";
import {ExpressionBesoinItem} from "../model/expression-besoin-item.model";
import {Observable} from "rxjs";
import {error} from "@angular/compiler/src/util";
import {Produit} from "../model/produit.model";
import {EnCoursService} from "./en-cours.service";

@Injectable({
  providedIn: 'root'
})
export class EnAttenteService {
  private _expressionBesoins: Array<ExpressionBesoin>;
  private _expressionBesoinsItems: Array<ExpressionBesoinItem>;
  private _service: ServiceDemandeur;
  private _expressionBesoin: ExpressionBesoin;
  private _user: User;
  private _services: Array<ServiceDemandeur>;
  private _users: Array<User>;
  private _items: Array<ExpressionBesoinItem>
  private _url: "http://localhost:8096/v1/admin/employe/en-attente-expression-services/";
  private _produit: Produit;
  private _expr: ExpressionBesoin;

  constructor(private http: HttpClient, private enCoursService: EnCoursService) {
  }

  get expr(): ExpressionBesoin {
    return this._expr;
  }

  set expr(value: ExpressionBesoin) {
    this._expr = value;
  }

  get expressionBesoinsAcceptees(): Array<ExpressionBesoin> {
    return this.enCoursService.expressionBesoinsAcceptees;
  }

  get produit(): Produit {
    return this._produit;
  }

  set produit(value: Produit) {
    this._produit = value;
  }

  public getUserBesoinsByStatut(statut:string) {
    this.http.get<Array<ExpressionBesoin>>("http://localhost:8096/v1/admin/expression-besoin/statut/"+statut).subscribe(
      data => {
        this.expressionBesoins = [...data];
      }
    )
  }


  // public getlistofServies() {
  //   // this.produit.expressionBesoinItems.push(this.clonelistExpressionBesoinItem(this.expressionBesoinItem));
  //   this.service.u = this.cloneProduit(this.produit);
  //   // this.expressionBesoinItem.produit.libelle=this.produit.libelle;
  //   this.expressionBesoin.expressionBesoinItems.push(this.clonelistExpressionBesoinItem(this.expressionBesoinItem));
  // }

  get url(): "http://localhost:8096/v1/admin/employe/en-attente-expression-services/" {
    return this._url;
  }

  set url(value: "http://localhost:8096/v1/admin/employe/en-attente-expression-services/") {
    this._url = value;
  }


  get expressionBesoins(): Array<ExpressionBesoin> {
    return this._expressionBesoins;
  }

  set expressionBesoins(value: Array<ExpressionBesoin>) {
    this._expressionBesoins = value;
  }

  public findUserByExpressionDeBesoinRef(expressionBesoin: ExpressionBesoin) {
    this.http.get<User>("").subscribe(
      data => {
        this.expressionBesoin.user = data;
      }
    )

  }


  get expressionBesoin(): ExpressionBesoin {
    return this._expressionBesoin;
  }

  set expressionBesoin(value: ExpressionBesoin) {
    this._expressionBesoin = value;
  }


  get user(): User {
    if (this._user == null) {
      this._user = new User()
    }
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  get service(): ServiceDemandeur {
    if (this._service == null) this._service = new ServiceDemandeur();
    return this._service;
  }

  set service(value: ServiceDemandeur) {
    this._service = value;
  }


  public save(expressionBesoin: ExpressionBesoin) {
    this.http.put("http://localhost:8096/v1/admin/expression-besoin/accepter", expressionBesoin).subscribe(
      data => {
        console.log(expressionBesoin);
      }, error => {
        console.log(error)
      });


  }

  setExprTraitee(expressionBesoin:ExpressionBesoin) {
    expressionBesoin.statut = "traitee";
    this.http.post("http://localhost:8096/v1/admin/expression-besoin/", expressionBesoin).subscribe(
      data => {
        console.log(expressionBesoin.statut)
      }
    )
  }

  archiver(expressionBesoin:ExpressionBesoin
  ) {
    expressionBesoin.statut = "Archiv??e";
    this.http.put("http://localhost:8096/v1/admin/expression-besoin/refuser", expressionBesoin).subscribe(
      data => {
        console.log(expressionBesoin)
      }
    )

  }

  vider(i
          :
          number
  ) {
    this.expressionBesoins.splice(i, 1)

  }

  vidertabService(i
                    :
                    number
  ) {

    this.services.splice(i, 1)
  }



  get users()
    :
    Array<User> {
    if (this._users == null
    )
      this._users = new Array<User>()
    return this._users;
  }

  set users(value
              :
              Array<User>
  ) {
    this._users = value;
  }

  getServices() {
    this.http.get<Array<ServiceDemandeur>>("http://localhost:8096/v1/admin/service-demandeur/").subscribe(
      data => {
        this.services = [...data];
      }
    )
  }

  get services()
    :
    Array<ServiceDemandeur> {
    if (this._services == null
    )
      this._services = new Array<ServiceDemandeur>();
    return this._services;
  }

  set services(value
                 :
                 Array<ServiceDemandeur>
  ) {
    this._services = value;
  }

  deleteService(serviceDemandeur
                  :
                  ServiceDemandeur
  ) {
    this.http.delete("http://localhost:8096/v1/admin/service-demandeur/reference/" + serviceDemandeur.reference).subscribe(
      data => {
        console.log(serviceDemandeur);
      }
    )
  }

  updateService(serviceDemandeur
                  :
                  ServiceDemandeur
  ) {
    this.http.put("http://localhost:8096/v1/admin/service-demandeur/update/" + serviceDemandeur.nom, serviceDemandeur).subscribe(
      data => {
        console.log("service saved");
      }
    )
  }

  saveService(serviceDemandeur
                :
                ServiceDemandeur
  ) {
    serviceDemandeur.reference = "s5";
    this.http.post("http://localhost:8096/v1/admin/service-demandeur/", serviceDemandeur).subscribe(
      data => {
      }
    )

  }



  getItemsByExpressionBesoinRef(expressionBesoin: ExpressionBesoin) {
    this.http.get<Array<ExpressionBesoinItem>>("http://localhost:8096/v1/admin/expression-besoin-item/expression-besoin/reference/" + expressionBesoin.reference).subscribe(
      data => {
        this.expressionBesoinsItems = [...data];
        this.expressionBesoinsItems.forEach(e=>{
          e.expressionBesoin=expressionBesoin;
        })
      }
    )
  }


  //
  // getItemsByExprStatut() {
  //   this.http.get<Array<ExpressionBesoinItem>>("http://localhost:8095/centre-project/v1/designation-item/expression-besoin/statut/Accept%C3%A9e").subscribe(
  //     data => {
  //       this.items = [...data];
  //       console.log(data);
  //       console.log(this.items);
  //       this.saveItems(this.items);
  //
  //     }
  //   )
  // }

  get expressionBesoinsItems()
    :
    Array<ExpressionBesoinItem> {
    if (this._expressionBesoinsItems == null
    )
      this._expressionBesoinsItems = new Array<ExpressionBesoinItem>();
    return this._expressionBesoinsItems;
  }

  set expressionBesoinsItems(value
                               :
                               Array<ExpressionBesoinItem>
  ) {
    this._expressionBesoinsItems = value;
  }


  get items()
    :
    Array<ExpressionBesoinItem> {
    return this._items;
  }

  set items(value
              :
              Array<ExpressionBesoinItem>
  ) {
    this._items = value;
  }

  setItemEnCours(expressionBesoinItem: ExpressionBesoinItem, statut: string) {
    expressionBesoinItem.statut = statut;
    this.http.post("http://localhost:8096/v1/admin/expression-besoin-item/", expressionBesoinItem).subscribe(
      data => {
        console.log(data)
      }
    )
  }
}
