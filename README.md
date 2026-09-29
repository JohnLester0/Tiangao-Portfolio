# Tiangao-Portfolio
Add animation & improve design
I removed the custom frame-by-frame animation and restored native smooth anchor scrolling, which is generally more consistent. Clicking navbar links should now smoothly scroll to the section, with space left below the fixed navbar; reduced-motion preferences are respected.
\\\\\\\\\
I also corrected a malformed unused import that was preventing the app from building. The production build now succeeds. Reload the site to try the