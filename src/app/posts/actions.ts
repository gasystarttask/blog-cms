"use server";

import { Post } from "@blog-cms/lib/types";
import { revalidatePath } from "next/cache";

const posts: Post[] = [
  { id: "1", title: "First Post", content: "Hello world" },
  { id: "2", title: "Second Post", content: "Next.js is awesome" },
];

export async function createPost(title: string, content: string) {
  const newPost: Post = { id: Date.now().toString(), title, content };
  posts.push(newPost);
  revalidatePath("/posts");
  return newPost;
}

export async function getPosts() {
  return posts;
}
