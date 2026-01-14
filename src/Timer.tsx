//2 Timothy 4:7: "I have fought the good fight, I have finished the race, I have kept the faith" (NIV)
import type { TimerProps } from "./types";

export default function Timer(props: TimerProps) {
    return (
        <div id="timer">
            <h2 id="timer-label">{props.onSession ? "Session" : "Break"}</h2>
            <p id="time-left">{props.timeLeft}</p>
        </div>
    )
}