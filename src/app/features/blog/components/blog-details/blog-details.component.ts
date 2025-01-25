import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { BlogPost } from '../../models/blog.model';
import { DatePipe, NgForOf, NgIf, NgStyle } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
  standalone: true,
  imports: [NgIf, NgStyle, DatePipe, NgForOf, TranslatePipe],
})
export class BlogDetailsComponent implements OnInit {
  blogPost!: BlogPost;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService,
  ) {}

  ngOnInit() {
    const blogId = this.route.snapshot.paramMap.get('id');
    if (blogId) {
      this.loadBlogPost(blogId);
    }
  }

  // Lade einen einzelnen Blogpost basierend auf der ID
  loadBlogPost(id: string) {
    this.blogService.getBlogPost(Number(id)).subscribe((post) => {
      this.blogPost = post;
    });
  }

  // Navigiere zurück zur Blog-Übersicht
  navigateBack() {
    this.router.navigate(['/blogs']);
  }
}
