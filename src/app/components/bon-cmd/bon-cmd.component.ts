import { Component, OnInit } from '@angular/core';
import {TableauBesoinItem} from "../../controller/model/tableau-besoin-item.model";
import {TableauBesoinService} from "../../controller/service/tableau-besoin.service";
import {CmdService} from "../../controller/service/cmd.service";

@Component({
  selector: 'app-bon-cmd',
  templateUrl: './bon-cmd.component.html',
  styleUrls: ['./bon-cmd.component.css']
})
export class BonCmdComponent implements OnInit {

  constructor(private cmdService:CmdService) { }

  ngOnInit(): void {
    this.cmdService.getReponseSelectionne();
  }
  get reposeSelectionee(): TableauBesoinItem {
    return this.cmdService.reposeSelectionee;
  }
}
