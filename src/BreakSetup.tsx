import { useDispatch } from "react-redux";
import type { SetupProps } from "./types";
import type { AppDispatch } from "./store";
import { increaseBreak, decreaseBreak } from "./actions";

export default function BreakSetup(props: SetupProps) {
  const dispatch: AppDispatch = useDispatch();
  

  return (
    <div id="break-setup">
      <div className="label-time">
        <h2 id="break-label">Break Length</h2>
        <p id="break-length">{props.length}</p>
      </div>
      <div className="length-setup">
        <div className="controls">
          <button
            type="button"
            id="break-increment"
            disabled={props.active}
            onClick={() => {
              dispatch(increaseBreak());
            }}
          >
            ˄
          </button>
          <button
            type="button"
            id="break-decrement"
            disabled={props.active}
            onClick={() => {
              dispatch(decreaseBreak());
            }}
          >
            ˅
          </button>
        </div>
      </div>
    </div>
  );
}
