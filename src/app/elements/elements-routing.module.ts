import { NgModule } from '@angular/core';
/*
 * Filename: c:\Capgemini\Courses\angular\comps\src\app\elements\elements-routing.module.ts
 * Path: c:\Capgemini\Courses\angular\comps
 * Created Date: Wednesday, March 29th 2023, 8:19:42 am
 * Author: vlopesle
 *
 * Copyright (c) 2023 Your Company
 */

import { RouterModule, Routes } from '@angular/router';
import { ElementsHomeComponent } from './elements-home/elements-home.component';

const routes: Routes = [
  {
    path: '',
    component: ElementsHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElementsRoutingModule {}
