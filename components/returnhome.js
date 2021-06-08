import Link from "next/link";

export default function ReturnHome() {
  return (
    <Link href="/">
      <a>
        <button>Return Home</button>
      </a>
    </Link>
  );
}
