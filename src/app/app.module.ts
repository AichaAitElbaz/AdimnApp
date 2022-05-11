import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Placement as PopperPlacement, Options} from '@popperjs/core';
import {AppComponent} from './app.component';
import {ComponentsComponent} from './components/components.component';
import {UpBareComponent} from './components/up-bare/up-bare.component';
import {EnAttenteComponent} from './components/en-attente/en-attente.component';
import {EnCoursComponent} from './components/en-cours/en-cours.component';
import {NgbNavModule} from "@ng-bootstrap/ng-bootstrap";
import {RouterModule} from "@angular/router";
import { MatIconModule } from '@angular/material/icon';
import { DialogComponent } from './components/dialog/dialog.component'
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    UpBareComponent,
    EnAttenteComponent,
    EnCoursComponent,
    DialogComponent,
  ],
  entryComponents:[DialogComponent],
  imports: [
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
],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
