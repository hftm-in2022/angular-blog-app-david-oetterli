export interface Blog {
  id: number;
  title: string;
  content: string;
  author: string;
  headerImageUrl: string;
  createdAt: string;
  updatedAt: string;
  likes: number;
  likedByMe: boolean;
  createdByMe: boolean;
  comments: Comment[];
}

export interface Comment {
  id: number;
  content: string;
  author: string;
  createdAt: string;
  updatedAt: string;
}
