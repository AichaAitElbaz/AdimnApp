import {Injectable} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../../components/dialog/dialog.component";
import {ExpressionBesoin} from "../model/expression-besoin.model";
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user.model";
import {ServiceDemandeur} from "../model/service-demandeur.model";
import {ExpressionBesoinItem} from "../model/expression-besoin-item.model";
import {Router} from "@angular/router";
import {Produit} from "../model/produit.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class EnCoursService {
  private _expressionBesoinsAcceptees: Array<ExpressionBesoin>;
  private _users2: Array<User>;
  private _service: ServiceDemandeur;
  private _expressionBesoinItems: Array<ExpressionBesoinItem>;
  private _ItemsAcceptees=new Array<ExpressionBesoinItem>();
  private _ItemsSuprimees: Array<ExpressionBesoinItem>;
  private _produit: Produit;
  private _expr: ExpressionBesoin;


  constructor(private dialog: MatDialog, private http: HttpClient, private router: Router) {
  }

  public openDialog() {
    this.dialog.open(DialogComponent)
  }

  get expr(): ExpressionBesoin {
    return this._expr;
  }

  set expr(value: ExpressionBesoin) {
    this._expr = value;
  }

  public getExpressionBesoinsAcceptees() {
    const iterator = "En cours";
    this.http.get<Array<ExpressionBesoin>>("http://localhost:8096/v1/admin/expression-besoin/statut/" + iterator).subscribe(
      data => {
        this.expressionBesoinsAcceptees = [...data];
        console.log(7777777777777777777777777777)
        console.log(this.expressionBesoinsAcceptees)
        // this.expressionBesoinsAcceptees.forEach(e => {
        //   this.expr.reference=e.reference;
        //   this.expr.statut=e.statut;
        //   this.expr.user=e.user;
        //   this.http.post("http://localhost:8096/v1/admin/expression-besoin/isNull/",this.expr);
        //   this.http.get<Array<ExpressionBesoinItem>>("http://localhost:8095/centre-project/v1/designation-item/expression-besoin/reference/" + e.reference).subscribe(
        //     data => {
        //
        //       data.forEach(d => {
        //         console.log(e)
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
    )
  }




  get produit(): Produit {
    return this._produit;
  }

  set produit(value: Produit) {
    this._produit = value;
  }

  get expressionBesoinsAcceptees(): Array<ExpressionBesoin> {
    if (this._expressionBesoinsAcceptees == null) this._expressionBesoinsAcceptees = new Array<ExpressionBesoin>();
    return this._expressionBesoinsAcceptees;
  }

  set expressionBesoinsAcceptees(value: Array<ExpressionBesoin>) {
    this._expressionBesoinsAcceptees = value;
  }


  get users2(): Array<User> {
    if (this._users2 == null) this._users2 = new Array<User>()
    return this._users2;
  }

  set users(value: Array<User>) {
    this._users2 = value;
  }

  get service(): ServiceDemandeur {
    if (this._service == null) this._service = new ServiceDemandeur();
    return this._service;
  }

  set service(value: ServiceDemandeur) {
    this._service = value;
  }


  get expressionBesoinItems(): Array<ExpressionBesoinItem> {
    if (this._expressionBesoinItems == null) this._expressionBesoinItems = new Array<ExpressionBesoinItem>();
    return this._expressionBesoinItems;
  }

  set expressionBesoinItems(value: Array<ExpressionBesoinItem>) {
    this._expressionBesoinItems = value;
  }

  public save(id) {
    id.statut = "validée";
    this.http.post("http://localhost:8096/v1/admin/expression-besoin-item/", id).subscribe(
      data => {
        console.log(data);
      })


  }

  update(id: ExpressionBesoinItem) {
    id.statut = "null";
    this.http.post("http://localhost:8096/v1/admin/expression-besoin-item/", id).subscribe(
      data => {
        console.log(data);
      })
  }


  navigate(component: string) {
    this.router.navigate([component]);
  }




  getItemsAcceptees(statut:string){
   this.http.get<Array<ExpressionBesoinItem>>("http://localhost:8096/v1/admin/expression-besoin-item/statut/"+statut).subscribe(
     data=>{
       this.ItemsAcceptees=[...data];
       console.log(this.ItemsAcceptees)
     }
   )

  }
 getItemsSuprimees(){
   this.http.get<Array<ExpressionBesoinItem>>("http://localhost:8096/v1/admin/expression-besoin-item/statut/suprimee").subscribe(
     data=>{
       this.ItemsSuprimees=[...data]
       console.log(this.ItemsSuprimees)
     }
   )

  }

  get ItemsAcceptees(): Array<ExpressionBesoinItem> {
    return this._ItemsAcceptees;
  }

  set ItemsAcceptees(value: Array<ExpressionBesoinItem>) {
    this._ItemsAcceptees = value;
  }




  get ItemsSuprimees(): Array<ExpressionBesoinItem> {
    return this._ItemsSuprimees;
  }

  set ItemsSuprimees(value: Array<ExpressionBesoinItem>) {
    this._ItemsSuprimees = value;
  }

  updateItem(expressionBesoinItem:ExpressionBesoinItem){
      this.http.post("http://localhost:8096/v1/admin/expression-besoin-item/",expressionBesoinItem).subscribe(
          data=>{
              console.log(121212121212)
          }
      )
  }
}
