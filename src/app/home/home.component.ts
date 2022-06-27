import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private Router: Router) {
  }

  ngOnInit(): void {
  }
  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;
  navigate(component:String) {
    this.Router.navigate([component]);
  }
}
