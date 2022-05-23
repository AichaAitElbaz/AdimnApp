import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Fournisseur} from "../model/fournisseur.model";
import {TypeFournisseur} from "../model/type-fournisseur.mpdel";

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
private _fournisseur:Fournisseur;
private _fournisseurs:Array<Fournisseur>;
private _typesfournisseur:Array<TypeFournisseur>;
  constructor(private http:HttpClient) { }


public getTypes(){
    this.http.get<Array<TypeFournisseur>>("http://localhost:8096/v1/admin/type-fournisseur/").subscribe(
      data=>{
        this.typesfournisseur=[...data];
        console.log(data)
      }
    )
}

public getFournisseurs(){
    this.http.get<Array<Fournisseur>>(  "http://localhost:8096/v1/admin/fournisseur/").subscribe(
      data=>{
        this.fournisseurs=[...data];
      }

    )
}


  get fournisseurs(): Array<Fournisseur> {
    if (this._fournisseurs==null)this._fournisseurs=new Array<Fournisseur>();
    return this._fournisseurs;
  }

  set fournisseurs(value: Array<Fournisseur>) {
    this._fournisseurs = value;
  }

  get fournisseur(): Fournisseur {
    if (this._fournisseur==null)this._fournisseur=new Fournisseur();
    return this._fournisseur;
  }

  set fournisseur(value: Fournisseur) {
    this._fournisseur = value;
  }

  get typesfournisseur(): Array<TypeFournisseur> {
    if (this._typesfournisseur==null)this._typesfournisseur=new Array<TypeFournisseur>();
    return this._typesfournisseur;
  }

  set typesfournisseur(value: Array<TypeFournisseur>) {
    this._typesfournisseur = value;
  }

  addFourniseeur(fournisseur:Fournisseur) {
    this.http.post("http://localhost:8096/v1/admin/fournisseur/",fournisseur).subscribe(
      data=>{

      }
    )
  }
}
