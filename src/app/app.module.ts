import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Placement as PopperPlacement, Options} from '@popperjs/core';
import {AppComponent} from './app.component';
import {ComponentsComponent} from './components/components.component';
import {UpBareComponent} from './components/up-bare/up-bare.component';
import {EnAttenteComponent} from './components/en-attente/en-attente.component';
import {EnCoursComponent} from './components/en-cours/en-cours.component';
import {NgbAlertModule, NgbNavModule} from "@ng-bootstrap/ng-bootstrap";
import {RouterModule} from "@angular/router";
import {MatIconModule} from '@angular/material/icon';
import {DialogComponent} from './components/dialog/dialog.component'
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {SideBareComponent} from './components/side-bare/side-bare.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatDividerModule} from '@angular/material/divider';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {FournisseurComponent} from './components/fournisseur/fournisseur.component';
import {EnAttenteLivraisonComponent} from './components/en-attente-livraison/en-attente-livraison.component';
import {EnAttentePaiementComponent} from './components/en-attente-paiement/en-attente-paiement.component';
import {ArchiveeComponent} from './components/archivee/archivee.component';
import {ServiceComponent} from './components/service/service.component';
import {ExpressionBesoinItemComponent} from './components/expression-besoin-item/expression-besoin-item.component';
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {SignInComponent} from "./components/sign-in/sign-in.component";
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";
import {HeaderComponent} from './components/dashboard/header/header.component';
import {SidebarComponent} from './components/dashboard/sidebar/sidebar.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {StatistiquesComponent} from './components/statistiques/statistiques.component';
import {TermineeComponent} from './components/terminee/terminee.component';
import {TableauBesoinComponent} from './components/tableau-besoin/tableau-besoin.component';
import {MatTableModule} from "@angular/material/table";
import {ItemEnCoursComponent} from './components/item-en-cours/item-en-cours.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatInputModule} from "@angular/material/input";
import {FournisseurReponseComponent} from "./components/fournisseur-reponse/fournisseur-reponse.component";
import { TableaubackComponent } from './components/tableauback/tableauback.component';
import { EnAttenteItemsComponent } from './components/en-attente-items/en-attente-items.component';
import { EnCoursItemsComponent } from './components/en-cours-items/en-cours-items.component';
import { RefuseeItemsComponent } from './components/refusee-items/refusee-items.component';
import {TypeFournisseurComponent} from "./components/typeFournisseur/typeFournisseur.component";
import { ItemsComponent } from './components/items/items.component';
import { ItemsSuprimeesComponent } from './components/items-suprimees/items-suprimees.component';
import { BonCmdComponent } from './components/bon-cmd/bon-cmd.component';
import {NgChartsModule} from "ng2-charts";
import {TabViewModule} from "primeng/tabview";
import {TableModule} from "primeng/table";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {Ng2OrderModule} from "ng2-order-pipe";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CmdComponent } from './components/cmd/cmd.component';
import { EnAttenteDevisComponent } from './components/en-attente-devis/en-attente-devis.component';
import { PaiementComponent } from './components/paiement/paiement.component';
import { EnAttenteLaivraisonDetailsComponent } from './components/en-attente-laivraison-details/en-attente-laivraison-details.component';
import { DemandesTraiteesComponent } from './components/demandes-traitees/demandes-traitees.component';
import { HomeComponent } from './home/home.component';
import { DemandeurComponent } from './demandeur/demandeur.component';
import {NavbarComponent} from "./demandeur/navbar/navbar.component";
import {ExpressionBesoinComponent} from "./demandeur/user-besoins/expression-besoin/expression-besoin.component";
import {MenubareComponent} from "./demandeur/user-besoins/menubare/menubare.component";
import {DetailsComponent} from "./demandeur/user-besoins/details/details.component";
import {HistoriqueRefuseComponent} from "./demandeur/user-besoins/historique/historique-refuse/historique-refuse.component";
import {HistoriqueSideBareComponent} from "./demandeur/user-besoins/historique/historique-side-bare/historique-side-bare.component";
import {HistoriqueAccepteesComponent} from "./demandeur/user-besoins/historique/historique-acceptees/historique-acceptees.component";
import {HistoriqueTermineesComponent} from "./demandeur/user-besoins/historique/historique-terminees/historique-terminees.component";
import {HistoriqueEnAttenteComponent} from "./demandeur/user-besoins/historique/historique-en-attente/historique-en-attente.component";
import {RegisterDemandeurComponent} from "./demandeur/user-besoins/register-demandeur/register-demandeur.component";
import {DesignationItemComponent} from "./demandeur/user-besoins/designation-item/designation-item.component";
import {SignInDemandeurComponent} from "./demandeur/user-besoins/sign-in/sign-in.component";
import {UserBesoinsComponent} from "./demandeur/user-besoins/user-besoins.component";
import {MatMenuModule} from "@angular/material/menu";
import {HistoriqueComponent} from "./demandeur/user-besoins/historique/historique.component";
import {MatRippleModule} from "@angular/material/core";
import { FournisseurDetailsComponent } from './components/fournisseur-details/fournisseur-details.component';
import { TableauBesoinSendedComponent } from './components/tableau-besoin-sended/tableau-besoin-sended.component';
import { AttenteDevisDetailsComponent } from './components/attente-devis-details/attente-devis-details.component';
import { AttenteDevisFournisseursComponent } from './components/attente-devis-fournisseurs/attente-devis-fournisseurs.component';
import { FournisseursResponsesDetailsComponent } from './components/fournisseurs-responses-details/fournisseurs-responses-details.component';
import { EnAttenteViremenetComponent } from './components/en-attente-viremenet/en-attente-viremenet.component';

@NgModule({
  declarations: [
    HistoriqueComponent,
    RegisterDemandeurComponent,
    UserBesoinsComponent,
    SignInDemandeurComponent,
    DesignationItemComponent,
    HistoriqueTermineesComponent,
    HistoriqueEnAttenteComponent,
    HistoriqueRefuseComponent,
    HistoriqueAccepteesComponent,
    DetailsComponent,
    MenubareComponent,
    ExpressionBesoinComponent,
    NavbarComponent,
    AppComponent,
    ComponentsComponent,
    UpBareComponent,
    EnAttenteComponent,
    EnCoursComponent,
    DialogComponent,
    SideBareComponent,
    FournisseurComponent,
    EnAttenteLivraisonComponent,
    EnAttentePaiementComponent,
    ArchiveeComponent,
    ServiceComponent,
    ExpressionBesoinItemComponent,
    SignInComponent,
    ExpressionBesoinItemComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    StatistiquesComponent,
    TermineeComponent,
    EnAttenteItemsComponent,
    TableauBesoinComponent,
    ItemEnCoursComponent,
    EnAttenteItemsComponent,
    EnCoursItemsComponent,
    FournisseurReponseComponent,
    TableaubackComponent,
    EnAttenteItemsComponent,
    EnCoursItemsComponent,
    RefuseeItemsComponent,
    TypeFournisseurComponent,
    ItemsComponent,
    ItemsSuprimeesComponent,
    BonCmdComponent,
    ServiceComponent,
    CmdComponent,
    EnAttenteDevisComponent,
    PaiementComponent,
    EnAttenteLaivraisonDetailsComponent,
    DemandesTraiteesComponent,
    HomeComponent,
    DemandeurComponent,
    FournisseurDetailsComponent,
    TableauBesoinSendedComponent,
    AttenteDevisDetailsComponent,
    AttenteDevisFournisseursComponent,
    FournisseursResponsesDetailsComponent,
    EnAttenteViremenetComponent,
  ],

  imports: [
    NgbModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgChartsModule,
    AppRoutingModule,
    MatTableModule,
    BrowserModule,
    NgbNavModule,
    RouterModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    HttpClientModule,
    MatDividerModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    NgbAlertModule,
    MatInputModule,
    MatExpansionModule,
    NgbAlertModule,
    MatCardModule,
    MatTabsModule,
    TabViewModule,
    TableModule,
    MatMenuModule,
    MatRippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {
}
