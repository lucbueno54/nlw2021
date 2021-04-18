import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengeContext } from "./ChallengeContext";

interface CountdownProviderProps {
  children: ReactNode;
}

interface CountdownContextData {
  isActive: boolean;
  hasFinished: boolean;
  minutes: number;
  seconds: number;
  resetCountdown: () => void;
  startCountdown: () => void;
}

let countdownTimeout: NodeJS.Timeout;

export const CountdownContext = createContext({} as CountdownContextData)

export function CountdownProvider({ children }: CountdownProviderProps) {
    const {startNewChallenge} = useContext(ChallengeContext);


    const [time, setTime] = useState(25 * 60);
    const [isActive, setActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountdown(){
        setActive(true);

    }
    function resetCountdown(){
        setActive(false);
        if(countdownTimeout != null)
        {
            clearTimeout(countdownTimeout);
            setTime(0.1 * 60);
            setHasFinished(false);
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


    return (
        <CountdownContext.Provider value={{
          isActive,
          resetCountdown,
          hasFinished,
          startCountdown,
          minutes,
          seconds,
        }}>
          {children}
        </CountdownContext.Provider>
      );
    }