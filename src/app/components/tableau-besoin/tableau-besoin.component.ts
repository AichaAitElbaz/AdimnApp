import {Component, OnInit} from '@angular/core';
import {ExpressionBesoinItem} from "../../controller/model/expression-besoin-item.model";
import {HttpClient} from "@angular/common/http";
import {FournisseurService} from "../../controller/service/fournisseur.service";
import {ExpressionBesoin} from "../../controller/model/expression-besoin.model";
import {TableauBesoinService} from "../../controller/service/tableau-besoin.service";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;

}


@Component({
  selector: 'app-tableau-besoin',
  templateUrl: './tableau-besoin.component.html',
  styleUrls: ['./tableau-besoin.component.css']
})
export class TableauBesoinComponent implements OnInit {
  dataSource: Array<ExpressionBesoinItem>

  constructor(private fournisseurService: FournisseurService, private http: HttpClient, private tableauBesoinService: TableauBesoinService) {
  }

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  ngOnInit(): void {
    this.tableauBesoinService.getItemsEnvoye();
  }

  displayedColumns: ExpressionBesoinItem[];

  get expressionBesoins(): Array<ExpressionBesoin> {
    return this.fournisseurService.expressionBesoins;
  }

  // saveItm(expressionBesoinItems:Array<> ExpressionBesoinItem){
  //   this.tableauBesoinService.saveItm(expressionBesoinItem);
  // }
  get itemsEnCours(): ExpressionBesoinItem[] {
    return this.tableauBesoinService.itemsEnCours;
  }

  saveTableauBesoin(expressionBesoinItems: ExpressionBesoinItem[]) {
    this.tableauBesoinService. saveTableauBesoin(expressionBesoinItems);
  }

  saveTableauBesoinItem(){
    this.tableauBesoinService.saveTableauBesoinItem();
  }
}
