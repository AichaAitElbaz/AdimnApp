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

  constructor(private http: HttpClient) {
  }


  public getExpressionBesoins() {
    this.http.get<Array<ExpressionBesoin>>("http://localhost:8095/centre-project/v1/expression-besoin/").subscribe(
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
    console.log(this.expressionBesoins)
    this.user.expressionBesoins = this.expressionBesoins;
    this.user.serviceDemandeur = this.service;
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
    return this._service;
  }

  set service(value: ServiceDemandeur) {
    this._service = value;
  }

  public save(expressionBesoin:ExpressionBesoin) {
    console.log("vant")

    this.http.post("http://localhost:8096/v1/admin/expression-besoin/",expressionBesoin).subscribe(
      data=>{
        console.log("apres")
      }
    )

  }
}
