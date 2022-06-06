import { Component, OnInit } from '@angular/core';
import {EnCoursService} from "../../controller/service/en-cours.service";
import {ExpressionBesoinItem} from "../../controller/model/expression-besoin-item.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-items-suprimees',
  templateUrl: './items-suprimees.component.html',
  styleUrls: ['./items-suprimees.component.css']
})
export class ItemsSuprimeesComponent implements OnInit {
private _itemsSuprimees:Array<ExpressionBesoinItem>;
  constructor(private enCoursService:EnCoursService) { }

  ngOnInit(): void {
    this.enCoursService.getItemsSuprimees();

  }


  get ItemsSuprimees(): Array<ExpressionBesoinItem> {
    return this.enCoursService.ItemsSuprimees;
  }


}
