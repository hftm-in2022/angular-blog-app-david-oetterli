import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogListComponent } from './features/blog/components/blog-list/blog-list.component';
import { EMPTY, Observable } from 'rxjs';
import { Blogs } from './model/blogs';
import { BlogService } from './services/blog.service';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BlogListComponent, AsyncPipe, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'blog-app';

  blogs$: Observable<Blogs> = EMPTY;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogs$ = this.blogService.loadBlogs();
  }
}
