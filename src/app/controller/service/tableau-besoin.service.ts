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
  private _reponseSelectionnees = new Array<TableauBesoinItem>();

  constructor(private http: HttpClient) {
  }

  private _itemsSelectionne = new Array<ExpressionBesoinItem>();
  private _itemsEnvoyee = new Array<ExpressionBesoinItem>();
  private _itemsEnCours = new Array<ExpressionBesoinItem>();
  private _fournisseursSelectionne = new Array<Fournisseur>();
  private _tableauBesoinItem1 = new TableauBesoinItem1();
  private _tableauBesoinItem = new TableauBesoinItem();
  private _tableauBesoinItems = new Array<TableauBesoinItem>();
  private _tableauBesoin = new TableauBesoin();
  private _tableauBesoinEnCours = new Array<TableauBesoin>();


  get tableauBesoinItems(): TableauBesoinItem[] {
    return this._tableauBesoinItems;
  }

  set tableauBesoinItems(value: TableauBesoinItem[]) {
    this._tableauBesoinItems = value;
  }

  get tableauBesoinEnCours(): TableauBesoin[] {
    return this._tableauBesoinEnCours;
  }

  set tableauBesoinEnCours(value: TableauBesoin[]) {
    this._tableauBesoinEnCours = value;
  }

  get reponseSelectionnees(): TableauBesoinItem[] {
    return this._reponseSelectionnees;
  }

  set reponseSelectionnees(value: TableauBesoinItem[]) {
    this._reponseSelectionnees = value;
  }

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


  get itemsEnvoyee(): ExpressionBesoinItem[] {
    return this._itemsEnvoyee;
  }

  set itemsEnvoyee(value: ExpressionBesoinItem[]) {
    this._itemsEnvoyee = value;
  }


  saveTableauBesoinsItems() {
    console.log("888888")
    this.fournisseursSelectionne.forEach(f => {
      this.tableauBesoinItem1.fournisseur = f;
      this.itemsSelectionne.forEach(i => {
        this.setItem(i, 'envoyee');
        this.tableauBesoinItem1.expressionBesoinItem = i;
        this.http.post("http://localhost:8096/v1/admin/tableau-besoin-item1/", this.tableauBesoinItem1).subscribe(
          data => {
            console.log(this.fournisseursSelectionne);
          }
        );
      });

    })

  }

  setItem(expressionBesoinItem: ExpressionBesoinItem, statut: string) {
    expressionBesoinItem.statut = statut;
    this.http.post("http://localhost:8096/v1/admin/expression-besoin-item/", expressionBesoinItem).subscribe(
      data => {
        console.log("hello aicha")
      }
    )
  }

  getItemsEnvoye() {
    this.http.get<Array<ExpressionBesoinItem>>("http://localhost:8096/v1/admin/expression-besoin-item/statut/envoyee").subscribe(
      data => {
        this.itemsEnCours = [...data]
      }
    )
  }

  saveTableauBesoin(expressionBesoinItems: ExpressionBesoinItem[]) {
    this.tableauBesoin.expressionBesoinItems = expressionBesoinItems;
    expressionBesoinItems.forEach(e => {
      this.setItem(e, 'attente-devis');
    })
    this.tableauBesoin.statut = "en cours"

    this.http.post("http://localhost:8096/v1/admin/tableau-besoin/", this.tableauBesoin).subscribe(
      data => {

      }
    )
  }

  getTableauBesoinEnCours() {
    console.log("data")
    this.http.get<Array<TableauBesoin>>("http://localhost:8096/v1/admin/tableau-besoin/statut/en%20cours").subscribe(
      data => {
        console.log("data")
        data.forEach(d=>{
          this.tableauBesoinItem.tableauBesoin = d;
          console.log("hoooooooooooo" + d)
          this.fournisseursSelectionne.forEach(f => {
            this.tableauBesoinItem.fournisseur = f;
            // this.tableauBesoinItem.tableauBesoin = this.tableauBesoin;
            console.log("hahowa" + this.tableauBesoinItem.tableauBesoin)
            this.tableauBesoinItem.statut = "En attente"
            this.http.post("http://localhost:8096/v1/admin/tableau-besoin-item/",this.tableauBesoinItem).subscribe(
              data => {
                this.http.get<Array<TableauBesoinItem>>("http://localhost:8096/v1/admin/tableau-besoin-item/statut/En%20attente").subscribe(
                  data=>{
                    data.forEach(d=>{
                      this.tableauBesoinItem=d;
                        this.http.get("http://localhost:8096/v1/admin/EmailSender/" + f.emailFournisseur +"/"+this.tableauBesoinItem.reference).subscribe(
                          data => {
                            console.log("send email")
                          }
                        )
                      }
                    )                    })
                  }
                )

          })
          this.http.post("http://localhost:8096/v1/admin/tableau-besoin/update", d).subscribe(
            data => {
              console.log("tab envoye")
            }
          )
          this.fournisseursSelectionne = new Array();
          this.itemsSelectionne = new Array();
        })
      }
    )
  }

  saveTableauBesoinItem() {
    // this.getTableauBesoinEnCours();
    // this.tableauBesoinItem.tableauBesoin.statut = "envoye"


  }


  getReponses() {
    this.http.get<Array<TableauBesoinItem>>("http://localhost:8096/v1/admin/tableau-besoin-item/statut/reponse").subscribe(
      data => {

      }
    )
  }

  setReponsesSeletcionnees() {
    this.reponseSelectionnees.forEach(r => {
      r.statut = "validee";
      this.http.post("http://localhost:8096/v1/admin/tableau-besoin-item/", r).subscribe(
        data => {
        }
      )
      this.sendBonCommande(r);
    })
  }

  getItemsEnAttenteDeDevis() {
    this.http.get<Array<ExpressionBesoinItem>>("http://localhost:8096/v1/admin/expression-besoin-item/statut/envoyee").subscribe(
      data => {
        this.itemsEnvoyee = [...data]
      }
    )
  }

  sendBonCommande(t:TableauBesoinItem){
    //this.http.get("http://localhost:8096/v1/admin/EmailSender/" +t.fournisseur.emailFournisseur  +"/").subscribe(
    this.http.get("http://localhost:8096/v1/admin/EmailSender/{to}/{sujet}/{path}?path="+"path"+"&sujet=bon de commande&to="+"marouansaif123%40gmail.com").subscribe(
      data => {
      }
    )
  }
}
