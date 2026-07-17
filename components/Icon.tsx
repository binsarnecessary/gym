type Props = { name: string; className?: string };

// Line-icon set (stroke = currentColor). viewBox 24x24, stroke-width 1.6.
const P: Record<string, React.ReactNode> = {
  shield: <><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" /><path d="M9 12l2 2 4-4" /></>,
  wallet: <><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M16 12h4" /><path d="M3 9h13" /></>,
  bank: <><path d="M4 10h16" /><path d="M12 3l8 5H4l8-5z" /><path d="M6 10v7M10 10v7M14 10v7M18 10v7" /><path d="M4 20h16" /></>,
  wrench: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.3 2.3-2-2 2.3-2.3z" />,
  map: <><path d="M9 4L4 6v14l5-2 6 2 5-2V4l-5 2-6-2z" /><path d="M9 4v14M15 6v14" /></>,
  compass: <><circle cx="12" cy="12" r="9" /><path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" /></>,
  dumbbell: <><path d="M4 9v6M7 7v10M17 7v10M20 9v6M7 12h10" /></>,
  flame: <path d="M12 3s5 4 5 9a5 5 0 0 1-10 0c0-2 1-3 1-3s0 2 2 2c0-3 2-5 2-8z" />,
  boxing: <><path d="M8 5h5a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4H9a3 3 0 0 1-3-3V8a3 3 0 0 1 2-3z" /><path d="M6 9H5a2 2 0 0 0 0 4h1" /></>,
  lotus: <><path d="M12 4c2 2 2 5 0 7-2-2-2-5 0-7z" /><path d="M5 11c3-1 5 1 7 3-3 1-6-1-7-3z" /><path d="M19 11c-3-1-5 1-7 3 3 1 6-1 7-3z" /><path d="M4 15c4 3 12 3 16 0" /></>,
  target: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="1" /></>,
  users: <><circle cx="9" cy="8" r="3" /><path d="M3 20c0-3 3-5 6-5s6 2 6 5" /><path d="M16 6a3 3 0 0 1 0 6M21 20c0-2.5-1.5-4-4-4.5" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  shower: <><path d="M6 21v-8a6 6 0 0 1 12 0" /><path d="M4 13h16" /><path d="M9 17v1M12 18v1M15 17v1" /></>,
  snow: <><path d="M12 3v18M3 12h18M6 6l12 12M18 6L6 18" /></>,
  cup: <><path d="M5 8h11v6a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5V8z" /><path d="M16 9h2a2 2 0 0 1 0 4h-2" /><path d="M8 3v2M11 3v2" /></>,
  sparkles: <><path d="M12 4l1.5 4.5L18 10l-4.5 1.5L12 16l-1.5-4.5L6 10l4.5-1.5L12 4z" /><path d="M18 15l.8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8L18 15z" /></>,
  tooth: <path d="M7 3c-2 0-3 2-3 4 0 3 1 4 1.5 7S6 21 8 21s1.5-4 4-4 2 4 4 4 1-4 1.5-7S20 10 20 7c0-2-1-4-3-4-2 0-2.5 1-5 1S9 3 7 3z" />,
  smile: <><circle cx="12" cy="12" r="9" /><path d="M8 14a4 4 0 0 0 8 0" /><path d="M9 9h.01M15 9h.01" /></>,
  crown: <><path d="M4 8l3 8h10l3-8-4 3-4-6-4 6-4-3z" /><path d="M6 19h12" /></>,
  brush: <><path d="M4 20s1-4 4-4 4-4 4-4l6-6 2 2-6 6s0 1-4 4-6 2-6 2z" /></>,
  stethoscope: <><path d="M6 3v5a4 4 0 0 0 8 0V3" /><path d="M10 15v1a5 5 0 0 0 10 0v-2" /><circle cx="20" cy="12" r="2" /></>,
  building: <><rect x="5" y="3" width="14" height="18" rx="1" /><path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01" /><path d="M10 21v-3h4v3" /></>,
  court: <><path d="M3 21h18" /><path d="M5 21V9M19 21V9M9 21V9M15 21V9" /><path d="M4 9h16" /><path d="M12 3l8 6H4l8-6z" /></>,
  document: <><path d="M7 3h7l5 5v13H7z" /><path d="M14 3v5h5" /><path d="M9 13h6M9 16h6" /></>,
  handshake: <><path d="M8 11l3-3 3 3 3-3 3 3" /><path d="M3 8l4-2 5 3" /><path d="M12 14l2 2 3-3" /><path d="M3 8v6l4 3" /></>,
  home: <><path d="M4 11l8-7 8 7" /><path d="M6 10v10h12V10" /><path d="M10 20v-6h4v6" /></>,
  ruler: <><rect x="3" y="8" width="18" height="8" rx="1" transform="rotate(0 12 12)" /><path d="M7 8v3M11 8v4M15 8v3M19 8v4" /></>,
  hammer: <><path d="M14 4l6 6-3 3-6-6z" /><path d="M11 7L4 14l3 3 7-7" /></>,
  receipt: <><path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3z" /><path d="M9 8h6M9 12h6" /></>,
  bell: <><path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6z" /><path d="M10 20a2 2 0 0 0 4 0" /></>,
  card: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18" /></>,
  chart: <><path d="M4 20V4" /><path d="M4 20h16" /><path d="M8 16v-4M12 16V8M16 16v-6" /></>,
  repeat: <><path d="M4 9l3-3h11v4" /><path d="M20 15l-3 3H6v-4" /></>,
};

export default function Icon({ name, className = "h-6 w-6" }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {P[name] ?? <circle cx="12" cy="12" r="9" />}
    </svg>
  );
}
