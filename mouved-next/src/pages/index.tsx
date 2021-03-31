import { ComplitedChallenges } from "../Components/ComplitedChallenges";
import { Countdown } from "../Components/Countdown";
import { ExperienceBar } from "../Components/ExperienceBar";
import { Profile } from "../Components/Profile";
import styles from '../styles/pages/Home.module.css'
import Head from 'next/head';
import { ChallengeBox } from "../Components/ChallengeBox";
import React from "react";
import { CountdownProvider} from "../contexts/CountdownContext";

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Inicio | move.it</title>
      </Head>
      <ExperienceBar />
      <CountdownProvider>
          <section>
            <div>
              <Profile/>
              <ComplitedChallenges/>
              <Countdown/>
            </div>
            <div>
            <ChallengeBox/>

            </div>
          </section>
      </CountdownProvider>
    </div>
  );
}
