import { useState, useEffect, useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css'

export function Countdown()
{
    const{minutes, seconds, hasFinished,isActive,resetCountdown,startCountdown} = useContext(CountdownContext);

    const [minutiLeft,minuteRight] = String(minutes).padStart(2,"0").split('');
    const [secondLeft,secondRight] = String(seconds).padStart(2,"0").split('');
  

return(
    <div>
    <div className= {styles.CountdownConteiner}>
        <div>
            <span>{minutiLeft}</span>
            <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
            <span>{secondLeft}</span>
            <span>{secondRight}</span>
        </div>
    </div>

{
    hasFinished ? (
    <button 
    disabled
    className={styles.countButton}>
      Ciclo Finalizado!!!!!!
    </button>
    )
:
    <>
        {isActive?    
        (   
            <button 
            type="button" 
            className={`${styles.stopButton} ${styles.countButton}`}
            onClick={resetCountdown}>
            Abandonar o Ciclo
            </button>
        ):
        (
            <button 
            type="button" 
            className={`${styles.startButton} ${styles.countButton}`}
            onClick={startCountdown}>
            Iniciar o Ciclo
            </button>   
        )
        }
    </>
    }
</div>

);
}