//2 Timothy 4:7: "I have fought the good fight, I have finished the race, I have kept the faith" (NIV)
import BreakSetup from "./BreakSetup"
import SessionSetup from "./SessionSetup"
import Timer from "./Timer"
import TimerControls from "./TimerControls"
import Audio from "./Audio"
import "./css/App.css"
import { useDispatch, useSelector } from "react-redux"
import type { TimerState } from "./types"
import { useEffect } from "react"
import type { AppDispatch } from "./store"
import { updateTimer } from "./actions"

function App() {
  const { sessionLength, breakLength, inSession, timeLeft, isRunning, audioTime, audioPlaying } = useSelector((state: TimerState) => state)
  const dispatch: AppDispatch = useDispatch();

  const formatTime = (time: number) => {
    const seconds = (time % 60).toString();
    const minutes = (Math.floor(time / 60)).toString();

    return `${minutes.length == 1? `0${minutes}`: `${minutes}`}:${seconds.length == 1? `0${seconds}`: `${seconds}`}`
  }

  
  useEffect(() => {
    
    if (isRunning) {
        setTimeout(()=> dispatch(updateTimer()),1000)
    }
    
  })
  return (
    <div className="App">
      <h1>Shift Timer</h1>
      <div className="length-section">
        <SessionSetup active={isRunning} length={sessionLength} />
        <BreakSetup active={isRunning} length={breakLength} />
      </div>
      <Timer onSession={inSession} timeLeft={formatTime(timeLeft)} />
      <TimerControls running={isRunning} />
      <Audio play={audioPlaying} time={audioTime} />
    </div>
  );
}

export default App
