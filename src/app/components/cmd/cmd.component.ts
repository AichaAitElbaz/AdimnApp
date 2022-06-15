import {Component, OnInit} from '@angular/core';
import {EnAttenteItemsComponent} from "../en-attente-items/en-attente-items.component";
import {DialogComponent} from "../dialog/dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {BonCmdComponent} from "../bon-cmd/bon-cmd.component";
import {CmdService} from "../../controller/service/cmd.service";
import {Rubrique} from "../../controller/model/rubrique.model";
import {Exercice} from "../../controller/model/exercice.model";
import {Commande} from "../../controller/model/commande.model";
import {Chapitre} from "../../controller/model/chapitre.model";
import {ExpressionBesoinItem} from "../../controller/model/expression-besoin-item.model";
import {Article} from "../../controller/model/article.model";
import {Paragraphe} from "../../controller/model/paragraphe.model";
import {Ligne} from "../../controller/model/ligne.model";

@Component({
  selector: 'app-cmd',
  templateUrl: './cmd.component.html',
  styleUrls: ['./cmd.component.css']
})
export class CmdComponent implements OnInit {

  constructor(private DIALOG: MatDialog, private cmdService: CmdService) {
  }

  ngOnInit(): void {
    this.cmdService.getExercices();
  }

  get chapitres(): Array<Chapitre> {
    return this.cmdService.chapitres;
  }

  get cmd(): Commande {
    return this.cmdService.cmd;
  }

  get rubriques(): Rubrique[] {
    return this.cmdService.rubriques;
  }

  get exercices(): Exercice[] {
    return this.cmdService.exercices;
  }

  get exercice(): Exercice {
    return this.cmdService.exercice;
  }

  get chapitre(): Chapitre {
    return this.cmdService.chapitre;
  }

  get articles(): Array<Article> {
    return this.cmdService.articles;
  }

  public openDialog() {
    this.DIALOG.open(BonCmdComponent, {
      height: '700px',
      width: '800px'
    })
  }

  get paragraphes(): Paragraphe[] {
    return this.cmdService.paragraphes;
  }

  getArticles() {
    this.cmdService.getArticles();
  }

  get article(): Article {
    return this.cmdService.article;
  }

  getChapitresByExerciceRef() {
    this.cmdService.getChapitresByExerciceRef()
  }

  getParagraphes() {
    this.cmdService.getParagraphes();
  }

  get lignes(): Ligne[] {
    return this.cmdService.lignes;
  }

  get paragraphe(): Paragraphe {
    return this.cmdService.paragraphe;
  }
  get ligne(): Ligne {
    return this.cmdService.ligne;
  }
  getLignes() {
    this.cmdService.getLignes();
  }

  saveCommande(){
    this.cmdService.saveCommande();
  }
  getRubriques(){
    this.cmdService.getRubriques()
  }
  getTableauBesoinItemValidee(){
    this.cmdService.getTableauBesoinItemValidee();

  }

}
