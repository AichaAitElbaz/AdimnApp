import {Component, OnInit} from '@angular/core';
import {ServicesService} from "../../controller/service/services.service";
import {ExpressionBesoin} from "../../controller/model/expression-besoin.model";
import {ExpressionBesoinItem} from "../../controller/model/expression-besoin-item.model";
import {FournisseurService} from "../../controller/service/fournisseur.service";
import {EnCoursService} from "../../controller/service/en-cours.service";

@Component({
  selector: 'app-expression-besoin-item',
  templateUrl: './expression-besoin-item.component.html',
  styleUrls: ['./expression-besoin-item.component.css']
})
export class ExpressionBesoinItemComponent implements OnInit {

  constructor(private servicesService: ServicesService, private fournisseurService: FournisseurService, private enCoursService: EnCoursService) {
  }

  ngOnInit(): void {
    this.fournisseurService.getlistofExpressionBesoinItem();
    this.fournisseurService.getItems();
  }

  get expressionBesoin(): ExpressionBesoin {
    return this.servicesService.expressionBesoin;
  }

  get expressionBesoinItems(): Array<ExpressionBesoinItem> {
    return this.fournisseurService.expressionBesoinsItems;
  }

  public fonction(event: any, expressionBesoinItem: ExpressionBesoinItem) {
    if (event.checked) {
      this.enCoursService.save(expressionBesoinItem);
    } else {
      this.enCoursService.update(expressionBesoinItem)
    }
    ;
  }
}
