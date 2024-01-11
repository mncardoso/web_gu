import Head from "next/head";
import Image from "next/image";
import { WebGL } from "@/components/webGL";

import styles from "./index.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Graphically Undefined</title>
        <meta name="description" content="Graphically Undefined" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.container}>
          <Image src="/type.svg" alt="Graphically Undefined" width={498} height={150} />
        </div>
        <WebGL />
      </main>
    </>
  );
}
