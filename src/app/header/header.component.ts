import {Component, OnInit} from "@angular/core";
import {HeaderLogoComponent} from "./header-logo";
import {HeaderMenuComponent} from './header-menu';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  directives: [HeaderLogoComponent, HeaderMenuComponent]
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
