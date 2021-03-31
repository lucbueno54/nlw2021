import { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengeContext';
import style from '../styles/components/Profile.module.css'


export function Profile(){

    const {level} = useContext(ChallengeContext);
    return(
        <div  className={style.profileConteiner}>
            <img src="http://github.com/diego3g.png" alt="avatar"/>
            <div>
                <strong>Lucas Bueno</strong>
                <p>
                    <img src="icons/level.svg" alt=""/>
                    Level {level}</p>
            </div>
        </div>
    )
}