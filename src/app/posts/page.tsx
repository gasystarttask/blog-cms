import { Post } from "@blog-cms/lib/types";
import Link from "next/link";
import { getPosts } from "./actions";


export default async function PostsPage() {
  const posts: Post[] = await getPosts();
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>
            <Link href={`/posts/${p.id}`} className="text-blue-600 underline">
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
