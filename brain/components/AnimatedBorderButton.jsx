export const AnimatedBorderButton = ({ children, className = "", ...props }) => (
  <button
    type="button"
    className={`animated-border group relative overflow-visible rounded-full border border-border bg-transparent px-8 py-4 text-lg font-medium text-foreground transition-all duration-300 hover:border-primary/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${className}`}
    {...props}
  >
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 200 60"
      preserveAspectRatio="none"
    >
      <path
        d="M 30,1 A 29,29 0 0 0 1,30 L 1,30 A 29,29 0 0 0 30,59 L 170,59 A 29,29 0 0 0 199,30 L 199,30 A 29,29 0 0 0 170,1 Z"
        fill="none"
        stroke="var(--color-primary)"
        strokeWidth="2"
        strokeDasharray="400 550"
        strokeDashoffset="400"
        strokeLinecap="round"
        className="animated-border-path"
      />
    </svg>
    <span className="relative z-10 inline-flex items-center justify-center gap-2">
      {children}
    </span>
  </button>
);