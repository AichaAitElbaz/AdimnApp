import { Component, OnInit } from '@angular/core';
import {ExpressionBesoin} from "../../controller/model/expression-besoin.model";
import {ArchiveeService} from "../../controller/service/archivee.service";
import {EnCoursService} from "../../controller/service/en-cours.service";
import {User} from "../../controller/model/user.model";
import {EnAttenteService} from "../../controller/service/en-attente.service";

@Component({
  selector: 'app-archivee',
  templateUrl: './archivee.component.html',
  styleUrls: ['./archivee.component.css']
})
export class ArchiveeComponent implements OnInit {

  constructor(private enCoursService:EnCoursService,private enAttenteService:EnAttenteService) { }

  ngOnInit(): void {
    this.enCoursService.getExpressionBesoinsArchivee();
    this.enCoursService.affecter();
  }
  get expressionBesoins(): Array<ExpressionBesoin> {
    return this.enCoursService.expressionBesoins;
  }

  get user(): User {
    return this.enCoursService.user;
  }

  save(expressionBesoin: ExpressionBesoin) {
    this.enAttenteService.save(expressionBesoin);
  }
}
