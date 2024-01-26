//pagination.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 0;
  @Output() onPageChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  onPreviousPage(): void {
    if (this.currentPage > 1) {
      this.onPageChange.emit(this.currentPage - 1);
    }
  }

  onNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.onPageChange.emit(this.currentPage + 1);
    }
  }

  getPagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
  shouldDisplayPage(page: number): boolean {
    const maxVisiblePages = 10;
    const leftBoundary = Math.max(1, this.currentPage - Math.floor(maxVisiblePages / 2));
    const rightBoundary = Math.min(this.totalPages, leftBoundary + maxVisiblePages - 1);
    return page >= leftBoundary && page <= rightBoundary;
  }
  
}