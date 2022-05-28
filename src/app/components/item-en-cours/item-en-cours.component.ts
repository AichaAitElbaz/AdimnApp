import {Component, OnInit} from '@angular/core';
import {EnCoursService} from "../../controller/service/en-cours.service";
import {ExpressionBesoinItem} from "../../controller/model/expression-besoin-item.model";
import {FormControl} from "@angular/forms";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079},
  {position: 2, name: 'Helium', weight: 4.0026},
  {position: 3, name: 'Lithium', weight: 6.941},
  {position: 4, name: 'Beryllium', weight: 9.0122},
  {position: 5, name: 'Boron', weight: 10.811},
  {position: 6, name: 'Carbon', weight: 12.0107},
  {position: 7, name: 'Nitrogen', weight: 14.0067},
  {position: 8, name: 'Oxygen', weight: 15.9994},
  {position: 9, name: 'Fluorine', weight: 18.9984},
  {position: 10, name: 'Neon', weight: 20.1797},
];

@Component({
  selector: 'app-item-en-cours',
  templateUrl: './item-en-cours.component.html',
  styleUrls: ['./item-en-cours.component.css']
})
export class ItemEnCoursComponent implements OnInit {
  private values: Array<String>;

  constructor(private enCoursService: EnCoursService) {
  }

  get expressionBesoinItems(): Array<ExpressionBesoinItem> {
    return this.enCoursService.expressionBesoinItems;
  }

  ngOnInit(): void {
    this.enCoursService.getitems();
  }

  disableSelect = new FormControl(false);

  public getChecked(e, id:ExpressionBesoinItem) {
    if (e.target.checked) {
      console.log(id);
      this.enCoursService.save(id);
    } else {
      this.enCoursService.update(id);
    }

    // this.values.push(element.value);

  }


  save(expressionBesoinItem: ExpressionBesoinItem) {
    this.enCoursService.save(expressionBesoinItem);
  }
}

