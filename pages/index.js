import Head from "next/head";
import {AiFillGithub} from "react-icons/ai";
import styles from "./index.module.css";
import DrumKit from "../components/DrumKit/DrumKit";

const Home = () => {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <title>Mario Harper - Full Stack Engineer</title>
        <meta
          name="description"
          content="Mario Harper is a full-stack engineer living in Austin, Texas."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"
          type="text/css"
        />
      </Head>

      <main className={styles.main}>
        <div className={styles.logo}>
          <span className={styles.name}>Mario Harper</span>
          <span className={styles.text}>Developer</span>
          <div className={styles.links}>
            <a href="//github.com/marioharper" className={styles.link}>
              <AiFillGithub className={styles.linkIcon} />
            </a>
          </div>
        </div>

        <DrumKit />
      </main>
    </>
  );
};

export default Home;
