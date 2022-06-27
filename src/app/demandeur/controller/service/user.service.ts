import { Injectable } from '@angular/core';
import {User} from "../model/user.model";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "./token.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user:User;

  constructor(private  http:HttpClient , private token:TokenService) { }

  get user(): User {
    if(this._user==null) this._user=new User();
    return this._user;
  }


  public getUsername(): string {
    const tokenDecoded = this.token.decode();
    return tokenDecoded.sub;
  }
  set user(value: User) {
    this._user = value;
  }

  public getUserInfo(){
    return this.http.get<User>("http://localhost:8095/v1/admin/user/load/username/"+this.getUsername()).subscribe(
      data =>{
        console.log(data);

      },error => {
        console.log("error");
      }

    )
  }
}
