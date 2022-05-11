import { Component, OnInit } from '@angular/core';


import {DialogComponent} from "../dialog/dialog.component";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";

@Component({
  selector: 'app-en-attente',
  templateUrl: "./en-attente.component.html",
  styleUrls: ['./en-attente.component.css'],
  styles: [
    `.ball {
      position: relative;
      background-color: black;
      border-radius: 50%;
      top: 200px;
      height: 25px;
      width: 25px;
    }`
  ],

})
export class EnAttenteComponent  {

  constructor(public dialog:MatDialog) { }



}
