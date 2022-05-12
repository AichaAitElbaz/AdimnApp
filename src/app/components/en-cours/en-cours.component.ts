import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";
import {EnCoursService} from "../../controller/service/en-cours.service";

@Component({
  selector: 'app-en-cours',
  templateUrl: './en-cours.component.html',
  styleUrls: ['./en-cours.component.css']
})
export class EnCoursComponent implements OnInit {
  constructor(private enCoursService:EnCoursService) {}


  ngOnInit(): void {
  }

  public openDialog() {
    this.enCoursService.openDialog();
  }
}
