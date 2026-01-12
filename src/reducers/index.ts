import type { TimerAction } from "../types"

const initialState = {
    sessionLength: 25,
    breakLength: 5,
    inSession: true,
    timeLeft: 1500,
    isRunning: false,
    audioTime: 0,
    audioPlaying: false
}
export const TimerReducer = (state = initialState, action: TimerAction) => {
    switch (action.type) {
        case 'INCREASE_SESSION_TIME': {
            const newSessionLength = state.sessionLength + 1;
            return ({
                ...state,
                sessionLength: newSessionLength > 60? state.sessionLength: newSessionLength,
                timeLeft: newSessionLength > 60? state.sessionLength * 60 : newSessionLength * 60
            });
        }
        
        case 'DECREASE_SESSION_TIME': {
            const newSessionLength = state.sessionLength - 1;
            return {
              ...state,
              sessionLength:
                newSessionLength > 0 ? newSessionLength : state.sessionLength,
              timeLeft:
                newSessionLength > 0 ? newSessionLength * 60 : state.sessionLength * 60,
            };
        }
            
        case 'INCREASE_BREAK_TIME': {
            const newBreakLength = state.breakLength + 1;
            return {
              ...state,
              breakLength: newBreakLength > 60? state.breakLength : newBreakLength,
             
            };
        }

        case 'DECREASE_BREAK_TIME': {
            const newBreakLength = state.breakLength - 1;
            return {
              ...state,
              breakLength:
                newBreakLength > 0 ? newBreakLength : state.breakLength,
            };
        }
            
        case 'RESET_TIMER': 
            return {
              sessionLength: 25,
              breakLength: 5,
              inSession: true,
              timeLeft: 1500,
              isRunning: false,
              audioTime: 0,
              audioPlaying: false,
            };
        
        case 'START_TIMER':
            return ({
                ...state,
                isRunning: true
            })
        
        case 'STOP_TIMER':
            return ({
                ...state,
                isRunning: false,
                audioPlaying: false
            })
        
        case 'UPDATE_TIMER': {
            let isSession = state.inSession;
            let timerTimeLeft = state.timeLeft;
            let play = state.audioPlaying;

            if (state.timeLeft == 0 && state.inSession) {
            isSession = false;
            play = true;
            timerTimeLeft = state.breakLength * 60 + 1;
            }

            if (state.timeLeft == 0 && !state.inSession) {
            isSession = true;
            play = true;
            timerTimeLeft = state.sessionLength * 60 + 1;
            }
            
            return {
            ...state,
            timeLeft: state.isRunning ? timerTimeLeft - 1 : timerTimeLeft,
            inSession: isSession,
            audioPlaying: play,
            };
        }

        case 'RESET_AUDIO_PLAYING': {
              let play = false;

              if (state.timeLeft === 0) {
                play = true;
              }

              return {
                ...state,
                audioPlaying: play,
              };
        }

        default:
            return ({
                ...state,
            });
    }
}