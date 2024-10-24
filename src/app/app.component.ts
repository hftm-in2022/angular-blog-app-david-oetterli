import { NgIf, NgFor, NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    NgIf,
    NgFor,
    NgClass,
    NgStyle,
  ],
})
export class AppComponent {
  title = 'Demo App';
  readonly items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  selectedItem: string | null = null;
  showList = true;
  userInput = '';

  toggleList(): void {
    this.showList = !this.showList;
  }

  selectItem(item: string): void {
    this.selectedItem = item;
  }
}
