import {Injectable} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DetailsComponent} from "../../user-besoins/details/details.component";
import {ExpressionBesoinItemService} from "./designation-item.service";
import {ExpressionBesoinService} from "./expression-besoin.service";
import {HttpClient} from "@angular/common/http";
import {ExpressionBesoinItem} from "../model/expressionBesoinItem.model";
import {ExpressionBesoin} from "../model/expression-besoin.model";
import {User} from "../model/user.model";
import {coerceBooleanProperty} from "@angular/cdk/coercion";


@Injectable({
  providedIn: 'root'


})
export class HistoriqueService {


  private _url: string = "http://localhost:8095/centre-project/v1/expression-besoin";
  private _expressionBesoinsRefusees: Array<ExpressionBesoin>;
  private _expressionBesoinsAcceptees: Array<ExpressionBesoin>;
  private _expressionBesoinsEnAttente: Array<ExpressionBesoin>;
  private _expressionBesoinsTerminee: Array<ExpressionBesoin>;


  constructor(private http: HttpClient, public dialog: MatDialog, private expressionBesoinService: ExpressionBesoinService) {

  }

  get loadeduser(): User {
    return this.expressionBesoinService.loadeduser;
  }

  public opendetails() {

    this.dialog.open(DetailsComponent, {
      height: '400px',
      width: '600px'
    })

  }


  public getExpressionBesoinsRefusees() {
    this.http.get<Array<ExpressionBesoin>>(this._url + "/statut/Refusee/username/" + this.loadeduser.username).subscribe(

      data => {
        this.expressionBesoinsRefusees = [...data]
        // console.log(data)
      }
    )
  }

  public getExpressionBesoinsAcceptees() {


    this.http.get<Array<ExpressionBesoin>>(this._url + "/statut/acceptee/username/" + this.loadeduser.username).subscribe(


      data => {

        this.expressionBesoinsAcceptees = [...data]
      }
    )
  }

  public getExpressionBesoinsEnAttente() {

    this.http.get<Array<ExpressionBesoin>>( "http://localhost:8096/v1/admin/expression-besoin/historique/en%20attente%20conslt/"+this.loadeduser.username).subscribe(
      data => {
        console.log("data"+data)
        this.expressionBesoinsEnAttente = [...data]
        console.log(this.expressionBesoinsEnAttente)
      }
    )
  }

  public getExpressionBesoinsTerminees() {

    this.http.get<Array<ExpressionBesoin>>(this._url + "/statut/terminee/username/" + this.loadeduser.username).subscribe(

      data => {
        this.expressionBesoinsTerminee = [...data]
      }
    )
  }


  get expressionBesoinsAcceptees(): Array<ExpressionBesoin> {

    if (this._expressionBesoinsAcceptees == null)
      this._expressionBesoinsAcceptees = new Array<ExpressionBesoin>();
    return this._expressionBesoinsAcceptees;
  }

  set expressionBesoinsAcceptees(value: Array<ExpressionBesoin>) {
    this._expressionBesoinsAcceptees = value;
  }

  get expressionBesoinsEnAttente(): Array<ExpressionBesoin> {
    if (this._expressionBesoinsEnAttente == null)
      this._expressionBesoinsEnAttente = new Array<ExpressionBesoin>();
    return this._expressionBesoinsEnAttente;
  }


  set expressionBesoinsEnAttente(value: Array<ExpressionBesoin>) {
    this._expressionBesoinsEnAttente = value;
  }

  get expressionBesoinsRefusees(): Array<ExpressionBesoin> {
    if (this._expressionBesoinsRefusees == null) this._expressionBesoinsRefusees = new Array<ExpressionBesoin>();
    return this._expressionBesoinsRefusees;
  }

  set expressionBesoinsRefusees(value: Array<ExpressionBesoin>) {
    this._expressionBesoinsRefusees = value;
  }

  get expressionBesoinsTerminee(): Array<ExpressionBesoin> {
    if (this._expressionBesoinsTerminee == null) this._expressionBesoinsTerminee = new Array<ExpressionBesoin>();
    return this._expressionBesoinsTerminee;
  }

  set expressionBesoinsTerminee(value: Array<ExpressionBesoin>) {
    this._expressionBesoinsTerminee = value;
  }


  // public getDetails() {
  //   this.http.get<ExpressionBesoinItem>("http://localhost:8094/centre-project/v1designation-item/expression-besoin/reference/"+this.)
  // }
}
