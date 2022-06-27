import { Component, OnInit } from '@angular/core';
import {ExpressionBesoin} from "../../../controller/model/expression-besoin.model";
import {ExpressionBesoinItemService} from "../../../controller/service/designation-item.service";
import {HistoriqueService} from "../../../controller/service/historique.service";
import {ExpressionBesoinService} from "../../../controller/service/expression-besoin.service";

@Component({
  selector: 'app-historique-acceptees',
  templateUrl: './historique-acceptees.component.html',
  styleUrls: ['./historique-acceptees.component.css']
})
export class HistoriqueAccepteesComponent implements OnInit {

  public expressionBesoin: ExpressionBesoin;

  constructor( private expressionBesoinItemService: ExpressionBesoinItemService, private historiqueService: HistoriqueService, private expressionBesoinService: ExpressionBesoinService) {
  }

  ngOnInit() {

    this.historiqueService.getExpressionBesoinsAcceptees();
    this.expressionBesoinService.loadedByUserName();



  }

  get expressionBesoinsAcceptees(): Array<ExpressionBesoin> {
    return this.historiqueService.expressionBesoinsAcceptees;
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
