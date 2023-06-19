import ActionTypes from "../actionTypes";

const initialState = { second: 0, minute: 25, hour: 0 };
const short_break = { second: 0, minute: 5,hour: 0 };
const long_break = { second: 0, minute: 15,hour:0 };
const timer_zero = { second: 0, minute: 0, hour:0 };

const timerReducers = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.timer.INCREASE_SECOND:
            return {...state,second: state.second + action.payload};
        case ActionTypes.timer.INCREASE_MINUTE:
            return {...state,minute: state.minute + action.payload};
        case ActionTypes.timer.INCREASE_HOUR:
            return {...state,hour: state.hour + action.payload};
        case ActionTypes.timer.DECREASE_SECOND:
            return {...state,second: state.second - action.payload};
        case ActionTypes.timer.DECREASE_MINUTE:
            return {...state,minute: state.minute - action.payload};
        case ActionTypes.timer.DECREASE_HOUR:
            return {...state,hour: state.hour - action.payload};
        case ActionTypes.timer.TIMER_RESET:
            return initialState;
        case ActionTypes.timer.SHORT_BREAK:
            return short_break;
        case ActionTypes.timer.LONG_BREAK:
            return long_break;
        case ActionTypes.timer.SET_ZERO:
            return timer_zero;
        default:
            return state;
    }
}

export default timerReducers;