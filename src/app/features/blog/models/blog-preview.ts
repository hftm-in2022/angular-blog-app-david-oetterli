export interface BlogPreview {
  id: number;
  title: string;
  contentPreview: string;
  author: string;
  headerImageUrl: string;
  createdAt: string;
  updatedAt: string;
  likes: number;
  comments: number;
  likedByMe: boolean;
  createdByMe: boolean;
}
