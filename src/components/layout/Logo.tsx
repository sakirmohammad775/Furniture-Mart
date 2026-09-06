import Link from "next/link";

export default function Logo() {
    return (
        <>
        {/* Logo */}
<Link
  href="/"
  aria-label="Heaven Furniture Mart"
  className="relative z-10 flex items-center gap-3 text-[var(--color-ivory)]"
>
  <svg
    width="42"
    height="42"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Outer frame */}
    <rect
      x="1"
      y="1"
      width="40"
      height="40"
      stroke="currentColor"
      strokeWidth="1"
    />

    {/* H monogram */}
    <path
      d="M12 10V32M30 10V32M12 21H30"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    />

    {/* Small luxury accent */}
    <circle
      cx="21"
      cy="21"
      r="1.5"
      fill="var(--color-brass)"
    />
  </svg>

  <span className="flex flex-col leading-none">
    <span className="font-display text-xl font-semibold tracking-[0.08em]">
      HEAVEN
    </span>

    <span className="mt-1 text-[7px] font-semibold uppercase tracking-[0.32em] text-white/55">
      Furniture Mart
    </span>
  </span>
</Link>
        </>
    )
}