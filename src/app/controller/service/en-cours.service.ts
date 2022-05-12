import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../../components/dialog/dialog.component";

@Injectable({
  providedIn: 'root'
})
export class EnCoursService {

  constructor(private dialog:MatDialog) { }
  public openDialog() {
   this.dialog.open(DialogComponent)
  }
}
