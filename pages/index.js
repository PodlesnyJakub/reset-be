import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const handleClick = () => {
    const name = prompt("Prozraď mi, jak na tebe volají");
    alert(`Ses asi posral, ${name || "Oldo"}...`);
    alert(`A nezapomeň resetovat BackEnd.`);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Reset BE</title>
        <meta
          name="description"
          content="Special Vertiflex App for reseting Kredit BE"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <button
          style={{
            width: "50vw",
            height: "50vh",
            borderRadius: "20px",
            fontSize: "5vw",
            cursor: "pointer",
          }}
          onClick={() => handleClick()}
        >
          Reset BE
        </button>
      </main>
    </div>
  );
}
