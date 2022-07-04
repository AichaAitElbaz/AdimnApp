import { Component, OnInit } from '@angular/core';
import {ExpressionBesoinItem} from "../../controller/model/expression-besoin-item.model";
import {TableauBesoinItem} from "../../controller/model/tableau-besoin-item.model";
import {HttpClient} from "@angular/common/http";
import {TableauBesoinService} from "../../controller/service/tableau-besoin.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tableau-besoin-sended',
  templateUrl: './tableau-besoin-sended.component.html',
  styleUrls: ['./tableau-besoin-sended.component.css']
})
export class TableauBesoinSendedComponent implements OnInit {
  reference: string;
  id: number;
  dataSource: Array<ExpressionBesoinItem>
  constructor(private http: HttpClient, private tableauBesoinService: TableauBesoinService, private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
    this.tableauBesoinService.getTableauBesoinItem(this.reference)
    // this.tableauBesoinService.getAllTableauBesoinItem();
    this.activatedRoute.params.subscribe(params => {
      console.log(params['reference'])
      if (typeof params['reference'] !== 'undefined') {
        this.reference = params['reference'];

      } else {
        alert("table non exist")

      }
    });

    this.tableauBesoinService.getTableauBesoinItem(this.reference);
// this.tableauBesoinService.getTableauBesoinItem();
  }


  get tableauBesoinItem(): TableauBesoinItem {
    return this.tableauBesoinService.tableauBesoinItem;
  }

  saveTableauBesoinItem() {
    this.tableauBesoinService.saveTableauBesoinItem2()
  }


  get foundeditems(): ExpressionBesoinItem[] {
    return this.tableauBesoinService.foundeditems;
  }
}
