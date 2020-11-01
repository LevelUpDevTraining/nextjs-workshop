import styles from "../styles/Home.module.css";
import Link from "next/link";

function addNumbers(a: number, b: number) {
  return a + b;
}

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Entry Level Developer Training Index</h1>
      <h2>{addNumbers(1, 2)}</h2>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
}
