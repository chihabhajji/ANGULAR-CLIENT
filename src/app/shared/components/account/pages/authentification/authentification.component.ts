import { Component, OnInit } from '@angular/core';
import { loadScript } from '@shared/_helpers/loaderScript';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    loadScript("assets/js/pages/examples/login-register.js")
  }

}
