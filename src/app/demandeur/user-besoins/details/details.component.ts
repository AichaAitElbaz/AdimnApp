import {Component, Inject, inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {DetailService} from "../../controller/service/detail.service";
import {ExpressionBesoinItem} from "../../controller/model/expressionBesoinItem.model";
import {ExpressionBesoin} from "../../controller/model/expression-besoin.model";
import {ExpressionBesoinService} from "../../controller/service/expression-besoin.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {




  constructor(private detailService:DetailService,private expressionBesoinService:ExpressionBesoinService) { }

  ngOnInit(): void {
    // this.expressionBesoinService.findExpressionBesoinItemByExpressionRef(this.expressionBesoin);
  }
  get expressionBesoin(): ExpressionBesoin {
    return this.expressionBesoinService.expressionBesoin;
  }

}
