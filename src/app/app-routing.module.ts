import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {CommonModule} from "@angular/common";


// @ts-ignore
import {MatDialogModule} from "@angular/material";
import {EnAttenteComponent} from "./components/en-attente/en-attente.component";
import {EnCoursComponent} from "./components/en-cours/en-cours.component";
import {DialogComponent} from "./components/dialog/dialog.component";
import {FournisseurComponent} from "./components/fournisseur/fournisseur.component";
import {EnAttenteLivraisonComponent} from "./components/en-attente-livraison/en-attente-livraison.component";
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
import {BonCmdComponent} from "./components/bon-cmd/bon-cmd.component";
import {CmdComponent} from "./components/cmd/cmd.component";
import {EnAttenteDevisComponent} from "./components/en-attente-devis/en-attente-devis.component";
import {PaiementComponent} from "./components/paiement/paiement.component";
import {DemandesTraiteesComponent} from "./components/demandes-traitees/demandes-traitees.component";
import {HomeComponent} from "./home/home.component";
import {UserBesoinsComponent} from "./demandeur/user-besoins/user-besoins.component";
import {HistoriqueComponent} from "./demandeur/user-besoins/historique/historique.component";
import {AuthGuard} from "./controller/auth/auth.guard";
import {ExpressionBesoinComponent} from "./demandeur/user-besoins/expression-besoin/expression-besoin.component";
import {RegisterDemandeurComponent} from "./demandeur/user-besoins/register-demandeur/register-demandeur.component";
import {SignInDemandeurComponent} from "./demandeur/user-besoins/sign-in/sign-in.component";
import {AuthGuardD} from "./demandeur/controller/auth/auth.guard";

const routes: Routes = [
  {path: 'homeDemandeur', redirectTo: "/home/demande-expression-de-besoin", pathMatch: "full"},
  {
    path: 'home', component: UserBesoinsComponent,  canActivate: [AuthGuardD],children: [
      {path: 'historique', component: HistoriqueComponent, canActivate: [AuthGuardD]},
      {path: 'demande-expression-de-besoin', component: ExpressionBesoinComponent, canActivate: [AuthGuardD]},
    ]
  },
  {path: 'loginDemandeur', component: SignInDemandeurComponent},
  {path: 'register', component: RegisterDemandeurComponent},
  {
    path: 'dashbord', component: DashboardComponent, canActivate: [AuthGuard], children: [

      {path: 'statistiques', component: StatistiquesComponent , canActivate: [AuthGuard]      },
      {path: 'paiement', component: PaiementComponent ,canActivate: [AuthGuard]},
      {path: 'statistique', component: StatistiquesComponent ,canActivate: [AuthGuard]},
      {path: 'en-attente', component: EnAttenteComponent ,canActivate: [AuthGuard]},
      {path: 'en-cours', component: EnCoursComponent ,canActivate: [AuthGuard]},
      {path: 'dialog', component: DialogComponent ,canActivate: [AuthGuard]},
      {path: 'F', component: FournisseurComponent ,canActivate: [AuthGuard]},
      {path: 'devis', component: EnAttenteDevisComponent ,canActivate: [AuthGuard]},
      {path: 'livraison', component: EnAttenteLivraisonComponent ,canActivate: [AuthGuard]},
      {path: 'paiement', component: EnAttentePaiementComponent ,canActivate: [AuthGuard]},
      {path: 'archivee', component: ArchiveeComponent ,canActivate: [AuthGuard]},
      {path: 'terminee', component: TermineeComponent ,canActivate: [AuthGuard]},
      {path: 'virement', component: VirementComponent ,canActivate: [AuthGuard]},
      {path: 'SI', component: SignInComponent ,canActivate: [AuthGuard]},
      {path: 'sidebar', component: SideBareComponent ,canActivate: [AuthGuard]},
      {path: 'C', component: ItemEnCoursComponent ,canActivate: [AuthGuard]},
      {path: 'T', component: TableauBesoinComponent ,canActivate: [AuthGuard]},
      {path: 'tf', component: TypeFournisseurComponent ,canActivate: [AuthGuard]},
      {path: 'items', component: ItemsComponent ,canActivate: [AuthGuard]},
      {path: 'itemsSuprimees', component: ItemsSuprimeesComponent ,canActivate: [AuthGuard]},
      {path: 'reponse', component: FournisseurReponseComponent ,canActivate: [AuthGuard]},
      {path: 'demandes traitees', component: DemandesTraiteesComponent ,canActivate: [AuthGuard]},
      {path: 'bn-cmd', component: BonCmdComponent ,canActivate: [AuthGuard]},
      {path: 'cmd', component: CmdComponent ,canActivate: [AuthGuard]},
    ]
  },
  {path: 's/:id', component: ServiceComponent},
  {path: 'login', component: SignInComponent},
  {path: '', component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
