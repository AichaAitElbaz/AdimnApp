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
  private _expressionBesoins2: Array<ExpressionBesoin>;
  private _expressionBesoinsItems: Array<ExpressionBesoinItem>;
  private _service: ServiceDemandeur;
  private _expressionBesoin: ExpressionBesoin;
  private _user: User;
  private _services: Array<ServiceDemandeur>;
  private _users: Array<User>;
  private _items: Array<ExpressionBesoinItem>
  private _url: "http://localhost:8096/v1/admin/employe/en-attente-expression-services/";
  private _produit: Produit;
private _expr:ExpressionBesoin;
  constructor(private http: HttpClient,private enCoursService:EnCoursService) {
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

  public getExpressionBesoins() {
    this.http.get<Array<ExpressionBesoin>>("http://localhost:8096/v1/admin/employe/en-attente-expression-services").subscribe(
      data => {
        this.expressionBesoins2 = [...data];
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

  get expressionBesoins2(): Array<ExpressionBesoin> {
    if (this._expressionBesoins2 == null) {
      this._expressionBesoins2 = new Array<ExpressionBesoin>();
    }
    return this._expressionBesoins2;
  }

  set expressionBesoins2(value: Array<ExpressionBesoin>) {
    this._expressionBesoins2 = value;
  }

  public findUserByExpressionDeBesoinRef(expressionBesoin: ExpressionBesoin) {
    this.http.get<User>("").subscribe(
      data => {
        this.expressionBesoin.user = data;
      }
    )

  }

  public affecter() {
    this.expressionBesoins2.forEach(
      e => {
        this.users.push(e.user);

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

  public saveExprItems(expressionBesoin: ExpressionBesoin) {
    expressionBesoin.expressionBesoinItems.forEach(e => {
      this.http.post("http://localhost:8096/v1/admin/expression-besoin-item/", e).subscribe(
        data =>
          console.log(e)
      )
    })
  }

  public saveItems(items: Array<ExpressionBesoinItem>) {
    items.forEach(e => {
      this.http.post("http://localhost:8096/v1/admin/expression-besoin-item/", e).subscribe(
        data => {


          console.log("aichaaaaa")
          console.log(e)

        }
      );

    })
  }

  public save(expressionBesoin: ExpressionBesoin) {
    expressionBesoin.statut = "en Cours";
    this.http.post("http://localhost:8096/v1/admin/expression-besoin/", expressionBesoin).subscribe(
      data => {
        console.log(data);
    //     this.http.get<Array<ExpressionBesoinItem>>("http://localhost:8095/centre-project/v1/designation-item/expression-besoin/reference/" + expressionBesoin.reference).subscribe(
    //       data => {   console.log(555555555555);
    //         console.log(data)
    //         data.forEach(d => {
    //           d.expressionBesoin = expressionBesoin;
    //           this.http.post("http://localhost:8096/v1/admin/produit/", d.produit)
    //           // this.ItemsAcceptees = [...data];
    //
    //         })
    //       }
    //     )
      });
    console.log(this.expressionBesoinsAcceptees);

    // this.expressionBesoinsAcceptees.forEach(e => {
    //   console.log(e);
    //   this.expr.reference=e.reference;
    //   this.expr.statut=e.statut;
    //   this.expr.user=e.user;
    //   this.http.post("http://localhost:8096/v1/admin/expression-besoin/isNull/",this.expr);
    //   this.http.get<Array<ExpressionBesoinItem>>("http://localhost:8095/centre-project/v1/designation-item/expression-besoin/reference/" + e.reference).subscribe(
    //     data => {
    //
    //       data.forEach(d => {
    //         console.log(e);
    //         d.expressionBesoin = this.expr;
    //         this.http.post("http://localhost:8096/v1/admin/produit/", this.produit)
    //         d.produit=this.produit;
    //                 // this.ItemsAcceptees = [...data];
    //
    //       })
    //     }
    //   )
    // })

  }


  archiver(expressionBesoin
             :
             ExpressionBesoin
  ) {
    expressionBesoin.statut = "Archivée";
    this.http.post("http://localhost:8096/v1/admin/expression-besoin/", expressionBesoin).subscribe(
      data => {
        console.log(expressionBesoin.statut)
      }
    )

  }

  vider(i
          :
          number
  ) {
    this.expressionBesoins2.splice(i, 1)

  }

  vidertabService(i
                    :
                    number
  ) {

    this.services.splice(i, 1)
  }

  update(expressionBesoin
           :
           ExpressionBesoin
  ) {
    this.http.put("http://localhost:8095/centre-project/v1/expression-besoin/refuser", expressionBesoin).subscribe(
      data => {
        console.log(expressionBesoin.statut)
      }
    )
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

  updateInUser(expressionBesoin
                 :
                 ExpressionBesoin
  ) {
    this.http.put("http://localhost:8095/centre-project/v1/expression-besoin/accepter", expressionBesoin).subscribe(
      data => {

      }
    )
  }

  getItemsByExpressionBesoinRef(expressionBesoin
                                  :
                                  ExpressionBesoin
  ) {
    this.http.get<Array<ExpressionBesoinItem>>("http://localhost:8096/v1/admin/expression-besoin-item/expression-besoin/reference/" + expressionBesoin.reference).subscribe(
      data => {
        this.expressionBesoinsItems = [...data];
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

  traiter(expressionBesoin
            :
            ExpressionBesoin
  ) {
    expressionBesoin.statut = "traitée";
    // this.expressionBesoin = expressionBesoin;
    this.http.post("http://localhost:8096/v1/admin/expression-besoin/", expressionBesoin).subscribe(
      data => {
        console.log(data)
      }
    )
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
}
