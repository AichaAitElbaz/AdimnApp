import {Component, OnInit} from '@angular/core';
import {ExpressionBesoinItem} from "../../controller/model/expression-besoin-item.model";
import {HttpClient} from "@angular/common/http";
import {FournisseurService} from "../../controller/service/fournisseur.service";

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
  dataSource:Array<ExpressionBesoinItem>

  constructor(private fournisseurService:FournisseurService,private http:HttpClient) {
  }

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  ngOnInit(): void {
    this.fournisseurService.getItems()
    //    this.dataSource=this.expressionBesoinsItems;
  }
  displayedColumns: ExpressionBesoinItem[] ;
  get expressionBesoinsItems(): Array<ExpressionBesoinItem> {
    return this.fournisseurService.expressionBesoinsItems;
  }
}
