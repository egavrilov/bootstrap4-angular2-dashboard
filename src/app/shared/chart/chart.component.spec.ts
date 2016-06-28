/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Http } from '@angular/http';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ChartComponent } from './chart.component';

describe('Component: Chart', () => {
  it('should create an instance', () => {
    inject([Http], (http:Http) => {
      let component = new ChartComponent(http);
      expect(component).toBeTruthy();
    });
  });
});
