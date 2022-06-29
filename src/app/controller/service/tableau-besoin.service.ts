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
  private _items = new Array<ExpressionBesoinItem>();
  private _foundeditems = new Array<ExpressionBesoinItem>();
  private _itemsEnvoyee = new Array<ExpressionBesoinItem>();
  private _itemsEnCours = new Array<ExpressionBesoinItem>();
  private _fournisseursSelectionne = new Array<Fournisseur>();
  private _fournisseurs = new Array<Fournisseur>();
  private _foundedfournisseurs = new Array<Fournisseur>();
  private _tableauBesoinItem1 = new TableauBesoinItem1();
  private _tableauBesoinItem =new TableauBesoinItem();
  private _tableauBesoinItems = new Array<TableauBesoinItem>();
  private _tableauBesoin = new TableauBesoin();
  private _tableauBesoinEnCours = new Array<TableauBesoin>();
  private _tableauBesoins = new Array<TableauBesoin>();


  get tableauBesoins(): TableauBesoin[] {
    return this._tableauBesoins;
  }

  set tableauBesoins(value: TableauBesoin[]) {
    this._tableauBesoins = value;
  }

  get foundeditems(): ExpressionBesoinItem[] {
    return this._foundeditems;
  }

  set foundeditems(value: ExpressionBesoinItem[]) {
    this._foundeditems = value;
  }

  get items(): ExpressionBesoinItem[] {
    return this._items;
  }

  set items(value: ExpressionBesoinItem[]) {
    this._items = value;
  }

  get fournisseurs(): Fournisseur[] {
    return this._fournisseurs;
  }

  set fournisseurs(value: Fournisseur[]) {
    this._fournisseurs = value;
  }

  get foundedfournisseurs(): Fournisseur[] {
    return this._foundedfournisseurs;
  }

  set foundedfournisseurs(value: Fournisseur[]) {
    this._foundedfournisseurs = value;
  }

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
    this.http.put("http://localhost:8096/v1/admin/expression-besoin-item/updateStatut", expressionBesoinItem).subscribe(
      data => {
      }
    )
  }

  getItemsSelectionnees() {
    this.http.get<Array<ExpressionBesoinItem>>("http://localhost:8096/v1/admin/expression-besoin-item/statut/selectionnee").subscribe(
      data => {
        this.itemsEnCours = [...data]
      }
    )
  }

  saveTableauBesoin(tab: TableauBesoin, expressionBesoinItems: ExpressionBesoinItem[]) {
    this.getFourniseursSelectionnes();
    this.fournisseurs.forEach(f => {
      this.tableauBesoinItem.fournisseur = f;
      this.tableauBesoinItems.push(this.tableauBesoinItem);
      console.log(this.tableauBesoinItems)
    })
    tab.expressionBesoinItems = expressionBesoinItems;
    tab.tableauBesoinItems = this.tableauBesoinItems;
    tab.statut = "en cours"
    this.http.post("http://localhost:8096/v1/admin/tableau-besoin/", tab).subscribe(
      data => {
      }
    )

  }

  sendEmail() {
    this.http.get<Array<TableauBesoinItem>>("http://localhost:8096/v1/admin/tableau-besoin-item/statut/En%20attente").subscribe(
      data => {
        data.forEach(d => {
            this.http.get("http://localhost:8096/v1/admin/EmailSender/" + d.fournisseur.emailFournisseur + "/" + d.reference).subscribe(
              data => {
                1
              })
          }
        )

      })
  }

  getTableauBesoinEnCours() {

  }

  //   console.log("data")
  //   this.http.get<Array<TableauBesoin>>("http://localhost:8096/v1/admin/tableau-besoin/statut/en%20cours").subscribe(
  //     data => {
  //       data.forEach(d=>{
  //
  //               this.http.get<Array<TableauBesoinItem>>("http://localhost:8096/v1/admin/tableau-besoin-item/statut/En%20attente").subscribe(
  //                 data=>{
  //                   data.forEach(d=>{
  //                     this.tableauBesoinItem=d;
  //
  //                       )
  //                     }
  //                   )                    })
  //                 })
  //         })
  //         this.http.post("http://localhost:8096/v1/admin/tableau-besoin/update", d).subscribe(
  //           data => {
  //             console.log("tab envoye")
  //           }
  //         )
  //         this.fournisseursSelectionne = new Array();
  //         this.itemsSelectionne = new Array();
  //
  //
  //
  // }

  saveTableauBesoinItem() {

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
      // this.sendBonCommande(r);
    })
  }

  getItemsEnAttenteDeDevis() {
    this.http.get<Array<TableauBesoin>>("http://localhost:8096/v1/admin/tableau-besoin/statut/en%20cours").subscribe(
      data => {
        this.tableauBesoins= [...data]

      }
    )
  }

  saveSelectionnes() {
    console.log(88888888888888888888)
    this.itemsSelectionne.forEach(i => {
      i.statut = "selectionnee"
      this.http.put("http://localhost:8096/v1/admin/expression-besoin-item/updateStatut", i).subscribe(
        data => {
          console.log(i)
        }
      )
    })
    this.fournisseursSelectionne.forEach(f => {
      f.statut = "selectionnee"
      this.http.put("http://localhost:8096/v1/admin/fournisseur/updateStatut", f)
        .subscribe(
          data => {
            console.log(f)
          }
        )
    })
  }

  getFourniseursSelectionnes() {
    this.http.get<Array<Fournisseur>>("http://localhost:8096/v1/admin/fournisseur/statut/selectionnee").subscribe(
      data => {
        this.fournisseurs = [...data];
      }
    )

  }

  getTableauBesoinItem(reference) {
    this.http.get<TableauBesoinItem>("http://localhost:8096/v1/admin/tableau-besoin-item/reference/" + reference).subscribe(
      data => {
        this.tableauBesoinItem = data;
      }
    )
  }

  saveTableauBesoinItem2(tableauBesoinItem: TableauBesoinItem) {
    let ht = 0;
    tableauBesoinItem.tva = tableauBesoinItem.tableauBesoin.tva;
    tableauBesoinItem.tableauBesoin.expressionBesoinItems.forEach(e => {
      ht += e.pu * e.quantite;
    })
    tableauBesoinItem.ht = ht;
    tableauBesoinItem.ttc = ht + (tableauBesoinItem.tva * ht) / 100;
    tableauBesoinItem.statut = "reçu"
    this.http.post("http://localhost:8096/v1/admin/tableau-besoin-item/", tableauBesoinItem).subscribe(
      data => {

      }
    )

  }
  findDesignationsByTableauBesoinsRef(tableauBesoin:TableauBesoin){
    this.http.get<Array<ExpressionBesoinItem>>("http://localhost:8096/v1/admin/expression-besoin-item/tableau-besoin/reference/"+tableauBesoin.reference).subscribe(
      data=>{
        this.foundeditems=[...data];
        console.log(this.foundeditems)
      }
    )
  }
  findFournisseursByStatutTableauBesoinRef(statut:string,tableauBesoin:TableauBesoin){
    this.http.get<Array<TableauBesoinItem>>("http://localhost:8096/v1/admin/tableau-besoin-item/statut/tableauBesoin/reference/"+statut+"/"+tableauBesoin.reference).subscribe(
      data=>{
       this.tableauBesoinItems=[...data]

      }
    )
  }
}
