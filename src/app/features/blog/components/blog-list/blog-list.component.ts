import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { MatCardModule } from '@angular/material/card';
import { DatePipe, NgForOf, NgIf, NgStyle, SlicePipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { BlogPreview } from '../../models/blog-preview';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  standalone: true,
  imports: [
    MatCardModule,
    NgForOf,
    NgStyle,
    RouterLink,
    MatButton,
    SlicePipe,
    DatePipe,
    NgIf,
    MatProgressSpinner,
    FormsModule,
  ],
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  blogPreview: BlogPreview[] = [];
  currentPage = 0;
  pageSize = 10;
  totalCount = 0;

  constructor(
    private blogService: BlogService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.loadBlogs();
  }

  // Methode zum Laden der Blogs
  loadBlogs() {
    this.blogService
      .loadBlogs(this.currentPage, this.pageSize)
      .subscribe((response) => {
        this.blogPreview = response.data;
        this.totalCount = response.totalCount;
      });
  }

  // Methode zum Laden weiterer Blogs, die die aktuellen Blogs nicht überschreiben
  loadMoreBlogs() {
    if (this.blogPreview.length < this.totalCount) {
      this.currentPage++; // Gehe zur nächsten Seite

      // Anfrage für die nächste Seite
      this.blogService
        .loadBlogs(this.currentPage, this.pageSize)
        .subscribe((response) => {
          // Füge nur neue Blogs hinzu, die noch nicht geladen wurden
          const newBlogs = response.data.filter(
            (blog) =>
              !this.blogPreview.some(
                (existingBlog) => existingBlog.id === blog.id,
              ),
          );

          // Füge die neuen Blogs zur bestehenden Liste hinzu
          this.blogPreview = [...this.blogPreview, ...newBlogs];
        });
    }
  }

  // Methode zum Navigieren zu einem Detail-Blog
  navigateToDetail(blogId: number) {
    this.router.navigate(['/blogs', blogId]);
  }
}
