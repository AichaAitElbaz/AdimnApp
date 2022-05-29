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
import {ExpressionBesoinItem} from "../../controller/model/expression-besoin-item.model";

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})

export class FournisseurComponent implements OnInit {
  panelOpenState = false;

  constructor(private DIALOG: MatDialog, private fournisseurService: FournisseurService, private servicesService: ServicesService) {
  }

  disableSelect = new FormControl(false);

  ngOnInit(): void {
    this.fournisseurService.getTypes();
    this.fournisseurService.getFournisseurs();
    this.fournisseurService.getItemsValidée();
  }

  getfournisseurs():Array<Fournisseur>  {
    return this.fournisseurService.fournisseurs;
  }

  get typesfournisseur(): Array<TypeFournisseur> {
    return this.fournisseurService.typesfournisseur;
  }

  addFournisseur(fournisseur: Fournisseur) {
    this.fournisseurService.addFourniseeur(fournisseur);
  }

  get fournisseurs(): Array<Fournisseur> {
    return this.fournisseurService.fournisseurs;
  }

  public hide(id: string) {
    document.getElementById(id).hidden = false;
  }

  openTableauBesoin() {
    this.DIALOG.open(TableauBesoinComponent, {
      height: '500px',
      width: '600px'
    })
  }

  public getFournisseursByType(typeFournisseur: TypeFournisseur) {
    this.fournisseurService.getFournisseursByType(typeFournisseur);
  }

  public fonction(event, fournisseur: Fournisseur) {
    if (event.target.checked) {

      this.itemsValidee.forEach(e=>
      {e.fournisseurs.push(fournisseur);
      this.fournisseurService.saveitem(e);
        console.log(e)
      });
    } else {
    }
    ;
  }
  get itemsValidee(): Array<ExpressionBesoinItem> {
    return this.fournisseurService.itemsValidee;
  }

  saveTableauBesoinItem() {
    this.fournisseurService.saveTableauBesoinItem(this.itemsValidee);
  }
}
