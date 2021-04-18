import { ComplitedChallenges } from "../Components/ComplitedChallenges";
import { Countdown } from "../Components/Countdown";
import { ExperienceBar } from "../Components/ExperienceBar";
import { Profile } from "../Components/Profile";
import styles from '../styles/pages/Home.module.css'
import Head from 'next/head';
import { ChallengeBox } from "../Components/ChallengeBox";
import React from "react";
import { CountdownProvider } from "../contexts/CountdownContext";
import { GetServerSideProps } from 'next';
import { ChallengeContextProvider } from "../contexts/ChallengeContext";

interface HomeProps{  
  level: number;
  currentExperence: number;
  challengesCompleted: number;
}

export default function Home(props:HomeProps) {
  return (

    <ChallengeContextProvider 
          level={props.level}
          currentExperence ={props.currentExperence}
          challengesCompleted ={props.currentExperence}>
      <div className={styles.container}>

        <Head>
          <title>Inicio | move.it</title>
        </Head>
        <ExperienceBar />
        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <ComplitedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />

            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengeContextProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  var { level, currentExperence, challengesCompleted } = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      currentExperence: Number(currentExperence),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
