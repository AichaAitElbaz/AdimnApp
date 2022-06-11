import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TableauBesoinItem} from "../model/tableau-besoin-item.model";
import {TableauBesoin} from "../model/tableau-besoin.model";

@Injectable({
  providedIn: 'root'
})
export class CmdService {
  private _reposeSelectionee=new TableauBesoinItem();
  private _tableauBesoin : TableauBesoin;

  constructor(private http: HttpClient) {
  }

  get reposeSelectionee(): TableauBesoinItem {
    return this._reposeSelectionee;
  }

  set reposeSelectionee(value: TableauBesoinItem) {
    this._reposeSelectionee = value;
  }

  get tableauBesoin(): TableauBesoin {
    return this._tableauBesoin;
  }

  set tableauBesoin(value: TableauBesoin) {
    this._tableauBesoin = value;
  }



  getReponseSelectionne() {
    this.http.get<TableauBesoinItem>("http://localhost:8096/v1/admin/tableau-besoin-item/reference/tab2").subscribe(
      data => {
        this.reposeSelectionee=data;
        console.log(data)
        console.log(this.reposeSelectionee.fournisseur)
      }
    )
  }
}
