import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../../models/blog';
import { DatePipe, NgForOf, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
  standalone: true,
  imports: [NgIf, NgStyle, DatePipe, NgForOf],
})
export class BlogDetailsComponent implements OnInit {
  blog!: Blog;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.blog = this.route.snapshot.data['blog'];
  }

  navigateBack() {
    this.router.navigate(['/blogs']);
  }
}
