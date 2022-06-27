import { Component, OnInit } from '@angular/core';
import {ExpressionBesoin} from "../../../controller/model/expression-besoin.model";
import {ExpressionBesoinItemService} from "../../../controller/service/designation-item.service";
import {HistoriqueService} from "../../../controller/service/historique.service";
import {ExpressionBesoinService} from "../../../controller/service/expression-besoin.service";

@Component({
  selector: 'app-historique-terminees',
  templateUrl: './historique-terminees.component.html',
  styleUrls: ['./historique-terminees.component.css']
})
export class HistoriqueTermineesComponent implements OnInit {
  public expressionBesoin: ExpressionBesoin

  constructor( private expressionBesoinItemService: ExpressionBesoinItemService, private historiqueService: HistoriqueService, private expressionBesoinService: ExpressionBesoinService) {
  }

  ngOnInit() {
    this.historiqueService.getExpressionBesoinsTerminees();
    this.expressionBesoinService.loadedByUserName();

  }

  get expressionBesoinsTerminee(): Array<ExpressionBesoin> {
    return this.historiqueService.expressionBesoinsTerminee;
  }

  public opendetails(){
    this.historiqueService.opendetails();
  }

// public getDetails(){
//     this.historiqueService.getDetails();
//
// }
  public findExpressionBesoinItemByExpressionObjet(expressionBesoin:ExpressionBesoin){
    this.expressionBesoinService.findExpressionBesoinItemByExpressionRef(expressionBesoin)
  }



}
