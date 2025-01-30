export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  
  export interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  }
  

  export interface PostState {
    posts: Post[];
    postDetails: Post | null;
    comments: Comment[];
    loading: boolean;
    error: string | null;
    fetchPosts: () => Promise<void>;
    fetchPostDetails: (id: number) => Promise<void>;
  }