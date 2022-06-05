import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {CommonModule} from "@angular/common";


// @ts-ignore
import {MatDialogModule} from "@angular/material";
import {EnAttenteComponent} from "./components/en-attente/en-attente.component";
import {EnCoursComponent} from "./components/en-cours/en-cours.component";
import {DialogComponent} from "./components/dialog/dialog.component";
import {FournisseurComponent} from "./components/fournisseur/fournisseur.component";
import {EnAttenteLivraisonComponent} from "./components/en-attente-livraison/en-attente-livraison.component";
import {EnAttenteDeviComponent} from "./components/en-attente-devi/en-attente-devi.component";
import {EnAttentePaiementComponent} from "./components/en-attente-paiement/en-attente-paiement.component";
import {ArchiveeComponent} from "./components/archivee/archivee.component";
import {ServiceComponent} from "./components/service/service.component";
import {SignInComponent} from "./components/sign-in/sign-in.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {StatistiquesComponent} from "./components/statistiques/statistiques.component";
import {VirementComponent} from "./components/virement/virement.component";
import {TermineeComponent} from "./components/terminee/terminee.component";
import {TableauBesoinComponent} from "./components/tableau-besoin/tableau-besoin.component";
import {ItemEnCoursComponent} from "./components/item-en-cours/item-en-cours.component";
import {SideBareComponent} from "./components/side-bare/side-bare.component";
import {FournisseurReponseComponent} from "./components/fournisseur-reponse/fournisseur-reponse.component";
import {TypeFournisseurComponent} from "./components/typeFournisseur/typeFournisseur.component";
import {ItemsComponent} from "./components/items/items.component";
import {ItemsSuprimeesComponent} from "./components/items-suprimees/items-suprimees.component";

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      {path: 'statistiques', component: StatistiquesComponent},
      {path: 'en-attente', component: EnAttenteComponent},
      {path: 'en-cours', component: EnCoursComponent},
      {path: 'dialog', component: DialogComponent},
      {path: 'F', component: FournisseurComponent},
      {path: 'devis', component: EnAttenteDeviComponent},
      {path: 'livraison', component: EnAttenteLivraisonComponent},
      {path: 'paiement', component: EnAttentePaiementComponent},
      {path: 'archivee', component: ArchiveeComponent},
      {path: 'terminee', component: TermineeComponent},
      {path: 'virement', component: VirementComponent},
      {path:'SI',component:SignInComponent},
      {path:'sidebar',component:SideBareComponent},
      {path:'C',component:ItemEnCoursComponent},
      {path:'T',component:TableauBesoinComponent},
      {path:'tf',component:TypeFournisseurComponent},
      {path:'items',component:ItemsComponent},
      {path:'itemsSuprimees',component:ItemsSuprimeesComponent},
    ]
  },
  {path: 's', component: ServiceComponent},
  {path: 'login', component: SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
