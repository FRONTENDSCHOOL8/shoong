export default function FloatingButton() {
  return (
    <button type="button" className="absolute bottom-0 right-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={60}
        height={60}
        viewBox="0 0 60 60"
        fill="none"
      >
        <circle
          cx="29"
          cy="29"
          r="25"
          strokeWidth="2"
          fill="white"
          stroke="url(#paint0_linear_7194_2228)"
        />
        <image width={35} x={10} y={13} href="/icons/heartLogo.png" />
        <defs>
          <linearGradient
            id="paint0_linear_7194_2228"
            x1="29.5"
            y1={0}
            x2="29.5"
            y2={59}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FE5F5F" />
            <stop offset={1} stopColor="#6662C9" />
          </linearGradient>
        </defs>
      </svg>
    </button>
  );
}
