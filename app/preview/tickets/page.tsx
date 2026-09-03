import { WorkTickets } from "@/components/work-previews";

export default function TicketsPreview() {
  return (
    <div className="min-h-screen bg-cream pb-16">
      <p className="px-6 pt-8 text-xs font-black uppercase tracking-[0.4em] text-brand">
        Version 4 · Sticker tickets
      </p>
      <WorkTickets />
    </div>
  );
}
