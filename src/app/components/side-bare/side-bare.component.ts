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
  @Output() onToggleSideNav: EventEmitter<SideNavToggle>=new EventEmitter()
collapsed=false;
  scrreenWidth=0;
navData=navbarData;
  constructor() { }


  closeSidenav():void{
this.collapsed=false;
  }

  toggleCollapse():void {
this.collapsed=!this.collapsed;
this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.scrreenWidth});
  }
}
