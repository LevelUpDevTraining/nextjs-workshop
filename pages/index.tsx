import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <h1>Entry Level Developer Training Index</h1>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
}
