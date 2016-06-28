/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ChartComponent } from './chart.component';

describe('Component: Chart', () => {
  it('should create an instance', () => {
    let component = new ChartComponent();
    expect(component).toBeTruthy();
  });
});
