import { Component, OnInit } from '@angular/core';
import {EnAttenteService} from "../../controller/service/en-attente.service";
import {ExpressionBesoinItem} from "../../controller/model/expression-besoin-item.model";

@Component({
  selector: 'app-refusee-items',
  templateUrl: './refusee-items.component.html',
  styleUrls: ['./refusee-items.component.css']
})
export class RefuseeItemsComponent implements OnInit {
  constructor(private enAttenteService:EnAttenteService) { }

  ngOnInit(): void {

  }
  get expressionBesoinsItems(): Array<ExpressionBesoinItem> {
    return this.enAttenteService.expressionBesoinsItems;
  }
}
