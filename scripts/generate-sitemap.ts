// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.

import { writeFileSync } from "fs";
import { resolve } from "path";
import { reports } from "../src/data/reports";
import { events } from "../src/data/events";
import { programmes } from "../src/data/programmes";

const BASE_URL = "https://smartmfgindia-demo4.bluelup.in";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const today = new Date().toISOString().split("T")[0];

const staticEntries: SitemapEntry[] = [
  { path: "/", lastmod: today, changefreq: "weekly", priority: "1.0" },
  { path: "/about", lastmod: today, changefreq: "monthly", priority: "0.8" },
  { path: "/contact", lastmod: today, changefreq: "monthly", priority: "0.8" },
  { path: "/reports", lastmod: today, changefreq: "weekly", priority: "0.9" },
  { path: "/events", lastmod: today, changefreq: "weekly", priority: "0.9" },
  { path: "/programmes", lastmod: today, changefreq: "weekly", priority: "0.9" },
  { path: "/welcome", lastmod: today, changefreq: "yearly", priority: "0.4" },
  { path: "/login", lastmod: today, changefreq: "yearly", priority: "0.5" },
  { path: "/register", lastmod: today, changefreq: "yearly", priority: "0.5" },
  { path: "/forgot-password", lastmod: today, changefreq: "yearly", priority: "0.3" },
  { path: "/terms", lastmod: today, changefreq: "yearly", priority: "0.4" },
];

const dynamicEntries: SitemapEntry[] = [
  ...reports.map((r) => ({
    path: `/reports/${r.slug}`,
    lastmod: today,
    changefreq: "monthly" as const,
    priority: "0.7",
  })),
  ...events.map((e) => ({
    path: `/events/${e.slug}`,
    lastmod: today,
    changefreq: "monthly" as const,
    priority: "0.7",
  })),
  ...programmes.map((p) => ({
    path: `/programmes/${p.slug}`,
    lastmod: today,
    changefreq: "monthly" as const,
    priority: "0.7",
  })),
];

const entries: SitemapEntry[] = [...staticEntries, ...dynamicEntries];

function generateSitemap(entries: SitemapEntry[]) {
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  );

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");
}

writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries));
console.log(`sitemap.xml written (${entries.length} entries)`);
