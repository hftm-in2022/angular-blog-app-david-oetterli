import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { MatCardModule } from '@angular/material/card';
import { NgForOf, NgStyle, SlicePipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { BlogPreview } from '../../models/blog-preview';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  standalone: true,
  imports: [MatCardModule, NgForOf, NgStyle, RouterLink, MatButton, SlicePipe],
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  blogPreview: BlogPreview[] = [];

  constructor(
    private blogService: BlogService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.blogService.loadBlogs().subscribe((response) => {
      this.blogPreview = response.data;
    });
  }

  navigateToDetail(blogId: number) {
    this.router.navigate(['/blogs', blogId]);
  }
}
