import {createContext, ReactNode, useState} from 'react';
import challenges from '../challenges.json'


interface ChallengeContextProviderProps{
    children: ReactNode;
}

interface Challenge{
    type:'body'|'eye';
    description:string;
    amount: number;
}

interface ChallengeContextData{
            level: number;
            currentExperence: number;
            activeChallenge:Challenge;
            challengesCompleted: number;
            experienceToNextLevel:number;
            startNewChallenge:()=> void;
            resetChallenge:()=> void;
            levelUp :()=>void;
}


export const ChallengeContext = createContext({} as ChallengeContextData);

export function ChallengeContextProvider({children}:ChallengeContextProviderProps){
    const [level, setlevel] = useState(1);
    const [currentExperence, setCurrentExperence] = useState(0)
    const [challengesCompleted, setChallengesCompleted] = useState(0);
    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceToNextLevel = Math.pow((level +1)*4,2);

    function levelUp(){
        setlevel(level+1);
    }
    function startNewChallenge(){
        const challenge = challenges[Math.floor( Math.random() * challenges.length)];
        setActiveChallenge(challenge);
   
    }

    function resetChallenge(){
        setActiveChallenge(null)
    }


    return(
        <ChallengeContext.Provider value=
        {{
            level,
            currentExperence,
            experienceToNextLevel,
            activeChallenge,            
            challengesCompleted, 
            startNewChallenge,
            resetChallenge,
            levelUp}}> 
            {children}
        </ChallengeContext.Provider>
    )
}