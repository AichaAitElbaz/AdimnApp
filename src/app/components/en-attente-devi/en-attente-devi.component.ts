import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../controller/model/user.model";

@Component({
  selector: 'app-en-attente-devi',
  templateUrl: './en-attente-devi.component.html',
  styleUrls: ['./en-attente-devi.component.scss']
})
export class EnAttenteDeviComponent  {

@Input() collapsed=false;
@Input() screenWidth=0;


  getBodyClass():string{
    let styleClass='';
    if (this.collapsed && this.screenWidth>768){
      styleClass='body-trimmed'
    }else if (this.collapsed && this.screenWidth<=768 && this.screenWidth>0){
      styleClass='body-md-screen'
    }
return styleClass;
  }
}
