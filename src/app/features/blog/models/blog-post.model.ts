export interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  headerImageUrl?: string;
  comments?: Comment[];
}

export interface Comment {
  author: string;
  content: string;
  createdAt: string;
}
