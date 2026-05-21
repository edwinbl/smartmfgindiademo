import { useEffect, useState } from "react";
import { CalendarPlus, Share2, Bookmark, BookmarkCheck } from "lucide-react";
import { programmesStorage } from "@/lib/programmesStorage";
import { toast } from "@/hooks/use-toast";
import type { ProgrammeItem } from "@/data/programmes";

interface Props {
  programme: ProgrammeItem;
  onRegister: () => void;
}

export const StickyActionPanel = ({ programme, onRegister }: Props) => {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setSaved(programmesStorage.isSaved(programme.slug));
    return programmesStorage.subscribe(() => setSaved(programmesStorage.isSaved(programme.slug)));
  }, [programme.slug]);

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    try {
      if (navigator.share) await navigator.share({ title: programme.title, url });
      else {
        await navigator.clipboard.writeText(url);
        toast({ title: "Link copied", description: "Programme URL copied to clipboard." });
      }
    } catch { /* noop */ }
  };

  const addToCalendar = () => {
    const dt = (s: string) => s.replace(/[-:]/g, "").replace(/\.\d+/, "");
    const start = dt(new Date(programme.isoDate).toISOString());
    const end = dt(new Date(new Date(programme.isoDate).getTime() + 3600000).toISOString());
    const ics = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nUID:${programme.slug}@smartmfgindia\nDTSTAMP:${start}\nDTSTART:${start}\nDTEND:${end}\nSUMMARY:${programme.title}\nDESCRIPTION:${programme.summary}\nEND:VEVENT\nEND:VCALENDAR`;
    const blob = new Blob([ics], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${programme.slug}.ics`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <aside className="cii-card p-5 lg:sticky lg:top-[88px] space-y-3">
      <div>
        <div className="text-[11px] uppercase tracking-[0.14em] font-bold text-[hsl(var(--red-600))]">
          {programme.status === "soon" ? "Coming Soon" : "Registration"}
        </div>
        <div className="font-display font-bold text-lg text-[hsl(var(--navy-900))] mt-1">
          {programme.fee ?? "Open"}
        </div>
        {programme.seats && <div className="text-xs text-[hsl(var(--neutral-500))]">{programme.seats}</div>}
      </div>
      <button onClick={onRegister} className="btn-primary w-full">
        {programme.registrationLabel}
      </button>
      <div className="grid grid-cols-3 gap-2">
        <button onClick={addToCalendar} className="inline-flex items-center justify-center gap-1.5 h-10 rounded-sm border border-[hsl(var(--neutral-200))] text-xs font-semibold text-[hsl(var(--navy-800))] hover:bg-[hsl(var(--neutral-50))]">
          <CalendarPlus className="h-4 w-4" /> Save
        </button>
        <button
          onClick={() => {
            const next = programmesStorage.toggleSaved(programme.slug);
            toast({ title: next ? "Saved" : "Removed", description: programme.title });
          }}
          className="inline-flex items-center justify-center gap-1.5 h-10 rounded-sm border border-[hsl(var(--neutral-200))] text-xs font-semibold text-[hsl(var(--navy-800))] hover:bg-[hsl(var(--neutral-50))]"
        >
          {saved ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
          {saved ? "Saved" : "Bookmark"}
        </button>
        <button onClick={handleShare} className="inline-flex items-center justify-center gap-1.5 h-10 rounded-sm border border-[hsl(var(--neutral-200))] text-xs font-semibold text-[hsl(var(--navy-800))] hover:bg-[hsl(var(--neutral-50))]">
          <Share2 className="h-4 w-4" /> Share
        </button>
      </div>
      <div className="pt-3 border-t border-[hsl(var(--neutral-150))] space-y-2 text-xs">
        {programme.highlights.map((h) => (
          <div key={h.label} className="flex items-center justify-between">
            <span className="text-[hsl(var(--neutral-500))] uppercase tracking-[0.12em] font-bold text-[10px]">{h.label}</span>
            <span className="font-semibold text-[hsl(var(--navy-900))]">{h.value}</span>
          </div>
        ))}
      </div>
    </aside>
  );
};
