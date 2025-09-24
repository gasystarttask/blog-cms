"use client";

import { useState, FormEvent } from "react";
import { createPost } from "../actions";

export default function NewPostPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    setLoading(true);
    await createPost(title, content);
    setLoading(false);
    e.currentTarget?.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <input name="title" placeholder="Title" className="border p-2 w-full" />
      <textarea name="content" placeholder="Content" className="border p-2 w-full" />
      <button type="submit" disabled={loading} className="bg-blue-600 text-white px-4 py-2">
        {loading ? "Creating..." : "Create Post"}
      </button>
    </form>
  );
}
