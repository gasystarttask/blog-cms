import { Post } from "@blog-cms/lib/types";
import { getPost } from "../actions";

export default async function PostPage({ params }: { params: { id: string } }) {
  const post: Post | null = await getPost(params.id);

  if (!post) return <p>Post not found.</p>;

  return (
    <>
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="mt-2">{post.content}</p>
    </>
  );
}
