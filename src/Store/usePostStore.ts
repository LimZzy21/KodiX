import { create } from "zustand";
import { Post, Comment } from "./types";

interface PostState {
  posts: Post[];
  postDetails: Post | null;
  comments: Comment[];
  fetchPosts: () => Promise<void>;
  fetchPostDetails: (id: number) => Promise<void>;
}

export const usePostStore = create<PostState>((set) => ({
  posts: [],
  postDetails: null,
  comments: [],

  fetchPosts: async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data: Post[] = await res.json();
      set({ posts: data });
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  },

  fetchPostDetails: async (id: number) => {
    try {
      const [postRes, commentsRes] = await Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`),
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`),
      ]);

      const post: Post = await postRes.json();
      const comments: Comment[] = await commentsRes.json();

      set({ postDetails: post, comments });
    } catch (error) {
      console.error("Error fetching post details:", error);
    }
  },
}));
