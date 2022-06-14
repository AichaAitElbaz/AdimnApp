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
import {FournisseurComponent} from "../fournisseur/fournisseur.component";
import {EnCoursService} from "../../controller/service/en-cours.service";

@Component({
  selector: 'app-fournisseur',
  templateUrl: './typeFournisseur.component.html',
  styleUrls: ['./typeFournisseur.component.css']
})

export class TypeFournisseurComponent implements OnInit {
  panelOpenState = false;

  apiresponse:any=[];
  constructor(private enCoursService:EnCoursService,private DIALOG: MatDialog, private fournisseurService: FournisseurService, private servicesService: ServicesService) {
  }

  disableSelect = new FormControl(false);
  selected:any;
  selectedGame:any;

  ngOnInit(): void {
    this.fournisseurService.getTypes();
    // this.fournisseurService.getFournisseurs();
    console.log(this.selected+"hhhhhh")
  }

  getFournisseursByType(t:TypeFournisseur){
    return this.fournisseurService.getFournisseursByType(t);
  }

  get fournisseurItems(): Array<FournisseurItem> {
    return this.fournisseurService.fournisseurItems;
  }


  get typesfournisseur(): Array<TypeFournisseur> {
    return this.fournisseurService.typesfournisseur;
  }

  // addFournisseur(fournisseur: Fournisseur) {
  //   this.fournisseurService.addFourniseeur(fournisseur);
  // }
  navigate(component: string) {
    this.enCoursService.navigate(component)
  }


  get fournisseurItem(): FournisseurItem {
    return this.fournisseurService.fournisseurItem;
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


  unhidden() {
    document.getElementById("table").hidden=false;
  }

  saveTableauBesoinItem1() {

  }

  fonction($event: Event, f: FournisseurItem) {

  }

  openFournisseur() {
    this.DIALOG.open(FournisseurComponent, {
      height: '600px',
      width: '800px'
    })
  }
}
