/*
 * Filename: c:\Capgemini\Courses\angular\comps\src\app\elements\elements.module.ts
 * Path: c:\Capgemini\Courses\angular\comps
 * Created Date: Wednesday, March 29th 2023, 8:19:42 am
 * Author: vlopesle
 *
 * Copyright (c) 2023 Your Company
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { TimesDirective } from './times.directive';

@NgModule({
  declarations: [ElementsHomeComponent, PlaceholderComponent, TimesDirective],
  imports: [CommonModule, ElementsRoutingModule, SharedModule],
})
export class ElementsModule {}
