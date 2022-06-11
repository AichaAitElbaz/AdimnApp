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


  get user(): User {
    if(this._user==null){this._user=new User();}
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }
}
