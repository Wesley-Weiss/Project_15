//2 Timothy 4:7: "I have fought the good fight, I have finished the race, I have kept the faith" (NIV)
import { useEffect } from "react";
import type { AudioProps } from "./types";
import beepSound from "./assets/audio/beep.mp3";
import { useRef } from "react";


export default function Audio(props: AudioProps) { 
    const audioRef = useRef<HTMLAudioElement | null>(null);
    useEffect(() => {
        if (!audioRef.current) return;

        if (!props.play) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }

        audioRef.current.currentTime = props.time;
        
        if (props.play) audioRef.current.play();

    }, [props.play, props.time]);

    


    return (
        <>
            <audio id="beep" ref={audioRef} src={beepSound}></audio>  
        </>
    )
}