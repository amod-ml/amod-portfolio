export default function HuggingFaceIcon({ className }: { className?: string }) {
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
      {/* Hugging hands emoji style */}
      <path d="M6 10c-1 0-2 1-2 2v3c0 1 1 2 2 2h1" />
      <path d="M18 10c1 0 2 1 2 2v3c0 1-1 2-2 2h-1" />
      <circle cx="9" cy="9" r="1.5" fill="currentColor" />
      <circle cx="15" cy="9" r="1.5" fill="currentColor" />
      <path d="M9 13c.5.5 1.5 1 3 1s2.5-.5 3-1" />
      <path d="M7 17c1 1 2 1.5 5 1.5s4-.5 5-1.5" />
    </svg>
  );
}
