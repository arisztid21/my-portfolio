import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <header>
        <Image loading="eager" src="/self-portrait.jpg" alt="Arisztid Munoz" width={200} height={200} />
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <h1>Arisztid Munoz</h1>
    </main>
  );
}
