import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() colspan: number = 1;
  @Input() rowspan: number = 1;
  @Input() title: string = '';
  @Input() chartType: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
