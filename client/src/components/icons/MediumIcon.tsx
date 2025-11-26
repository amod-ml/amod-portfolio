export default function MediumIcon({ className }: { className?: string }) {
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
      <circle cx="7" cy="12" r="5" />
      <ellipse cx="17" cy="12" rx="3" ry="5" />
      <ellipse cx="22" cy="12" rx="1" ry="5" />
    </svg>
  );
}
