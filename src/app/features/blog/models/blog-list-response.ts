import { BlogPreview } from './blog-preview';

export interface BlogListResponse {
  data: BlogPreview[];
  pageIndex: number;
  pageSize: number;
  totalCount: number;
  maxPageSize: number;
}
