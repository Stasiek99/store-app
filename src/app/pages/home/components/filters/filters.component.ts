import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: 'filters.component.html'
})
export class FiltersComponent {
  @Output() showCategory = new EventEmitter<string>();
  categories: any[] = ['shoes', 'sports'];

  onShowCategory(category: string): void {
    this.showCategory.emit(category);
  }
}
