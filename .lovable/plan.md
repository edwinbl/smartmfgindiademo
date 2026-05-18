## Plan: Automate sitemap generation

The project currently has a hand-edited `public/sitemap.xml` with one entry (`/`) and a `public/robots.txt` that references it. I'll replace the static file with a generator script so future routes can be added in one place.

### Changes

1. **Create `scripts/generate-sitemap.ts`** — writes `public/sitemap.xml` with:
   - `BASE_URL = https://smartmfgindia-demo4.bluelup.in` (project custom domain)
   - One entry: `/` (priority 1.0, weekly)
   - NotFound `*` route excluded
2. **Add `predev` and `prebuild` to `package.json`** so the sitemap regenerates before every dev start and production build (`bunx tsx scripts/generate-sitemap.ts`).
3. **Update `public/robots.txt`** — change the `Sitemap:` line to `https://smartmfgindia-demo4.bluelup.in/sitemap.xml` to match the canonical domain.

### Confirmation needed

You currently have a hand-edited `public/sitemap.xml`. Per workflow, I should confirm before migrating it to a generator script. Approve this plan to proceed with the migration, or reply if you'd rather just keep editing the static file.
