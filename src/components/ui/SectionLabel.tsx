interface SectionLabelProps {
  number?: string;
  children: React.ReactNode;
  dark?: boolean;
}

export function SectionLabel({
  number,
  children,
  dark = false,
}: SectionLabelProps) {
  return (
    <div
      className={`flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] ${
        dark
          ? "text-white/50"
          : "text-[var(--color-brown)]/50"
      }`}
    >
      {number && (
        <span className="text-[var(--color-brass)]">
          {number}
        </span>
      )}

      <span className="h-px w-8 bg-current opacity-40" />

      <span>{children}</span>
    </div>
  );
}