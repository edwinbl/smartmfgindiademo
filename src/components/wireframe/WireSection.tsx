import { ReactNode } from "react";

interface WireSectionProps {
  id?: string;
  tag: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export const WireSection = ({ id, tag, title, children, className = "" }: WireSectionProps) => {
  return (
    <section
      id={id}
      aria-label={title || tag}
      className={`border-t border-dashed border-border py-12 md:py-16 ${className}`}
    >
      <div className="container">
        <div className="mb-6 flex items-center gap-3">
          <span className="wire-section-tag">{tag}</span>
          {title && (
            <span className="text-xs text-muted-foreground font-mono">// {title}</span>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};
