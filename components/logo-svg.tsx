export function LogoSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* C shape */}
      <path
        d="M28 10C24 6 16 6 12 10C8 14 8 22 12 26C16 30 24 30 28 26"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* Magnifying glass handle */}
      <path d="M26 26L34 34" stroke="#FFD400" strokeWidth="3" strokeLinecap="round" />
      {/* Inner circle of magnifying glass */}
      <circle cx="20" cy="18" r="8" stroke="#FFD400" strokeWidth="2" fill="none" />
    </svg>
  )
}
