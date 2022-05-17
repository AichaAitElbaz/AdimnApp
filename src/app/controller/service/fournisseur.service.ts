import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Fournisseur} from "../model/fournisseur.model";

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
private _fournisseurs:Array<Fournisseur>
  constructor(private http:HttpClient) { }

  public getFournisseurs(){
    this.http.get<Array<Fournisseur>>("http://localhost:8096/v1/admin/fournisseur/").subscribe(
      data=>{
        this.fournisseurs=[...data];
        console.log(data)
      }
    )  }

  get fournisseurs(): Array<Fournisseur> {
  if (this._fournisseurs==null)this._fournisseurs=new Array<Fournisseur>()
    return this._fournisseurs;
  }

  set fournisseurs(value: Array<Fournisseur>) {
    this._fournisseurs = value;
  }
}
