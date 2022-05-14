import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";
import {EnCoursService} from "../../controller/service/en-cours.service";
import {ExpressionBesoin} from "../../controller/model/expression-besoin.model";
import {User} from "../../controller/model/user.model";

@Component({
  selector: 'app-en-cours',
  templateUrl: './en-cours.component.html',
  styleUrls: ['./en-cours.component.css']
})
export class EnCoursComponent implements OnInit {
  constructor(private enCoursService:EnCoursService) {}

  ngOnInit(): void {
    this.enCoursService.getExpressionBesoins();
    this.enCoursService.affecter();
  }


  get expressionBesoins(): Array<ExpressionBesoin> {
    return this.enCoursService.expressionBesoins;
  }
  public openDialog() {
    this.enCoursService.openDialog();
  }
  get user(): User {
    return this.enCoursService.user;
  }
}
