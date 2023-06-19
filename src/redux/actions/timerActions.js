import ActionTypes from "../actionTypes";

const increaseSecond = (val) => {
    return{type:ActionTypes.timer.INCREASE_SECOND,payload:val}
}

const increaseMinute = (val) => {
    return{type:ActionTypes.timer.INCREASE_MINUTE,payload:val}
}

const increaseHour = (val) => {
    return{type:ActionTypes.timer.INCREASE_HOUR,payload:val}
}

const decreaseSecond = (val) => {
    return{type:ActionTypes.timer.DECREASE_SECOND,payload:val}
}

const decreaseMinute = (val) => {
    return{type:ActionTypes.timer.DECREASE_MINUTE,payload:val}
}

const decreaseHour = (val) => {
    return{type:ActionTypes.timer.DECREASE_HOUR,payload:val}
}

const timerReset = (val) => {
    return{type:ActionTypes.timer.TIMER_RESET,payload:val}
}

const shortBreak = (val) => {
    return{type:ActionTypes.timer.SHORT_BREAK,payload:val}
}

const longBreak = (val) => {
    return{type:ActionTypes.timer.LONG_BREAK,payload:val}
}

const setZero = (val) => {
    return{type:ActionTypes.timer.SET_ZERO,payload:val}
}

const timerActions = {
    increaseSecond,
    increaseMinute,
    increaseHour,
    decreaseSecond,
    decreaseMinute,
    decreaseHour,
    timerReset,
    shortBreak,
    longBreak,
    setZero
}

export default timerActions;