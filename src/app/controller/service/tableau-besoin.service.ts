import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ExpressionBesoinItem} from "../model/expression-besoin-item.model";
import {Fournisseur} from "../model/fournisseur.model";
import {TableauBesoin} from "../model/tableau-besoin.model";
import {TableauBesoinItem} from "../model/tableau-besoin-item.model";
import {TableauBesoinItem1} from "../model/tableau-besoin-item1.mpdel";
import {ArrayDataSource} from "@angular/cdk/collections";

@Injectable({
  providedIn: 'root'
})
export class TableauBesoinService {
  private _reponseSelectionnee=new TableauBesoinItem();

  constructor(private http: HttpClient) {
  }

  private _itemsSelectionne = new Array<ExpressionBesoinItem>();
  private _itemsEnCours = new Array<ExpressionBesoinItem>();
  private _fournisseursSelectionne = new Array<Fournisseur>();
  private _tableauBesoinItem1 = new TableauBesoinItem1();
  private _tableauBesoinItem = new TableauBesoinItem();
  private _tableauBesoinItems = new Array<TableauBesoinItem>();
  private _tableauBesoin = new TableauBesoin();


  get itemsSelectionne(): Array<ExpressionBesoinItem> {
    return this._itemsSelectionne;
  }

  set itemsSelectionne(value: Array<ExpressionBesoinItem>) {
    this._itemsSelectionne = value;
  }

  get fournisseursSelectionne(): Fournisseur[] {
    return this._fournisseursSelectionne;
  }

  set fournisseursSelectionne(value: Fournisseur[]) {
    this._fournisseursSelectionne = value;
  }


  get tableauBesoinItem1(): TableauBesoinItem1 {
    return this._tableauBesoinItem1;
  }

  set tableauBesoinItem1(value: TableauBesoinItem1) {
    this._tableauBesoinItem1 = value;
  }

  get itemsEnCours(): ExpressionBesoinItem[] {
    return this._itemsEnCours;
  }

  set itemsEnCours(value: ExpressionBesoinItem[]) {
    this._itemsEnCours = value;
  }

  get tableauBesoin(): TableauBesoin {
    return this._tableauBesoin;
  }

  set tableauBesoin(value: TableauBesoin) {
    this._tableauBesoin = value;
  }


  get tableauBesoinItem(): TableauBesoinItem {
    return this._tableauBesoinItem;
  }

  set tableauBesoinItem(value: TableauBesoinItem) {
    this._tableauBesoinItem = value;
  }

  get tableauBesoinItems(): TableauBesoinItem[] {
    return this._tableauBesoinItems;
  }

  set tableauBesoinItems(value: TableauBesoinItem[]) {
    this._tableauBesoinItems = value;
  }


  get reponseSelectionnee(): TableauBesoinItem {
    return this._reponseSelectionnee;
  }

  set reponseSelectionnee(value: TableauBesoinItem) {
    this._reponseSelectionnee = value;
  }

  saveItm(expressionBesoinItem: ExpressionBesoinItem) {
    this.http.post("http://localhost:8096/v1/admin/expression-besoin-item/", expressionBesoinItem).subscribe(
      data => {

      }
    )
  }

  saveTableauBesoinsItems() {
    this.fournisseursSelectionne.forEach(f => {
      this.tableauBesoinItem1.fournisseur = f;
      this.itemsSelectionne.forEach(i => {
        this.tableauBesoinItem1.expressionBesoinItem = i;
        this.http.post("http://localhost:8096/v1/admin/tableau-besoin-item1/", this.tableauBesoinItem1).subscribe(
          data => {
            console.log("aicha");
          }
        );
      });

    })

    // this.fournisseursSelectionne = new Array();
    // this.itemsSelectionne = new Array();
  }

  getEnCoursItems() {
    this.http.get<Array<ExpressionBesoinItem>>("http://localhost:8096/v1/admin/expression-besoin-item/statut/En%20cours").subscribe(
      data => {
        this.itemsEnCours = [...data]
      }
    )
  }

  saveTableauBesoin(expressionBesoinItems: ExpressionBesoinItem[]) {
    this.tableauBesoin.expressionBesoinItems = expressionBesoinItems;
    expressionBesoinItems.forEach(e=>{
    })
    this.tableauBesoin.statut = "en cours"
    console.log(this.tableauBesoin)
    this.http.post("http://localhost:8096/v1/admin/tableau-besoin/", this.tableauBesoin).subscribe(
      data => {
        console.log(this.tableauBesoin);
      }
    )
  }

  getTableauBesoinEnCours() {
    this.http.get<TableauBesoin>("http://localhost:8096/v1/admin/tableau-besoin/statut/{statut}?statut=En%20cours").subscribe(
      data => {
        this.tableauBesoin = data;
        console.log(data)
      }
    )
  }

  saveTableauBesoinItem() {
/*
    this.fournisseursSelectionne.forEach(f => {
      this.tableauBesoinItem.fournisseur = f;
      this.tableauBesoinItem.tableauBesoin = this.tableauBesoin;
      this.http.post("http://localhost:8096/v1/admin/tableau-besoin-item/",this.tableauBesoinItem).subscribe(
        data => {
         this.http.get("http://localhost:8096/v1/admin/EmailSender/"+f.emailFournisseur+"/"+this.tableauBesoin.reference).subscribe(
           data=>{
             console.log("send email effectuee")
          console.log("aaaaaaaaaaaaaa")
          this.http.get("http://localhost:8096/v1/admin/EmailSender/"+f.emailFournisseur+"/"+"T").subscribe(
            data=>{
              console.log("send email")

            }
          )
        }
      )
    })
    this.fournisseursSelectionne=new Array();
    this.itemsSelectionne=new Array();


  } */
  }


  findTableauBesoinItemsByTableauBesoinRef(reference: string) {
    this.http.get<Array<TableauBesoinItem>>("http://localhost:8096/v1/admin/tableau-besoin-item/tableau-besoin/" + reference).subscribe(
      data => {
        this.tableauBesoinItems = [...data]
      }
    )
  }

  getReponses(){
    this.http.get<Array<TableauBesoinItem>>("http://localhost:8096/v1/admin/tableau-besoin-item/statut/reponse").subscribe(
      data=>{

      }
    )
  }
  setReponsesSeletcionnees(){
     this.reponseSelectionnee.statut="validee"
      this.http.post("http://localhost:8096/v1/admin/tableau-besoin-item/",this.reponseSelectionnee).subscribe(
        data=>{
          console.log(this.reponseSelectionnee)
        }
      )
  }
}
