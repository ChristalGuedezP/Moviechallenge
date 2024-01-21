// components.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    PaginationComponent
    // Otros componentes que puedas tener
  ],
  imports: [
    CommonModule
    // Otros módulos que puedas necesitar
  ],
  exports: [
    PaginationComponent
    // Otros componentes que quieras exportar
  ]
})
export class ComponentsModule { }
