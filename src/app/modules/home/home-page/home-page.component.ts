import {Component, OnInit} from '@angular/core';
// @ts-ignore
import anime from 'animejs/lib/anime.es.js';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    let lineOne, lineTwo, lineThree, lineFour, lineFive;
    lineOne = document.querySelector(".text-1");
    lineTwo = document.querySelector(".text-2");
    lineThree = document.querySelector(".text-3");
    lineFour = document.querySelector(".text-4");
    lineFive = document.querySelector(".text-5");

    let tl = anime.timeline({
      delay: 0,
      easing: "easeOutExpo",
      direction: "alternate",
      loop: true
    });

    tl.add(
      {
        duration: 700,
        targets: lineOne,
        translateX: -75,
        opacity: 0
      },
      400
    );

    tl.add({
      duration: 700,
      targets: lineOne,
      height: 175,
      opacity: 1
    });
    tl.add(
      {
        duration: 100,
        targets: lineTwo,
        translateX: -75,
        opacity: 0
      },
      "+=500"
    );
    tl.add({
      duration: 700,
      targets: lineTwo,
      width: 150,
      opacity: 1
    });
    tl.add({
      duration: 700,
      targets: lineThree,
      height: 200,
      opacity: 1
    });
    tl.add({
      duration: 100,
      targets: lineFour,
      translateX: 75,
      opacity: 0
    });
    tl.add({
      duration: 700,
      translateY: 45,
      translateX: 75,
      targets: lineFour,
      height: 100,
      opacity: 1
    });
    tl.add({
      duration: 100,
      targets: lineFive,
      translateX: 75,
      opacity: 0
    });
    tl.add({
      duration: 700,
      targets: lineFive,
      translateX: 75,
      translateY: -60,
      opacity: 1
    });
  }

}
