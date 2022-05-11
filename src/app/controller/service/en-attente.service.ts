import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ExpressionBesoin} from "../model/expression-besoin.model";

@Injectable({
  providedIn: 'root'
})
export class EnAttenteService {
private expressionBesoins:Array<ExpressionBesoin>
  constructor(private http: HttpClient) { }
  htt
}
