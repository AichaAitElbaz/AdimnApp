import { Component, OnInit } from '@angular/core';
import {NgbNavConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-up-bare',
  templateUrl: './up-bare.component.html',
  styleUrls: ['./up-bare.component.css'],
  providers: [NgbNavConfig]
})
export class UpBareComponent implements OnInit {

  constructor(config: NgbNavConfig) {
    // customize default values of navs used by this component tree
    config.destroyOnHide = false;
    config.roles = false;
  }


  ngOnInit(): void {
  }

}



