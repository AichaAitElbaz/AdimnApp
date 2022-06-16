import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {EnCoursComponent} from "../en-cours/en-cours.component";
import {ExpressionBesoinItem} from "../../controller/model/expression-besoin-item.model";
import {EnAttenteService} from "../../controller/service/en-attente.service";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {


  constructor(private dialog:MatDialog,private enAttenteService:EnAttenteService) {
  }



  ngOnInit(): void {
  }
  get expressionBesoinsItems(): Array<ExpressionBesoinItem> {
    return this.enAttenteService.expressionBesoinsItems;
  }


}
