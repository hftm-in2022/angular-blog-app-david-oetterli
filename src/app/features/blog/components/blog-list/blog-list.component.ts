import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { BlogPreview } from '../../models/blog-preview.model';
import { Router, RouterLink } from '@angular/router';
import { DatePipe, NgForOf, NgIf, NgStyle, SlicePipe } from '@angular/common';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
  imports: [
    RouterLink,
    NgForOf,
    NgStyle,
    SlicePipe,
    DatePipe,
    MatProgressSpinner,
    MatButton,
    NgIf,
  ],
  standalone: true,
})
export class BlogListComponent implements OnInit {
  blogPreview: BlogPreview[] = [];
  currentPage = 0;
  pageSize = 10;
  totalCount = 0;
  isLoading = false;

  constructor(
    private blogService: BlogService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.loadBlogs();
  }

  // Methode zum Laden der Blogs
  loadBlogs() {
    if (this.isLoading) return; // Verhindert doppelte Anfragen
    this.isLoading = true;

    this.blogService.getBlogPosts(this.currentPage, this.pageSize).subscribe(
      (response) => {
        this.blogPreview = response.data;
        this.totalCount = response.totalCount;
        this.isLoading = false;
      },
      (error) => {
        console.error('Fehler beim Laden der Blogs:', error);
        this.isLoading = false;
      },
    );
  }

  // Methode zum Laden weiterer Blogs, die die aktuellen Blogs nicht überschreiben
  loadMoreBlogs() {
    if (this.blogPreview.length < this.totalCount && !this.isLoading) {
      this.currentPage++;
      this.isLoading = true;

      this.blogService.getBlogPosts(this.currentPage, this.pageSize).subscribe(
        (response) => {
          const newBlogs = response.data.filter(
            (blog) =>
              !this.blogPreview.some(
                (existingBlog) => existingBlog.id === blog.id,
              ),
          );
          this.blogPreview = [...this.blogPreview, ...newBlogs];
          this.isLoading = false;
        },
        (error) => {
          console.error('Fehler beim Laden weiterer Blogs:', error);
          this.isLoading = false;
        },
      );
    }
  }

  // Methode zum Navigieren zu einem Detail-Blog
  navigateToDetail(blogId: number) {
    this.router.navigate(['/blog', blogId]);
  }
}
