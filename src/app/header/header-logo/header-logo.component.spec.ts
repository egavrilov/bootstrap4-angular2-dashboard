/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { HeaderLogoComponent } from './header-logo.component';

describe('Component: HeaderLogo', () => {
  it('should create an instance', () => {
    let component = new HeaderLogoComponent();
    expect(component).toBeTruthy();
  });
});
