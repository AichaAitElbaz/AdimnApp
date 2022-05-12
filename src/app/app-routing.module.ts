import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {CommonModule} from "@angular/common";


// @ts-ignore
import {MatDialogModule} from "@angular/material";
import {EnAttenteComponent} from "./components/en-attente/en-attente.component";
import {EnCoursComponent} from "./components/en-cours/en-cours.component";
import {DialogComponent} from "./components/dialog/dialog.component";
import {SideBareComponent} from "./components/side-bare/side-bare.component";
import {FournisseurComponent} from "./components/fournisseur/fournisseur.component";

const routes: Routes = [
  {path:'Attente',component:EnAttenteComponent},
  {path:'Cours',component:EnCoursComponent},
  {path:'Dialog',component:DialogComponent},
  {path:'F',component:FournisseurComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
