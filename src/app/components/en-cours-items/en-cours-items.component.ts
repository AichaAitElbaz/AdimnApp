import {Component, OnInit} from '@angular/core';
import {ExpressionBesoinItem} from "../../controller/model/expression-besoin-item.model";
import {EnAttenteService} from "../../controller/service/en-attente.service";
import {EnCoursService} from "../../controller/service/en-cours.service";

@Component({
  selector: 'app-en-cours-items',
  templateUrl: './en-cours-items.component.html',
  styleUrls: ['./en-cours-items.component.css']
})
export class EnCoursItemsComponent implements OnInit {

  constructor(private enAttenteService: EnAttenteService, private enCoursService: EnCoursService) {
  }

  ngOnInit(): void {
  }

  get expressionBesoinsItems(): Array<ExpressionBesoinItem> {
    return this.enAttenteService.expressionBesoinsItems;
  }

  public setItemEnCours(expressionBesoinItem: ExpressionBesoinItem, statut: string) {
    this.enAttenteService.setItemEnCours(expressionBesoinItem, statut);
  }

  updateItem(expressionBesoinItem: ExpressionBesoinItem) {
    this.enCoursService.updateItem(expressionBesoinItem)
  }

  setiputInhidden(id: string) {
    document.getElementById(id).hidden = false;
  }
}
