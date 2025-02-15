import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

async function getPropsFromServer() {
  const data = await import('../../public/data/data.json')
  return {
    data: data.default,
  };
}

export default async function Home() {
  const { data } = await getPropsFromServer();
  // 
  return (
    <div className={styles.page}>
      <header>
        <nav>
          {/* <Image className="logo" src="../../public/rocket.png" alt="app-logo"/> */}
          <Link href="/">Home</Link>
          <Link href="/events">Events</Link>
          <Link href="/about-us">About Us</Link>
        </nav>
      </header>
      <main className={styles.main}>
        {data.events_categories.map((ev) =>
          <Link key={ev.id} href={`/events/${ev.id}`}>
            <Image src={ev.image} alt='event title' width={200} height={200}></Image>
            <h2>{ev.title}</h2><p>{ev.description}</p>
          </Link>)}

      </main>
      <footer className={styles.footer}>

      </footer>
    </div>
  );
}

