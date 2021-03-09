import { useState, useEffect, useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Countdown.module.css'

let countdownTimeout = null;
export function Countdown()
{
    const {startNewChallenge} = useContext(ChallengeContext)


    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);
    const minutes = Math.floor(time / 60);
    const second = time % 60;

    const [minutiLeft,minuteRight] = String(minutes).padStart(2,"0").split('');
    const [secondLeft,secondRight] = String(second).padStart(2,"0").split('');

    function startCountdown(){
        setActive(true);

    }
    function resetCountdown(){
        setActive(false);
        if(countdownTimeout != null)
        {
            clearTimeout(countdownTimeout);
            setTime(0.1 * 60);
        }
    }

    useEffect(()=>{
        if (isActive && time > 0) {
            countdownTimeout= setTimeout(()=>{
                setTime(time -1);
            },1000);
        }
        else{
            if(isActive && time ==0){
                setHasFinished(true);
                setActive(false);
                startNewChallenge();
            }
        }
    },[isActive,time]);

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