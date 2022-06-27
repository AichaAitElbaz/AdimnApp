import {Attribute, Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ExpressionBesoinService} from "../../controller/service/expression-besoin.service";
import {ExpressionBesoin} from "../../controller/model/expression-besoin.model";
import {ExpressionBesoinItem} from "../../controller/model/expressionBesoinItem.model";
import {ServiceDemandeur} from "../../controller/model/serviceDemandeur.model";
import {Produit} from "../../controller/model/produit.model";
import {ExpressionBesoinItemService} from "../../controller/service/designation-item.service";
import {User} from "../../controller/model/user.model";
import Swal from 'sweetalert2'
import {NatureDemande} from "../../controller/model/natureDemande.model";

@Component({
  selector: 'app-expression-besoin',
  templateUrl: './expression-besoin.component.html',
  styleUrls: ['./expression-besoin.component.css']
})
export class ExpressionBesoinComponent implements OnInit {
  private currentDate = new Date();
//public   servicess:Array<ServiceDemandeur>=this.expressionBesoinService.findAllServices();
  registrationForm: FormGroup;


  displayedColumns: string[] = ['position', 'name',  'symbol'];
  dataSource = this.expressionBesoin.expressionBesoinItems;

  get expressionBesoin(): ExpressionBesoin {
    return this.expressionBesoinService.expressionBesoin;
  }

  constructor(private fb: FormBuilder, private expressionBesoinService: ExpressionBesoinService
              ,private expressionBesoinItemService:ExpressionBesoinItemService) {
  }

  get expressionBesoinItem(): ExpressionBesoinItem {
    return this.expressionBesoinService.expressionBesoinItem;
  }





  public getExpressionBesoinItem() {
    this.expressionBesoinService.getExpressionBesoinItems();
  }

  public save() {

    return this.expressionBesoinService.save();

    (<HTMLInputElement> document.getElementById("btn")).disabled = false;
    (<HTMLElement> document.getElementById("btn")).hidden=false;
  }

  AddAlternateDesignation() {
    this.alternateDesignation.push(this.fb.control(''))
  }

  get alternateDesignation() {
    return this.registrationForm.get('alternateDesignation') as FormArray;
  }
  deletefromlist(index:number){
    this.expressionBesoinService.deletefromlist(index);
  }
  update(index:number,expressionBesoinItem:ExpressionBesoinItem){
    this.expressionBesoinService.update(index,expressionBesoinItem);
  }
  imprimer(){
    this.expressionBesoinService.imprimer()
      console.log(this.expressionBesoinService.returnImp)
    Swal.fire('succes')

  }


  ngOnInit(): void {
    this.expressionBesoinService.loadedByUserName()
    this.registrationForm = this.fb.group({
      alternateDesignation: this.fb.array([])
    })
    this.expressionBesoinService.findAllservices();
    this.expressionBesoinService.findAllnatures();
    this.expressionBesoinService.getExpressionBesoins();
    this.expressionBesoinService.init();


  }
  get expressionBesoinItems(): Array<ExpressionBesoinItem> {
    return this.expressionBesoinService.expressionBesoinItems;
  }


  get services(): Array<ServiceDemandeur> {
    return this.expressionBesoinService.services;
  }



  getlistofExpressionBesoinItem(){
    this.expressionBesoinService.getlistofExpressionBesoinItem();

  }


  // public  setImprimerDesabled() {
  //
  // }

  get produit(): Produit {
    return this.expressionBesoinService.produit;
  }
  get user(): User {
    return this.expressionBesoinService.user;
  }


  get natureDemandes(): Array<NatureDemande> {
    return this.expressionBesoinService.natureDemandes;
  }


}
