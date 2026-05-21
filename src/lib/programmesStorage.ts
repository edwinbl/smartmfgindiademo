const SAVED_KEY = "programmes_saved";
const REGISTERED_KEY = "programmes_registered";
const DRAFT_PREFIX = "programmes_draft_";

const read = (key: string): string[] => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
};

const write = (key: string, value: string[]) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    window.dispatchEvent(new Event("programmes-storage-change"));
  } catch {
    /* noop */
  }
};

export interface RegistrationDraft {
  name?: string;
  organization?: string;
  email?: string;
  mobile?: string;
  industry?: string;
  role?: string;
  orgSize?: string;
  objectives?: string;
}

export const programmesStorage = {
  getSaved: () => read(SAVED_KEY),
  isSaved: (slug: string) => read(SAVED_KEY).includes(slug),
  toggleSaved: (slug: string) => {
    const list = read(SAVED_KEY);
    const next = list.includes(slug) ? list.filter((s) => s !== slug) : [slug, ...list];
    write(SAVED_KEY, next);
    return next.includes(slug);
  },
  getRegistered: () => read(REGISTERED_KEY),
  isRegistered: (slug: string) => read(REGISTERED_KEY).includes(slug),
  addRegistered: (slug: string) => {
    const list = read(REGISTERED_KEY);
    if (!list.includes(slug)) write(REGISTERED_KEY, [slug, ...list]);
  },
  getDraft: (slug: string): RegistrationDraft => {
    try {
      const raw = localStorage.getItem(DRAFT_PREFIX + slug);
      return raw ? (JSON.parse(raw) as RegistrationDraft) : {};
    } catch {
      return {};
    }
  },
  saveDraft: (slug: string, draft: RegistrationDraft) => {
    try {
      localStorage.setItem(DRAFT_PREFIX + slug, JSON.stringify(draft));
    } catch {
      /* noop */
    }
  },
  clearDraft: (slug: string) => {
    try {
      localStorage.removeItem(DRAFT_PREFIX + slug);
    } catch {
      /* noop */
    }
  },
  subscribe: (cb: () => void) => {
    const handler = () => cb();
    window.addEventListener("programmes-storage-change", handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener("programmes-storage-change", handler);
      window.removeEventListener("storage", handler);
    };
  },
};

export const accentBar = {
  navy: "bg-[hsl(var(--navy-700))]",
  red: "bg-[hsl(var(--red-600))]",
  gold: "bg-[hsl(var(--saffron))]",
  teal: "bg-[hsl(180_60%_38%)]",
  orange: "bg-[hsl(var(--orange-500))]",
} as const;

export const accentText = {
  navy: "text-[hsl(var(--navy-700))]",
  red: "text-[hsl(var(--red-600))]",
  gold: "text-[hsl(38_90%_42%)]",
  teal: "text-[hsl(180_60%_30%)]",
  orange: "text-[hsl(var(--orange-600))]",
} as const;

export const accentSoft = {
  navy: "bg-[hsl(var(--navy-050))] text-[hsl(var(--navy-700))]",
  red: "bg-[hsl(var(--red-100))] text-[hsl(var(--red-700))]",
  gold: "bg-[hsl(45_100%_94%)] text-[hsl(38_90%_38%)]",
  teal: "bg-[hsl(180_55%_94%)] text-[hsl(180_60%_28%)]",
  orange: "bg-[hsl(var(--orange-100))] text-[hsl(var(--orange-600))]",
} as const;
