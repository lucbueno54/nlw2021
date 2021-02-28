import { ComplitedChallenges } from "../Components/ComplitedChallenges";
import { Countdown } from "../Components/Countdown";
import { ExperienceBar } from "../Components/ExperienceBar";
import { Profile } from "../Components/Profile";
import styles from '../styles/pages/Home.module.css'
import Head from 'next/head';

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Inicio | move.it</title>
      </Head>
      <ExperienceBar />
      <section>
        <div>
          <Profile/>
          <ComplitedChallenges/>
          <Countdown/>
        </div>
        <div>


        </div>
      </section>
    </div>
  );
}
