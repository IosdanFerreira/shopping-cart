import styles from "./Home.module.scss";

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h3>Home</h3>

      <Link href='/TestPage'>Teste</Link>
    </main>
  );
}
