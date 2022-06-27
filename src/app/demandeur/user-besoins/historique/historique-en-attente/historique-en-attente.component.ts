import {Component, OnInit} from '@angular/core';
import {ExpressionBesoin} from "../../../controller/model/expression-besoin.model";
import {ExpressionBesoinItemService} from "../../../controller/service/designation-item.service";
import {HistoriqueService} from "../../../controller/service/historique.service";
import {ExpressionBesoinService} from "../../../controller/service/expression-besoin.service";

@Component({
  selector: 'app-historique-en-attente',
  templateUrl: './historique-en-attente.component.html',
  styleUrls: ['./historique-en-attente.component.css']
})
export class HistoriqueEnAttenteComponent implements OnInit {

  public expressionBesoin: ExpressionBesoin

  constructor(private expressionBesoinItemService: ExpressionBesoinItemService,
              private historiqueService: HistoriqueService,
              private expressionBesoinService: ExpressionBesoinService) {
  }


  ngOnInit() {    this.expressionBesoinService.loadedByUserName();

    this.historiqueService.getExpressionBesoinsEnAttente();
  }

  get expressionBesoinsEnAttente(): Array<ExpressionBesoin> {
    return this.historiqueService.expressionBesoinsEnAttente;
  }

  public opendetails() {
    this.historiqueService.opendetails();
  }



// public getDetails(){
//     this.historiqueService.getDetails();
//
// }


  public findExpressionBesoinItemByExpressionObjet(expressionBesoin: ExpressionBesoin) {
    this.expressionBesoinService.findExpressionBesoinItemByExpressionRef(expressionBesoin)
  }


}
