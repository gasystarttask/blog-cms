"use server";

import { revalidatePath } from "next/cache";
import prisma from "@blog-cms/lib/prisma";
import { Post } from "@blog-cms/lib/types";

export async function createPost(title: string, content: string) {
  await prisma.post.create({ data: { title, content } });
  revalidatePath("/posts");
}

export async function getPosts(): Promise<Post[]> {
  return prisma.post.findMany({ orderBy: { createdAt: "desc" } });
}

export async function getPost(id: string): Promise<Post | null> {
  return prisma.post.findUnique({ where: { id } });
}
