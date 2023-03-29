/*
 * Filename: c:\Capgemini\Courses\angular\comps\src\app\shared\shared.module.ts
 * Path: c:\Capgemini\Courses\angular\comps
 * Created Date: Wednesday, March 29th 2023, 9:10:56 am
 * Author: vlopesle
 *
 * Copyright (c) 2023 Your Company
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './divider/divider.component';

@NgModule({
  declarations: [DividerComponent],
  imports: [CommonModule],
  exports: [DividerComponent],
})
export class SharedModule {}
