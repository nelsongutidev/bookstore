import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScullyContentComponent, ScullyContentModule } from '@scullyio/ng-lib';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, ScullyContentModule],
  templateUrl: './book.component.html',
  styles: [],
})
export class BookComponent {}
