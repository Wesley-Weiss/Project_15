export interface SetupProps {
    length: number,
    active: boolean,
}

export interface TimerProps { 
    timeLeft: string,
    onSession: boolean
}

export interface ControlsProps {
    running: boolean
}

export interface AudioProps {
    play: boolean
    time: number
}

export interface TimerAction {
  type: string;
}

export interface TimerState {
  sessionLength: number;
  breakLength: number;
  inSession: boolean;
  timeLeft: number;
  isRunning: boolean;
  audioTime: number;
  audioPlaying: boolean;
}