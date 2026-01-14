//2 Timothy 4:7: "I have fought the good fight, I have finished the race, I have kept the faith" (NIV)
import type { SetupProps } from "./types"
import { decreaseSession, increaseSession } from "./actions";
import type { AppDispatch } from "./store";
import { useDispatch } from "react-redux";

export default function SessionSetup(props: SetupProps) {
    const dispatch: AppDispatch = useDispatch();
    return (
      <div id="session-setup">
        <div className="label-time">
          <h2 id="session-label">Session Length</h2>
          <p id="session-length">{props.length}</p>
        </div>
        <div className="length-setup">
          <div className="controls">
            <button
              type="button"
              id="session-increment"
              disabled = {props.active}
              onClick={() => dispatch(increaseSession())}
            >
              ˄
            </button>
            <button 
              type="button"
              id="session-decrement"
              disabled = {props.active}
              onClick={() => dispatch(decreaseSession())}
            >
              ˅
            </button>
          </div>
        </div>
      </div>
    );
}