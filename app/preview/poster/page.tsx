import { WorkPoster } from "@/components/work-previews";

export default function PosterPreview() {
  return (
    <div className="min-h-screen bg-cream pb-16">
      <p className="px-6 pt-8 text-xs font-black uppercase tracking-[0.4em] text-brand">
        Version 1 · Poster stack
      </p>
      <WorkPoster />
    </div>
  );
}
