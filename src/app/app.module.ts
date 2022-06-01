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
// import {FontAwesomeModule} from '@font'
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {FournisseurComponent} from './components/fournisseur/fournisseur.component';
import {EnAttenteDeviComponent} from './components/en-attente-devi/en-attente-devi.component';
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
import {VirementComponent} from './components/virement/virement.component';
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

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    UpBareComponent,
    EnAttenteComponent,
    EnCoursComponent,
    DialogComponent,
    SideBareComponent,
    FournisseurComponent,
    EnAttenteDeviComponent,
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
    VirementComponent,
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
  ],

  imports: [
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
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {
}
