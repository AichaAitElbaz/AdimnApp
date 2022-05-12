import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ExpressionBesoin} from "../model/expression-besoin.model";

@Injectable({
  providedIn: 'root'
})
export class EnAttenteService {
private _expressionBesoins:Array<ExpressionBesoin>
  constructor(private http: HttpClient) { }


  public getAllExpressionBesois(){
  this.http.get<Array<ExpressionBesoin>>("http://localhost:8095/v1/admin/expression-besoin/").subscribe(
    data=>{
      this.expressionBesoins=[...data]
    }
  )
}

  get expressionBesoins(): Array<ExpressionBesoin> {
  if (this._expressionBesoins==null){
    this._expressionBesoins=new Array<ExpressionBesoin>();
  }
    return this._expressionBesoins;
  }

  set expressionBesoins(value: Array<ExpressionBesoin>) {
    this._expressionBesoins = value;
  }
}
