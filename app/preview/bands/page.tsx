import { WorkBands } from "@/components/work-previews";

export default function BandsPreview() {
  return (
    <div className="min-h-screen bg-cream">
      <p className="px-6 pt-8 text-xs font-black uppercase tracking-[0.4em] text-brand">
        Version 2 · Pink bands
      </p>
      <WorkBands />
    </div>
  );
}
