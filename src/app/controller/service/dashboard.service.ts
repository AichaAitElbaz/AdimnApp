import { Injectable } from '@angular/core';
import {ExpressionBesoin} from "../model/expression-besoin.model";
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private _user:User;


  constructor(private http:HttpClient) {

  }
  public getNumberOfUsers(){
    return this.http.get<number>("http://localhost:8096/v1/admin/user/users")
  }
  public getNumberOfExpressionBesoinEnAttente(){
    return this.http.get<number>("http://localhost:8096/v1/admin/expression-besoin/microservice/getNumberOfExpressionBesoinEnAttente")
  }
  public getnbrOfCommande(){
    return this.http.get<number>("http://localhost:8096/v1/admin/commande/getnbrOfCommande")
  }


  public get_statistic_graph_mois(e1:string,e2:string,e3:string,e4:string,e5:string,e6:string,e7:string,e8:string,e9:string,e10:string,e11:string,e12:string){
    return this.http.get<Array<number>>("http://localhost:8096/v1/admin/expression-besoin/monthv2?e1="+e1+"&e2="+e2+"&e3="+e3+"&e4="+e4+"&e5="+e5+"&e6="+e6+"&e7="+e7+"&e8="+e8+"&e9="+e9+"&e10="+e10+"&e11="+e11+"&e12="+e12)
  }


  get user(): User {
    if(this._user==null){this._user=new User();}
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }
}
