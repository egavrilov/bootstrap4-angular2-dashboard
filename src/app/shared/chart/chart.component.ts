import {Component, Inject, OnInit} from "@angular/core";
import {Http} from "@angular/http";
import * as d3 from "d3";
import "rxjs/add/operator/toPromise";

@Component({
  moduleId: module.id,
  selector: 'app-chart',
  templateUrl: 'chart.component.html',
  styleUrls: ['chart.component.css']
})
export class ChartComponent implements OnInit {
  private axis = {
    xStart: 0,
    xEnd: 100,
    xInterval: 10,
    yStart: 0,
    yEnd: 100
  };
  private data = [];

  private timeformat = '%d-%b-%y';
  private url = '/data.csv';

  constructor(@Inject(Http) private http:Http) {
    // this.ex();
  }

  ngOnInit():Promise<any> {
    return this.http.get(this.url)
      .toPromise()
      .then( response => {
        console.log(response);
        this.data = d3.csvParse(response);
      })
      .then(this.placeSVG)
  }


  placeSVG() {
    console.log(d3);
    console.log(this);
  }

  timeChart(dates) {
    this.axis.xStart = dates[0];
    this.axis.xEnd = dates.slice(-1)[0];
    this.axis.xInterval = dates[1] - dates[0];

    // this.timeAxis();
  }

  // timeAxis(){
  //   console.log('Start time axis');
  //   return d3.scaleTime()
  //     .domain([this.axis.xStart, this.axis.xEnd])
  //     .range([this.axis.xInterval * this.dates.length])
  // }
}
