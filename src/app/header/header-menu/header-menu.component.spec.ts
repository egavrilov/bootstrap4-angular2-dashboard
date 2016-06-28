/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { HeaderMenuComponent } from './header-menu.component';

describe('Component: HeaderMenu', () => {
  it('should create an instance', () => {
    let component = new HeaderMenuComponent();
    expect(component).toBeTruthy();
  });
});
