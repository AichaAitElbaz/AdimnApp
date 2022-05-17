import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Fournisseur} from "../../controller/model/fournisseur.model";
import {FournisseurService} from "../../controller/service/fournisseur.service";

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {

  constructor(private fournisseurService: FournisseurService) {
  }

  ngOnInit(): void {
    this.fournisseurService.getFournisseurs();
  }

  get fournisseurs(): Array<Fournisseur> {
    return this.fournisseurService.fournisseurs;
  }
}
