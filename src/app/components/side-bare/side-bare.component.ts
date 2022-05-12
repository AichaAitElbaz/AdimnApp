import { Component, OnInit } from '@angular/core';
import {navbarData} from "./nav-data";

@Component({
  selector: 'app-side-bare',
  templateUrl: './side-bare.component.html',
  styleUrls: ['./side-bare.component.css']
})
export class SideBareComponent implements OnInit {
collapsed=true;
navData=navbarData;
  constructor() { }

  ngOnInit(): void {
  }

}
