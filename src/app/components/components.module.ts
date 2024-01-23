// components.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from "ngx-pagination";
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    PaginationComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  exports: [
    PaginationComponent
  ]
})
export class ComponentsModule { }
