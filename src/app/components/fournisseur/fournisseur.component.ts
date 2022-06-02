import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Fournisseur} from "../../controller/model/fournisseur.model";
import {FournisseurService} from "../../controller/service/fournisseur.service";
import {TypeFournisseur} from "../../controller/model/type-fournisseur.mpdel";
import {ServicesService} from "../../controller/service/services.service";
import {ServiceComponent} from "../service/service.component";
import {FormControl} from "@angular/forms";
import {TableauBesoinComponent} from "../tableau-besoin/tableau-besoin.component";
import {MatDialog} from "@angular/material/dialog";
import {MatTableModule} from "@angular/material/table";
import {FournisseurItem} from "../../controller/model/fournisseur-item.mpdel";
import {ExpressionBesoin} from "../../controller/model/expression-besoin.model";
import {TableauBesoin} from "../../controller/model/tableau-besoin.model";

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})

export class FournisseurComponent implements OnInit {
  panelOpenState = false;

  apiresponse: any = [];

  constructor(private DIALOG: MatDialog, private fournisseurService: FournisseurService, private servicesService: ServicesService) {
  }

  disableSelect = new FormControl(false);
  selected: any;
  selectedGame: any;

  ngOnInit(): void {
    this.fournisseurService.getTypes();
    this.fournisseurService.getTraiteesExpr();

  }
  get expressionBesoins(): Array<ExpressionBesoin> {
    return this.fournisseurService.expressionBesoins;
  }
  getFournisseursByType(selected: string) {
    return this.fournisseurService.getFournisseursByType(selected);
  }

  get fournisseurItems(): Array<FournisseurItem> {
    return this.fournisseurService.fournisseurItems;
  }


  get typesfournisseur(): Array<TypeFournisseur> {
    return this.fournisseurService.typesfournisseur;
  }

  addFournisseur(fournisseur: Fournisseur) {
    this.fournisseurService.addFourniseeur(fournisseur);
  }


  public hide(id: string) {
    document.getElementById(id).hidden = false;
  }


  unhidden() {
    document.getElementById("table").hidden = false;
  }

  saveTableauBesoinItem() {

  }

  fonction(event, f: FournisseurItem) {
    if (event.target.checked == true) {
      this.fournisseurService.selectFournisseur(f);
    }
  }

  get expressionBesoin(): ExpressionBesoin {
    return this.fournisseurService.expressionBesoin;
  }

  ExprEnvoyee() {
    this.fournisseurService.saveExprennvoye(this.expressionBesoin);
  }
  get tableauBesoin(): TableauBesoin {
    return this.fournisseurService.tableauBesoin;
  }
}
