import { Component, OnInit } from '@angular/core';
import {EnCoursService} from "../../controller/service/en-cours.service";
import {ExpressionBesoinItem} from "../../controller/model/expression-besoin-item.model";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  private _itemsSelectionne=new Array<ExpressionBesoinItem>();
  constructor(private enCoursService:EnCoursService,) { }

  ngOnInit(): void {
    this.enCoursService.getItemsAcceptees()
  }

  get ItemsAcceptees(): Array<ExpressionBesoinItem> {
    return this.enCoursService.ItemsAcceptees;
  }

  fonction(event, expressionBesoinItem:ExpressionBesoinItem) {
    if (event.target.checked==true){
      console.log(expressionBesoinItem)
      this.itemsSelectionne.push(expressionBesoinItem);
    }
  }
  public saveItem(){
    console.log(this.itemsSelectionne)
    this.enCoursService.saveItem(this.itemsSelectionne);
  }
  get itemsSelectionne(): Array<ExpressionBesoinItem> {
    return this._itemsSelectionne;
  }

  set itemsSelectionne(value: Array<ExpressionBesoinItem>) {
    this._itemsSelectionne = value;
  }
}
