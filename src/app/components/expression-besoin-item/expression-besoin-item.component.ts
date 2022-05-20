import {Component, OnInit} from '@angular/core';
import {ServicesService} from "../../controller/service/services.service";
import {ExpressionBesoin} from "../../controller/model/expression-besoin.model";
import {ExpressionBesoinItem} from "../../controller/model/expression-besoin-item.model";

@Component({
  selector: 'app-expression-besoin-item',
  templateUrl: './expression-besoin-item.component.html',
  styleUrls: ['./expression-besoin-item.component.css']
})
export class ExpressionBesoinItemComponent implements OnInit {

  constructor(private servicesService: ServicesService) {
  }

  ngOnInit(): void {
    // this.servicesService.getlistofExpressionBesoinItem();
  }

  get expressionBesoin(): ExpressionBesoin {
    return this.servicesService.expressionBesoin;
  }
  get expressionBesoinItems(): Array<ExpressionBesoinItem> {
    return this.servicesService.expressionBesoinItems;
  }

}
