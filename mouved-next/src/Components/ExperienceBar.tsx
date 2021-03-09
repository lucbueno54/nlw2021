import { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/ExperienceBar.module.css'


export function  ExperienceBar()
{
    const {currentExperence,experienceToNextLevel} = useContext(ChallengeContext);

    const percentToNextLevel = (Math.round(currentExperence * 100)/experienceToNextLevel) + "%";


    return (
        <header className={styles.experienceBar}>
            <span>
                0 px
            </span>
            <div>
                <div style={{width: percentToNextLevel}}/>
                <span className={styles.currentExperience} style={{left: percentToNextLevel}} >
                    {currentExperence}px
                </span>
            </div>
            <span>
                {experienceToNextLevel} px
            </span>
        </header>
    )
   
}

