import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ExpressionBesoinItem} from "../model/expression-besoin-item.model";
import {Fournisseur} from "../model/fournisseur.model";
import {TableauBesoin} from "../model/tableau-besoin.model";
import {TableauBesoinItem} from "../model/tableau-besoin-item.model";
import {TableauBesoinItem1} from "../model/tableau-besoin-item1.mpdel";

@Injectable({
  providedIn: 'root'
})
export class TableauBesoinService {

  constructor(private http: HttpClient) {
  }

  private _itemsSelectionne = new Array<ExpressionBesoinItem>();
  private _itemsEnCours = new Array<ExpressionBesoinItem>();
  private _fournisseursSelectionne = new Array<Fournisseur>();
  private _tableauBesoinItem = new TableauBesoinItem1();
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


  get tableauBesoinItem(): TableauBesoinItem1 {
    return this._tableauBesoinItem;
  }

  set tableauBesoinItem(value: TableauBesoinItem1) {
    this._tableauBesoinItem = value;
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

  saveItm(expressionBesoinItem: ExpressionBesoinItem) {
    this.http.post("http://localhost:8096/v1/admin/expression-besoin-item/",expressionBesoinItem).subscribe(
      data=>{

      }
    )
  }

  saveTableauBesoinsItems() {
    console.log("888888")
    this.fournisseursSelectionne.forEach(f => {
      this.tableauBesoinItem.fournisseur = f;
      this.itemsSelectionne.forEach(i => {
        this.tableauBesoinItem.expressionBesoinItem = i;
        this.http.post("http://localhost:8096/v1/admin/tableau-besoin-item/", this.tableauBesoinItem).subscribe(
          data => {
            console.log("aicha");
          }
        );
        //     data => {

        //     }
        //   )
        //   this.tableauBesoinItem = new TableauBesoinItem();
      });

    })
  }

  getEnCoursItems() {
    this.http.get<Array<ExpressionBesoinItem>>("http://localhost:8096/v1/admin/expression-besoin-item/statut/En%20cours").subscribe(
      data => {
        this.itemsEnCours = [...data]
      }
    )
  }

  saveTableauBesoin(expressionBesoinItems: ExpressionBesoinItem[]) {
    this.tableauBesoin.expressionBesoinItems=expressionBesoinItems;
    console.log(this.tableauBesoin)
    this.http.post("http://localhost:8096/v1/admin/tableau-besoin/",this.tableauBesoin).subscribe(
      data=>{
        console.log(this.tableauBesoin);
      }
    )
  }
}
