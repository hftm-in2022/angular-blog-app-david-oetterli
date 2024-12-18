export interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  updatedAt?: string;
  headerImageUrl?: string;
  comments?: Comment[];
}

export interface BlogPreview {
  id: number;
  title: string;
  contentPreview: string;
  headerImageUrl?: string;
  author: string;
  createdAt: string;
}

export interface CreateBlog {
  title: string;
  content: string;
  author: string;
  headerImageUrl?: string;
}

export interface Comment {
  author: string;
  content: string;
  createdAt: string;
}
