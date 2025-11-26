export default function ObsidianIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Obsidian crystal/gem icon */}
      <path d="M12 2L4 7v10l8 5 8-5V7z" />
      <path d="M12 22v-5" />
      <path d="M4 7l8 5" />
      <path d="M20 7l-8 5" />
      <path d="M4 17l8-5" />
      <path d="M20 17l-8-5" />
    </svg>
  );
}
