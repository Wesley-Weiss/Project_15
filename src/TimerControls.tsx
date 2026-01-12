import type { ControlsProps } from "./types";
import { resetAudio, resetTimer, startTimer, stopTimer } from "./actions";
import type { AppDispatch } from "./store";
import { useDispatch } from "react-redux";

export default function TimerControls(props: ControlsProps) {
  const dispatch: AppDispatch = useDispatch();

    return (
      <div id="timer-controls">
        <button type="button" id="start_stop" onClick={() => {
          if (props.running) {
            dispatch(stopTimer())
          } else {
            dispatch(startTimer())
          }
        }}>
          {props.running ? "■" : "►"}
        </button>
        <button type="button" id="reset" onClick={() => {
          dispatch(resetAudio());
          dispatch(resetTimer());
        }}>
          ↻
        </button>
      </div>
    );
}