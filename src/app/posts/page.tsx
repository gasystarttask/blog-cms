import { Post } from "@blog-cms/lib/types";
import Link from "next/link";

const mockPosts: Post[] = [
  { id: "1", title: "First Post", content: "Hello world" },
  { id: "2", title: "Second Post", content: "Next.js is awesome" },
];

export default async function PostsPage() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <ul>
        {mockPosts.map((p) => (
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
