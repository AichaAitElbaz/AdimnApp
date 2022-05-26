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
import {EnAttenteLivraisonComponent} from "./components/en-attente-livraison/en-attente-livraison.component";
import {EnAttenteDeviComponent} from "./components/en-attente-devi/en-attente-devi.component";
import {EnAttentePaiementComponent} from "./components/en-attente-paiement/en-attente-paiement.component";
import {ArchiveeComponent} from "./components/archivee/archivee.component";
import {ServiceComponent} from "./components/service/service.component";
import {SignInComponent} from "./components/sign-in/sign-in.component";

const routes: Routes = [
  {path:'1',component:EnAttenteComponent},
  {path:'Cours',component:EnCoursComponent},
  {path:'Dialog',component:DialogComponent},
  {path:'F',component:FournisseurComponent},
  {path:'D',component:EnAttenteDeviComponent},
  {path:'L',component:EnAttenteLivraisonComponent},
  {path:'P',component:EnAttentePaiementComponent},
  {path:'A',component:ArchiveeComponent},
  {path:'S',component:ServiceComponent},
  {path:'',component:SignInComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
