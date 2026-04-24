import Link from "next/link";
import type { Post } from "@/lib/content/posts";
import { getHub } from "@/lib/content/hubs";

const typeLabel: Record<Post["postType"], string> = {
  pillar: "Guide",
  comparison: "Comparison",
  cluster: "Explainer",
  listicle: "Listicle",
};

export function PostCard({
  post,
  variant = "compact",
}: {
  post: Post;
  variant?: "compact" | "feature";
}) {
  const hub = getHub(post.hub);
  if (variant === "feature") {
    return (
      <Link
        href={`/${post.slug}`}
        className="group block p-8 bg-paper border border-ink/15 rounded-sm hover:border-copper/60 transition"
      >
        <div className="caps-label text-copper">
          {hub?.shortName} · {typeLabel[post.postType]}
        </div>
        <h3 className="font-sans font-semibold text-2xl text-ink mt-3 mb-3 tracking-tight">
          {post.title}
        </h3>
        <p className="text-charcoal/80 text-[15px] leading-relaxed">
          {post.description}
        </p>
        <div className="mt-4 flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.12em]">
          <span className="text-copper group-hover:text-ink">
            Read the full spec →
          </span>
          <span className="text-steel tnum">{post.readingTime} min</span>
        </div>
      </Link>
    );
  }
  return (
    <Link
      href={`/${post.slug}`}
      className="group block p-5 bg-paper border border-ink/15 rounded-sm hover:border-copper/60 transition"
    >
      <div className="caps-label text-copper">
        {hub?.shortName} · {typeLabel[post.postType]}
      </div>
      <h3 className="font-sans font-semibold text-lg text-ink mt-2 mb-2 leading-snug tracking-tight">
        {post.title}
      </h3>
      <p className="text-[13.5px] text-charcoal/75 line-clamp-2 leading-relaxed">
        {post.description}
      </p>
      <span className="mt-3 inline-block text-[11px] font-mono uppercase tracking-[0.12em] text-steel tnum">
        {post.readingTime} min · rev {post.updatedAt}
      </span>
    </Link>
  );
}
