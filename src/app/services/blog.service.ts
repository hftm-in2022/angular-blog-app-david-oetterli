import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from '../features/blog/models/blog';
import { BlogListResponse } from '../features/blog/models/blog-list-response';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private apiUrl =
    'https://d-cap-blog-backend---v2.whitepond-b96fee4b.westeurope.azurecontainerapps.io/entries';

  constructor(private http: HttpClient) {}

  loadBlogs(page = 0, pageSize = 10): Observable<BlogListResponse> {
    const params = { page: page.toString(), pageSize: pageSize.toString() };
    return this.http.get<BlogListResponse>(this.apiUrl, { params });
  }

  loadBlogById(id: number): Observable<Blog> {
    return this.http.get<Blog>(`${this.apiUrl}/${id}`);
  }
}
