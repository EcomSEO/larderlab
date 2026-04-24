import type { Post } from "@/lib/content/posts";
import { PostCard } from "./PostCard";

export function RelatedPosts({ posts }: { posts: Post[] }) {
  if (posts.length === 0) return null;
  return (
    <section className="mt-16">
      <div className="flex items-baseline justify-between mb-5 flex-wrap gap-2">
        <div>
          <div className="caps-label text-copper">Related</div>
          <h2 className="font-sans text-xl text-ink mt-1 tracking-tight">
            Next in this hub.
          </h2>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {posts.map((p) => (
          <PostCard key={p.slug} post={p} />
        ))}
      </div>
    </section>
  );
}
