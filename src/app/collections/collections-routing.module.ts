import { NgModule } from '@angular/core';
/*
 * Filename: c:\Capgemini\Courses\angular\comps\src\app\collections\collections-routing.module.ts
 * Path: c:\Capgemini\Courses\angular\comps
 * Created Date: Wednesday, March 29th 2023, 8:19:26 am
 * Author: vlopesle
 *
 * Copyright (c) 2023 Your Company
 */

import { RouterModule, Routes } from '@angular/router';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionsHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionsRoutingModule {}
