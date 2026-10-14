export default function Logo() {
  return (
    <a className="brand" href="/" aria-label="Deadline Guru home">
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 64 64" role="img">
          <path d="M13 10 32 2 51 10 32 19Z" fill="#ff790f" />
          <path d="M18 14v7c8 6 20 6 28 0v-7L32 21Z" fill="#ff790f" />
          <path d="M49 11v16" stroke="#092c55" strokeWidth="3" strokeLinecap="round" />
          <circle cx="49" cy="29" r="3" fill="#092c55" />
          <circle cx="32" cy="39" r="19" fill="white" stroke="#092c55" strokeWidth="5" />
          <path d="M20 39l8 8 16-18" fill="none" stroke="#10a5a8" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M32 22a17 17 0 0 1 15 10" fill="none" stroke="#ff790f" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </span>
      <span className="brand-copy">
        <span className="brand-name">DEADLINE <b>GURU</b></span>
        <span className="brand-tagline">FROM IDEA TO SUBMISSION</span>
      </span>
    </a>
  );
}