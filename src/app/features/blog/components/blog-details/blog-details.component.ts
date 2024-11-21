import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe, NgForOf, NgStyle, CommonModule } from '@angular/common';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
  imports: [NgStyle, DatePipe, NgForOf, CommonModule],
  standalone: true,
})
export class BlogDetailsComponent implements OnInit {
  blog = null;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private router: Router,
  ) {}

  ngOnInit() {
    const blogId = this.route.snapshot.paramMap.get('id');
    if (blogId) {
      this.blogService.loadBlogById(+blogId).subscribe({
        next: (data) => (this.blog = data),
        error: (err) => {
          console.error('Fehler beim Laden des Blogs:', err);
          this.blog = null;
        },
      });
    }
  }

  navigateBack() {
    this.router.navigate(['/blogs']);
  }
}
