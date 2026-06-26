## Fix high-severity dependency vulnerabilities

Both flagged packages have safe upgrade paths within the major versions already in use — no app code changes needed.

### Changes
1. **react-router-dom**: bump from `^6.30.1` to `^6.31.0` (patches the XSS-via-open-redirect advisory in `@remix-run/router`). Stays on v6, so the existing `BrowserRouter`, `Routes`, and `Route` usage in `src/App.tsx` and all `Link`/`useNavigate` callers continue to work unchanged.
2. **recharts**: bump from `^2.15.4` to `^2.15.5` (drops the vulnerable transitive `lodash` for the `_.template` code-injection advisory). All chart components used in the app remain API-compatible.
3. Refresh `bun.lockb` so the resolved transitive `@remix-run/router` and `lodash` versions move to patched releases.
4. Re-run `bun audit` / dependency scan to confirm the high-severity rows clear, then mark the supply-chain finding fixed.

### Out of scope
- No migration to `react-router-dom` v7 (would require code changes; not needed to clear the advisory).
- No swap of `recharts` for another charting library.

### Technical notes
- Commands: `bun add react-router-dom@^6.31.0 recharts@^2.15.5`.
- Verify the dev server boots, the `/reports/:slug` charts still render, and routing deep links continue to resolve.
