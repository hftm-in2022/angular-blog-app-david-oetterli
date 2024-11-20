export interface Blog {
  id: number;
  // updatedAt: Date
  // createdAt: Date
  title: string;
  contentPreview: string;
  author: string;
  likes: number;
  comments: number;
  likedByMe: boolean;
  createdByMe: boolean;
  headerImageUrl: string;
}
