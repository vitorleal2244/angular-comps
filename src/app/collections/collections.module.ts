/*
 * Filename: c:\Capgemini\Courses\angular\comps\src\app\collections\collections.module.ts
 * Path: c:\Capgemini\Courses\angular\comps
 * Created Date: Wednesday, March 29th 2023, 8:19:26 am
 * Author: vlopesle
 *
 * Copyright (c) 2023 Your Company
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';

@NgModule({
  declarations: [CollectionsHomeComponent],
  imports: [CommonModule, CollectionsRoutingModule],
})
export class CollectionsModule {}
