import {Component, OnInit} from '@angular/core';
import {GatewayService} from "@services/gateway.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'FGSC-ANGULAR-CLIENT';
  previousConnectionState: boolean = true;
  constructor() {
  }

  async ngOnInit(): Promise<void> {

  }
}
