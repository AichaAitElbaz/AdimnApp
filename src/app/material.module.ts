
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
const material=[MatDialogModule];
@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    material
  ],
  exports: [
    BrowserAnimationsModule,
    material
  ]
})
export class CustomMaterialModule { }
