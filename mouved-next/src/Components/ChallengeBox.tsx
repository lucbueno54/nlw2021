import { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/ChallengeBox.module.css'
import { ComplitedChallenges } from './ComplitedChallenges';

export function ChallengeBox(){

    const {activeChallenge,resetChallenge,completeChallenge} = useContext(ChallengeContext);

    return(

        <div className= {styles.ChallengeBoxConteiner}>


            {
                activeChallenge ?
                (
                    <div className={styles.ChallengeActive}>
                        <header>Ganhe {activeChallenge.amount} xp</header>
                        <main>
                            <img src={'icons/'+activeChallenge.type +'.svg'}/>
                            <strong> novo desafio</strong>
                            <p>{activeChallenge.description}</p>
                        </main>
                        <footer>
                            <button 
                                type='button' 
                                onClick={resetChallenge}
                                className={styles.ChallengeFaileButton}
                            >
                                Falhei
                            </button>
                        <button
                            className={styles.ChallengeSuccededButton} 
                            type='button'
                            onClick = {ComplitedChallenges}
                            >
                            Completei
                        </button>
                        </footer>

                    </div>
                ):
                (  <div className={styles.ChallengeBoxNotActive}>
                        <strong>
                            finalize um ciclo para receber desafios a serem completados
                        </strong>
                        <p>
                            <img src="icons/level-up.svg" alt="level Up"/>
                            Avance de Level completando desafios.
                        </p>
                    </div>
                )
            }


        </div>
    )
}