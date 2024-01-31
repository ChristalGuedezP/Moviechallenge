import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sortby',
  templateUrl: './sortby.component.html',
  styleUrls: ['./sortby.component.css'],
})
export class SortByComponent { // Cambia a 'SortByComponent'
  @Output() sortChanged = new EventEmitter<string>();

  changeSortOrder(event: any) {
    const selectedValue = event?.target?.value || '';
    this.sortChanged.emit(selectedValue);
  }
}
