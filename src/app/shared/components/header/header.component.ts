import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [NgIf],
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router) {}
  onLoginClick() {
    console.log('Login Button clicked');
  }

  onCreateNewBlogClick() {
    console.log('Create new Blog clicked');
    this.router.navigate(['/create-new-blog']);
  }

  navigateBack() {
    this.router.navigate(['/blogs']);
  }
}
