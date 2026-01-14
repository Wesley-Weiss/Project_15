//
export const increaseSession = () => ({
    type: 'INCREASE_SESSION_TIME'
})

export const decreaseSession = () => ({
    type: 'DECREASE_SESSION_TIME'
})

export const increaseBreak = () => ({
    type: 'INCREASE_BREAK_TIME'
})

export const decreaseBreak = () => ({
    type: 'DECREASE_BREAK_TIME'
})

export const resetTimer = () => ({
    type: 'RESET_TIMER'
})

export const resetAudio = () => ({
    type: 'RESET_AUDIO_PLAYING'
})

export const startTimer = () => ({
    type: 'START_TIMER'
})

export const stopTimer = () => ({
    type: 'STOP_TIMER'
})

export const updateTimer = () => ({
    type: 'UPDATE_TIMER'
})