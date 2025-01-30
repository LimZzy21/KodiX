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

  export interface User {
    email: string;
    firstName?: string;
    lastName?: string;
    password: string;
  }
  
  export interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    register: (userData: User) => void;
    login: (email: string, password: string) => boolean;
    logout: () => void;
  }