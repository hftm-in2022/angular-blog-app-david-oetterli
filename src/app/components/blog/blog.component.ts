import { Component, Input } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { MatChipSet } from '@angular/material/chips';
import { Blog } from '../../model/blog';
import { NgComponentOutlet, NgOptimizedImage, NgStyle } from '@angular/common';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardContent,
    MatCardFooter,
    MatChipSet,
    NgComponentOutlet,
    MatCardImage,
    NgOptimizedImage,
    MatCardActions,
    MatButton,
    MatCardSubtitle,
    NgStyle,
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {
  @Input()
  blog: Blog | undefined;
}
