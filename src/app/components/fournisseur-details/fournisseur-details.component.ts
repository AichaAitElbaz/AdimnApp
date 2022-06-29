import { Component, OnInit } from '@angular/core';
import {Fournisseur} from "../../controller/model/fournisseur.model";
import {FournisseurService} from "../../controller/service/fournisseur.service";

@Component({
  selector: 'app-fournisseur-details',
  templateUrl: './fournisseur-details.component.html',
  styleUrls: ['./fournisseur-details.component.css']
})
export class FournisseurDetailsComponent implements OnInit {

  constructor(private fournisseurService:FournisseurService) { }

  ngOnInit(): void {
  }
  get fournisseur(): Fournisseur {
    return this.fournisseurService.fournisseur;
  }
}
