import { Component, OnInit } from '@angular/core';
import {ExpressionBesoinService} from "../../controller/service/expression-besoin.service";
import {ExpressionBesoinItem} from "../../controller/model/expressionBesoinItem.model";
import {ExpressionBesoin} from "../../controller/model/expression-besoin.model";
import {ExpressionBesoinItemService} from "../../controller/service/designation-item.service";

@Component({
  selector: 'app-designation-item',
  templateUrl: './designation-item.component.html',
  styleUrls: ['./designation-item.component.css']
})
export class DesignationItemComponent implements OnInit {

  constructor(private expressionBesoinService:ExpressionBesoinService) { }
  get expressionBesoinItems(): Array<ExpressionBesoinItem> {
    return this.expressionBesoinService.expressionBesoinItems;
  }
  get expressionBesoin(): ExpressionBesoin {

    return this.expressionBesoinService.expressionBesoin;
  }
  // public findExpressionBesoinItemByExpressionObjet(expressionBesoin:ExpressionBesoin){
  //    this.expressionBesoinService.findExpressionBesoinItemByExpressionObjet(expressionBesoin);
  //
  // }
  get expressionBesoins(): ExpressionBesoin {



    return this.expressionBesoinService.expressionBesoin;
  }

    ngOnInit(): void {
    this.expressionBesoinService.getExpressionBesoinItems();

  }


}
