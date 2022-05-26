import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {navbarData} from "./nav-data";
interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}
@Component({
  selector: 'app-side-bare',
  templateUrl: './side-bare.component.html',
  styleUrls: ['./side-bare.component.scss']
})
export class SideBareComponent  {
  active = 1;
}
