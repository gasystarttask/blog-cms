import { Post } from "@blog-cms/lib/types";

const mockPosts: Post[] = [
  { id: "1", title: "First Post", content: "Hello world" },
  { id: "2", title: "Second Post", content: "Next.js is awesome" },
];

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = mockPosts.find((p) => p.id === params.id);

  if (!post) return <p>Post not found.</p>;

  return (
    <>
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="mt-2">{post.content}</p>
    </>
  );
}
