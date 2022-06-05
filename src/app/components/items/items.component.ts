import { Component, OnInit } from '@angular/core';
import {EnCoursService} from "../../controller/service/en-cours.service";
import {ExpressionBesoinItem} from "../../controller/model/expression-besoin-item.model";
import {TableauBesoinService} from "../../controller/service/tableau-besoin.service";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  constructor(private enCoursService:EnCoursService,private tableauBesoinService:TableauBesoinService) { }

  ngOnInit(): void {
    this.enCoursService.getItemsAcceptees("En cours")
  }

  get ItemsAcceptees(): Array<ExpressionBesoinItem> {
    return this.enCoursService.ItemsAcceptees;
  }

  fonction(event, expressionBesoinItem:ExpressionBesoinItem) {
    if (event.target.checked==true){
      console.log(expressionBesoinItem)
      this.tableauBesoinService.itemsSelectionne.push(expressionBesoinItem);
    }
  }



  navigate(component: string) {
    this.enCoursService.navigate(component)
  }
}
