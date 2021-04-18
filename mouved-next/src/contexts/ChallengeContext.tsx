import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import challenges from '../challenges.json'
import Cookie from 'js-cookie';
import { strict } from 'node:assert';
import { LevelUpModal } from '../Components/LevelUpModal';


interface ChallengeContextProviderProps{
    children: ReactNode;
    level: number;
    currentExperence: number;
    challengesCompleted: number;    
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
            completeChallenge:()=>void;
            closeLevelUpModal:()=>void;
}


export const ChallengeContext = createContext({} as ChallengeContextData);

export function ChallengeContextProvider(
            { children, ...rest }:ChallengeContextProviderProps){

    const [level, setlevel] = useState(rest.level ?? 1);
    const [currentExperence, setCurrentExperence] = useState(rest.currentExperence ?? 0);
    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);
    const [activeChallenge, setActiveChallenge] = useState(null);
    const [isLevelUpModalOpen, setLevelUpModalOpen] = useState(false);

    const experienceToNextLevel = Math.pow(((level +1)*4),2);

    useEffect(()=>{

        Notification.requestPermission();
    },[]);

    useEffect(()=>{
        Cookie.set('level',String(level));
        Cookie.set('currentExperence',String(currentExperence));
        Cookie.set('challengesCompleted',String(challengesCompleted));
    },
    [level, currentExperence, challengesCompleted]);

    function levelUp(){
        setlevel(level+1);
        setLevelUpModalOpen(true);
    }
    function startNewChallenge(){
        const challenge = challenges[Math.floor( Math.random() * challenges.length)];
        setActiveChallenge(challenge);

        new Audio('/notification.mp3').play();

        if (Notification.permission === 'granted') {
            new Notification('Novo desafio',{
                body:`Valendo ${challenge.amount}xp!`
            });
        }
   
    }
    function resetChallenge(){
        setActiveChallenge(null)
    }

    function  completeChallenge(){
        if (!activeChallenge) {
            return;
        }
        const { amount } = activeChallenge;
        let finalExperience = currentExperence + amount;
        if(finalExperience >= experienceToNextLevel)
        {
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }
        setActiveChallenge(null);
        setCurrentExperence(finalExperience);
        setChallengesCompleted(challengesCompleted +1)
    }

    function closeLevelUpModal(){
        setLevelUpModalOpen(false);
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
            levelUp,
            completeChallenge,
            closeLevelUpModal
            }}> 
            {children}
            {isLevelUpModalOpen &&<LevelUpModal/>}
        </ChallengeContext.Provider>
    )
}