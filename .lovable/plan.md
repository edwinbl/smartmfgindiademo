Fix the About page hero section mobile responsiveness.

1. Make the PillarsViz visible on mobile
   - Remove `hidden md:block` from the visual container
   - Ensure it stacks below the text on small screens and sits beside it on large screens
   - Keep the existing height breakpoints (`h-[420px] sm:h-[480px] lg:h-[520px]`)

2. Fix excessive top spacing on mobile
   - Change from `h-[calc(100svh-72px)] flex items-center` to `min-h-[60svh] md:min-h-[calc(100svh-72px)] items-start md:items-center` (or equivalent) so the text sits higher on mobile instead of being vertically centered in a tall container
   - Adjust padding as needed so content feels compact on mobile

Files changed file:
- src/components/about/AboutHero.tsx