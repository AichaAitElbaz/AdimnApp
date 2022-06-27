import {Component, Input, OnInit} from '@angular/core';
// @ts-ignore
import {MatDialog} from '@angular/material';
import {ExpressionBesoinItemService} from "../../controller/service/designation-item.service";
import {ExpressionBesoinItem} from "../../controller/model/expressionBesoinItem.model";
import {ExpressionBesoinService} from "../../controller/service/expression-besoin.service";
import {ExpressionBesoin} from "../../controller/model/expression-besoin.model";
import {HistoriqueService} from "../../controller/service/historique.service";
import {NgbNavConfig} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css'],

})
export class HistoriqueComponent implements OnInit {
  ngOnInit(): void {
  }
  constructor(config: NgbNavConfig) {
    // customize default values of navs used by this component tree
    config.destroyOnHide = false;
    config.roles = false;
  }

}
