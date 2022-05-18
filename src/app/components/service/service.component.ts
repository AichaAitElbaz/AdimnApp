import {Component, OnInit} from '@angular/core';
import {EnAttenteService} from "../../controller/service/en-attente.service";
import {ServiceDemandeur} from "../../controller/model/service-demandeur.model";
import {ServicesService} from "../../controller/service/services.service";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],


})
export class ServiceComponent implements OnInit {
  private serviceDemandeur: ServiceDemandeur;

  constructor(private enAttenteService: EnAttenteService, private servicesService: ServicesService) {
  }


  ngOnInit(): void {
    this.enAttenteService.getServices();

  }

  get services(): Array<ServiceDemandeur> {
    return this.enAttenteService.services;
  }


  vidertabService(i: number) {
    this.enAttenteService.vidertabService(i);
  }

  deleteService(serviceDemandeur: ServiceDemandeur) {
    this.enAttenteService.deleteService(serviceDemandeur);
  }

  public setinputDesabled() {

    (<HTMLInputElement>document.getElementById("btn")).hidden = false;
    (<HTMLElement>document.getElementById("in")).hidden = false;
  }

  // updateService(serviceDemandeur: ServiceDemandeur,nomService:string) {
  //   this.enAttenteService.updateService(serviceDemandeur,nomService);
  // }
  public saveService(serviceDemandeur:ServiceDemandeur) {
    console.log(serviceDemandeur.nom)
    this.enAttenteService.saveService(serviceDemandeur);
  }

  get service(): ServiceDemandeur {
    return this.enAttenteService.service;
  }

  updateService(serviceDemandeur:ServiceDemandeur) {
    this.enAttenteService.updateService(serviceDemandeur);
  }

  addrow(x: string) {
    var table = document.getElementById(x);
    table.innerHTML += document.getElementById("newrow");
  }

  public save(serviceDemandeur: ServiceDemandeur) {
    this.servicesService.save(serviceDemandeur);
  }

  setinputvisible() {
    document.getElementById("input").hidden=false;
    document.getElementById("addbtn").hidden=false;
  }
}
