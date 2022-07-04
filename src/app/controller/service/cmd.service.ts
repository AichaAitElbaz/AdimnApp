import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TableauBesoinItem} from "../model/tableau-besoin-item.model";
import {TableauBesoin} from "../model/tableau-besoin.model";
import {ExpressionBesoinItem} from "../model/expression-besoin-item.model";
import {Rubrique} from "../model/rubrique.model";
import {Exercice} from "../model/exercice.model";
import {Commande} from "../model/commande.model";
import {Chapitre} from "../model/chapitre.model";
import {Article} from "../model/article.model";
import {Paragraphe} from "../model/paragraphe.model";
import {Ligne} from "../model/ligne.model";
import {Fournisseur} from "../model/fournisseur.model";
import {TableauBesoinService} from "./tableau-besoin.service";

@Injectable({
  providedIn: 'root'

})
export class CmdService {
  private _tableauBesoinItem = new TableauBesoinItem()
  private _foundedtableauBesoinItem = new TableauBesoinItem()
  private _tableauBesoinItems = new Array<TableauBesoinItem>()
  private _tableauBesoinItemsEnAttenteLaivraison = new Array<TableauBesoinItem>()
  private _tableauBesoinItemDetail = new TableauBesoinItem()
  private _rubrique = new Rubrique();
  private _rubriques = new Array<Rubrique>();
  private _exercices = new Array<Exercice>();
  private _exercice = new Exercice();
  private _cmd = new Commande();
  private _foundedcmd = new Commande();
  private _chapitres: Array<Chapitre>;
  private _article = new Article();
  private _articles = new Array<Article>();
  private _chapitre = new Chapitre();
  private _paragraphe = new Paragraphe();
  private _paragraphes = new Array<Paragraphe>();
  private _ligne = new Ligne();
  private _lignes = new Array<Ligne>();
  private _cmdsAttLaivr = new Array<Commande>();
  private _cmdsLaivrees = new Array<Commande>();
  private _cmdsEnAttPaiemenet = new Array<Commande>();
  private _cmdsEnAttVirement = new Array<Commande>();
  private _cmdsPayees = new Array<Commande>();
  private _cmdsTerminees = new Array<Commande>();

  constructor(private http: HttpClient,private tableauBesoinService:TableauBesoinService) {
  }


  get cmdsTerminees(): Commande[] {
    return this._cmdsTerminees;
  }

  set cmdsTerminees(value: Commande[]) {
    this._cmdsTerminees = value;
  }

  get cmdsEnAttVirement(): Commande[] {
    return this._cmdsEnAttVirement;
  }

  set cmdsEnAttVirement(value: Commande[]) {
    this._cmdsEnAttVirement = value;
  }

  get cmdsPayees(): Commande[] {
    return this._cmdsPayees;
  }

  set cmdsPayees(value: Commande[]) {
    this._cmdsPayees = value;
  }

  get cmdsEnAttPaiemenet(): Commande[] {
    return this._cmdsEnAttPaiemenet;
  }

  set cmdsEnAttPaiemenet(value: Commande[]) {
    this._cmdsEnAttPaiemenet = value;
  }

  get cmdsLaivrees(): Commande[] {
    return this._cmdsLaivrees;
  }

  set cmdsLaivrees(value: Commande[]) {
    this._cmdsLaivrees = value;
  }

  get foundedcmd(): Commande {
    return this._foundedcmd;
  }

  set foundedcmd(value: Commande) {
    this._foundedcmd = value;
  }

  get cmdsAttLaivr(): Commande[] {
    return this._cmdsAttLaivr;
  }

  set cmdsAttLaivr(value: Commande[]) {
    this._cmdsAttLaivr = value;
  }

  get foundedtableauBesoinItem(): TableauBesoinItem {
    return this._foundedtableauBesoinItem;
  }

  set foundedtableauBesoinItem(value: TableauBesoinItem) {
    this._foundedtableauBesoinItem = value;
  }

  get tableauBesoinItemsEnAttenteLaivraison(): TableauBesoinItem[] {
    return this._tableauBesoinItemsEnAttenteLaivraison;
  }

  set tableauBesoinItemsEnAttenteLaivraison(value: TableauBesoinItem[]) {
    this._tableauBesoinItemsEnAttenteLaivraison = value;
  }

  get tableauBesoinItems(): TableauBesoinItem[] {
    return this._tableauBesoinItems;
  }

  set tableauBesoinItems(value: TableauBesoinItem[]) {
    this._tableauBesoinItems = value;
  }

  get tableauBesoinItemDetail(): TableauBesoinItem {
    return this._tableauBesoinItemDetail;
  }

  set tableauBesoinItemDetail(value: TableauBesoinItem) {
    this._tableauBesoinItemDetail = value;
  }

  get rubrique(): Rubrique {
    return this._rubrique;
  }

  set rubrique(value: Rubrique) {
    this._rubrique = value;
  }

  get tableauBesoinItem(): TableauBesoinItem {
    return this._tableauBesoinItem;
  }

  set tableauBesoinItem(value: TableauBesoinItem) {
    this._tableauBesoinItem = value;
  }


  get exercices(): Exercice[] {
    return this._exercices;
  }

  set exercices(value: Exercice[]) {
    this._exercices = value;
  }

  get cmd(): Commande {
    return this._cmd;
  }

  set cmd(value: Commande) {
    this._cmd = value;
  }

  get chapitres(): Array<Chapitre> {
    return this._chapitres;
  }

  set chapitres(value: Array<Chapitre>) {
    this._chapitres = value;
  }

  get exercice(): Exercice {
    return this._exercice;
  }

  set exercice(value: Exercice) {
    this._exercice = value;
  }

  get article(): Article {
    return this._article;
  }

  set article(value: Article) {
    this._article = value;
  }

  get chapitre(): Chapitre {
    return this._chapitre;
  }

  set chapitre(value: Chapitre) {
    this._chapitre = value;
  }

  get paragraphe(): Paragraphe {
    return this._paragraphe;
  }

  set paragraphe(value: Paragraphe) {
    this._paragraphe = value;
  }

  get ligne(): Ligne {
    return this._ligne;
  }

  set ligne(value: Ligne) {
    this._ligne = value;
  }

  get articles(): Article[] {
    return this._articles;
  }

  set articles(value: Article[]) {
    this._articles = value;
  }

  get paragraphes(): Paragraphe[] {
    return this._paragraphes;
  }

  set paragraphes(value: Paragraphe[]) {
    this._paragraphes = value;
  }

  get lignes(): Ligne[] {
    return this._lignes;
  }

  set lignes(value: Ligne[]) {
    this._lignes = value;
  }

  get rubriques(): Rubrique[] {
    return this._rubriques;
  }

  set rubriques(value: Rubrique[]) {
    this._rubriques = value;
  }

  getTableauBesoinItemValidee() {
    this.http.get<Array<TableauBesoinItem>>("http://localhost:8096/v1/admin/tableau-besoin-item/statut/validee").subscribe(
      data => {
        this.tableauBesoinItems = [...data];
        this.tableauBesoinItems.forEach(t => {
          this.tableauBesoinItem = t;
          this.cmd.tableauBesoinItem = t;
          console.log(this.tableauBesoinItem)
        })
      }
    )
  }


  saveRubrique(rubrique: Rubrique) {
    this.http.post("http://localhost:8096/v1/admin/rubrique/", rubrique).subscribe(
      data => {

      }
    )
  }

  getExercices() {
    this.http.get<Array<Exercice>>("http://localhost:8096/v1/admin/exercice/").subscribe(
      data => {
        this.exercices = [...data];

      }
    )
  }

  getChapitresByExerciceRef() {
    console.log(this.exercice)
    this.http.get<Array<Chapitre>>("http://localhost:8096/v1/admin/chapitre/libelleExercice/" + this.exercice.libelle).subscribe(
      data => {
        this.chapitres = [...data]

      }
    )
  }

  getArticles() {
    this.http.get<Array<Article>>("http://localhost:8096/v1/admin/article/libelleChapitre/" + this.chapitre.libelle).subscribe(
      data => {
        this.articles = [...data]
      }
    )
  }

  getParagraphes() {
    this.http.get<Array<Paragraphe>>("http://localhost:8096/v1/admin/paragraphe/libelleArticle/" + this.article.libelle).subscribe(
      data => {
        this.paragraphes = [...data]
        console.log(this.article.libelle)
        console.log(this.paragraphes)
      })
  }

  getLignes() {
    this.http.get<Array<Ligne>>("http://localhost:8096/v1/admin/ligne/libelleParagraphe/" + this.paragraphe.libellePara).subscribe(
      data => {
        this.lignes = [...data]
      }
    )
  }

  getRubriques() {
    this.http.get<Array<Rubrique>>("http://localhost:8096/v1/admin/rubrique/ligneLibelle/" + this.ligne.libelle).subscribe(
      data => {
        this.rubriques = [...data]
        console.log(this.rubrique)
      }
    )
  }

  saveCommande() {
    this.cmd.tableauBesoinItem = this.tableauBesoinService.reponseSelectionnee;
    this.cmd.exercice = this.exercice.libelle;
    this.cmd.rubrique = this.rubrique;
    this.cmd.rubrique.ligne = this.ligne;
    this.cmd.rubrique.ligne.paragraphe = this.paragraphe;
    this.cmd.rubrique.ligne.paragraphe.article = this.article;
    this.cmd.rubrique.ligne.paragraphe.article.chapitre = this.chapitre;
  }

  savebnCommande(cmd: Commande) {
    this.http.post("http://localhost:8096/v1/admin/commande/", this.cmd).subscribe(
      data => {

      }
    )
  }

  findTableauBesoinItemByTabAndFournisseur(tableauBesoin: TableauBesoin, fournisseur: Fournisseur) {
    this.http.get<TableauBesoinItem>("http://localhost:8096/v1/admin/tableau-besoin-item/tableauBesoin/fournisseur/" + tableauBesoin.reference + "/" + fournisseur.referenceFournisseur).subscribe(
      data => {
        this.tableauBesoinItemDetail = data;
        console.log(this.tableauBesoinItemDetail)
      }
    )
  }

  getCommandeEnattenteLivraison() {
    this.http.get<Array<Commande>>("http://localhost:8096/v1/admin/commande/statut/envoyee").subscribe(
      data => {
        this.cmdsAttLaivr = [...data]
      }
    )

  }
  getCommandeEnattenteVirement() {
    this.http.get<Array<Commande>>("http://localhost:8096/v1/admin/commande/statut/payee").subscribe(
      data => {
        this.cmdsEnAttVirement = [...data]
      }
    )
  }
  getCommandeEnattentePaiemant() {
    this.http.get<Array<Commande>>("http://localhost:8096/v1/admin/commande/statut/laivree").subscribe(
      data => {
        this.cmdsAttLaivr = [...data]
      }
    )
  }

  findTableauBesoinItemByRef(ref: string) {
    this.http.get<TableauBesoinItem>("http://localhost:8096/v1/admin/tableau-besoin-item/reference/" + ref).subscribe(
      data => {
        this.foundedtableauBesoinItem = data;
      }
    )
  }

  findCmdByCode(cmd: Commande) {
    this.http.get<Commande>("http://localhost:8096/v1/admin/commande/code/" + cmd.code).subscribe(
      data => {
        this.foundedcmd = data;

      }
    )
    this.tableauBesoinService.findItemsByTableauBeosinItemRef(cmd.tableauBesoinItem.reference)
  }

  updateCmdStatue(cmds: Array<Commande>, statut: string) {
    cmds.forEach(cmd => {
      this.http.put("http://localhost:8096/v1/admin/commande/update/statut/" + statut, cmd).subscribe(
        data => {
        }
      )
    })

  }

  getCmdsAttPaiement() {
    this.http.get<Array<Commande>>("http://localhost:8096/v1/admin/commande/statut/laivree").subscribe(
      data => {
        this.cmdsEnAttPaiemenet = [...data]
      }
    )
  }

  getCmdsTerminees() {
    this.http.get<Array<Commande>>("http://localhost:8096/v1/admin/commande/statut/terminee").subscribe(
      data => {
        this.cmdsTerminees = [...data]
      }
    )
  }

  sendBnReception() {

  }
}
