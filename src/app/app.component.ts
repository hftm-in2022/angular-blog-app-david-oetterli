import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'BlogApp';
}
