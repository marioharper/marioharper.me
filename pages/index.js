import Head from "next/head";
import {AiFillGithub} from "react-icons/ai";
import styles from "./index.module.css";

const Home = () => {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <title>Mario Harper - Craftsman</title>
        <meta
          name="description"
          content="Mario Harper is a full-stack engineer living in Austin, Texas."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <div className={styles.logo}>
          <h1>Mario Harper</h1>
          
          <p>Software Engineer, <br/> Woodworker, and Aspiring <br/> Home Cook</p>

          <div className={styles.links}>
            <a href="//github.com/marioharper" className={styles.link}>
              <AiFillGithub className={styles.linkIcon} />
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
