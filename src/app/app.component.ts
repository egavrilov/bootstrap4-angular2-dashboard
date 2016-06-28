import { Component, ViewEncapsulation } from '@angular/core';
import {HeaderComponent} from './header';
import {ChartComponent} from './shared';
import * as moment from 'moment';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [HeaderComponent, ChartComponent]
})
export class AppComponent {
  title = 'app works!';
}
