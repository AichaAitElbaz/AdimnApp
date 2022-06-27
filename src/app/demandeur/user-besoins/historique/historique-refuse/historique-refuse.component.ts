import { Component, OnInit } from '@angular/core';
import {ExpressionBesoin} from "../../../controller/model/expression-besoin.model";
import {ExpressionBesoinItemService} from "../../../controller/service/designation-item.service";
import {HistoriqueService} from "../../../controller/service/historique.service";
import {ExpressionBesoinService} from "../../../controller/service/expression-besoin.service";

@Component({
  selector: 'app-historique-refuse',
  templateUrl: './historique-refuse.component.html',
  styleUrls: ['./historique-refuse.component.css']
})
export class HistoriqueRefuseComponent implements OnInit {

  public expressionBesoin: ExpressionBesoin


  constructor( private expressionBesoinItemService: ExpressionBesoinItemService, private historiqueService: HistoriqueService, private expressionBesoinService: ExpressionBesoinService) {
  }

  ngOnInit() {
    this.expressionBesoinService.loadedByUserName();

    this.historiqueService.getExpressionBesoinsRefusees();

  }

  get expressionBesoinsRefusees(): Array<ExpressionBesoin> {
    return this.historiqueService.expressionBesoinsRefusees;
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
