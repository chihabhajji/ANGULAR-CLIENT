import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  constructor() { }

  ngOnInit(): void {
    document.getElementsByTagName("body")[0].classList.add("index-page");
  }
  ngOnDestroy() {
    document.getElementsByTagName("body")[0].classList.remove("index-page");
  }

}
