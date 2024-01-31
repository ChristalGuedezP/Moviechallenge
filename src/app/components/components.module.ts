// components.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SortByComponent } from './sortby/sortby.component'; // Cambia a 'SortByComponent'
import { CardsComponent } from './cards/cards.component';
import { NgxPaginationModule } from "ngx-pagination";
import { PaginationComponent } from './pagination/pagination.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SortByComponent,
    CardsComponent,
    PaginationComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports: [
    HeaderComponent,
    SortByComponent,
    CardsComponent,
    PaginationComponent,
    FooterComponent,
  ]
})
export class ComponentsModule { }
