import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ExpressionBesoin} from "../model/expression-besoin.model";
import {ServiceDemandeur} from "../model/service-demandeur.model";
import {User} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class EnAttenteService {
  private _expressionBesoins: Array<ExpressionBesoin>;
  private _service: ServiceDemandeur;
  private _expressionBesoin: ExpressionBesoin;
  private _user: User;
  private _services: Array<ServiceDemandeur>;
  private _users: Array<User>

  constructor(private http: HttpClient) {
  }


  public getExpressionBesoins() {
    this.http.get<Array<ExpressionBesoin>>("http://localhost:8095/centre-project/v1/expression-besoin/statut/en%20Attente").subscribe(
      data => {

        console.log(data)

        this.expressionBesoins = [...data]
        // console.log(this.expressionBesoins)
      }
    )
  }


  // public getlistofServies() {
  //   // this.produit.expressionBesoinItems.push(this.clonelistExpressionBesoinItem(this.expressionBesoinItem));
  //   this.service.u = this.cloneProduit(this.produit);
  //   // this.expressionBesoinItem.produit.libelle=this.produit.libelle;
  //   this.expressionBesoin.expressionBesoinItems.push(this.clonelistExpressionBesoinItem(this.expressionBesoinItem));
  // }

  get expressionBesoins(): Array<ExpressionBesoin> {
    if (this._expressionBesoins == null) {
      this._expressionBesoins = new Array<ExpressionBesoin>();
    }
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

  public affecter() {
    this.expressionBesoins.forEach(
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

  public save(expressionBesoin: ExpressionBesoin) {
    expressionBesoin.statut = "en Cours";
    this.http.post("http://localhost:8096/v1/admin/expression-besoin/", expressionBesoin).subscribe(
      data => {

      }
    )

  }

  archiver(expressionBesoin: ExpressionBesoin) {
    expressionBesoin.statut = "Archivée";
    this.http.post("http://localhost:8096/v1/admin/expression-besoin/", expressionBesoin).subscribe(
      data => {
        console.log(expressionBesoin.statut)
      }
    )

  }

  vider(i: number) {
    this.expressionBesoins.splice(i, 1)

  }

  vidertabService(i: number) {

    this.services.splice(i, 1)
  }

  update(expressionBesoin: ExpressionBesoin) {
    this.http.post("http://localhost:8095//centre-project/v1/expression-besoin/update/", expressionBesoin).subscribe(
      data => {
        console.log(expressionBesoin.statut)
      }
    )
  }

  get users(): Array<User> {
    if (this._users == null) this._users = new Array<User>()
    return this._users;
  }

  set users(value: Array<User>) {
    this._users = value;
  }

  getServices() {
    this.http.get<Array<ServiceDemandeur>>("http://localhost:8096/v1/admin/service-demandeur/").subscribe(
      data => {
        this.services = [...data];
      }
    )
  }

  get services(): Array<ServiceDemandeur> {
    if (this._services == null) this._services = new Array<ServiceDemandeur>();
    return this._services;
  }

  set services(value: Array<ServiceDemandeur>) {
    this._services = value;
  }

  deleteService(serviceDemandeur: ServiceDemandeur) {
    this.http.delete("http://localhost:8096/v1/admin/service-demandeur/reference/" + serviceDemandeur.reference).subscribe(
      data => {
        console.log(serviceDemandeur);
      }
    )
  }

  updateService(ref: String, nom: String) {
    this.http.put("http://localhost:8096/v1/admin/service-demandeur/update/", ref + "/" + nom).subscribe(
      data => {
        console.log("service saved");
      }
    )
  }

  saveService(serviceDemandeur: ServiceDemandeur) {
    this.http.post("http://localhost:8096/v1/admin/service-demandeur/", serviceDemandeur).subscribe(
      data => {

      }
    )

  }
}
