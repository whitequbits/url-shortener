import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Main from '../components/Main'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>URL Shortener</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Main/>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/whitequbits"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Interpreter ID
        </a>
      </footer>
    </div>
  );
}
