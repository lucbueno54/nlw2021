import { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengeContext'
import style from '../styles/components/ComplitedChallenges.module.css'


export function ComplitedChallenges(){
const{challengesCompleted} = useContext(ChallengeContext)

return(
    <div className={style.ComplitedChallengesConteiner}>
        <span>Desafios Completos</span>
        <span>{challengesCompleted}</span>
    </div>
)

}