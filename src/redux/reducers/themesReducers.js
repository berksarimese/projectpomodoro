import ActionTypes from "../actionTypes";

const lightTheme = {
    mainBackground: {background:'#f8f9fa'},
    timerItem : {background:'#adb5bd'},
    title: {color:'#212529'},
    disableButton : {background:'#85919d'},
    startButton : {background:'#66d69c'},
    startButtonActive : {background:'#6695d6'},
    resetButton : {background:'#d66666'},
    nextButton : {background:'#e1d441'}
};

const darkTheme = {
    mainBackground: {background:'#212529'},
    timerItem : {background:'#292e33'},
    title: {color:'#f8f9fa'},
    disableButton : {background:'#191c1f', color:'red'},
    startButton : {background:'#2fb16e'},
    startButtonActive : {background:'#6695d6'},
    resetButton : {background:'#d66666'},
    nextButton : {background:'#e1d441'},
    workTime : {background: 'rgba(99, 224, 255, 0.2)'}
};

const redTheme = {
    mainBackground: {background:'#bd4747'},
    timerItem : {background:'#aa4141'},
    title: {color:'#f8f9fa'},
    disableButton : {background:'#8d3535'},
    startButton : {background:'#66d69c'},
    startButtonActive : {background:'#6695d6'},
    resetButton : {background:'#ea9999'},
    nextButton : {background:'#e1d441'}
};

const blueTheme = {
    mainBackground: {background:'#317baf'},
    timerItem : {background:'#367aab'},
    title: {color:'#f8f9fa'},
    disableButton : {background:'#316f9b'},
    startButton : {background:'#66d69c'},
    startButtonActive : {background:'#f0bc4c'},
    resetButton : {background:'#d66666'},
    nextButton : {background:'#e1d441'}
};

const midnightTheme = {
    mainBackground: {background: 'linear-gradient(45deg, #1c2052, #410e6b, #502570)' },
    timerItem : {background: 'linear-gradient(45deg, #1c2052, #410e6b, #502570)'},
    title: {color:'#f8f9fa'},
    disableButton : {background:'#28104c', color:'purple'},
    startButton : {background:'#2fb16e'},
    startButtonActive : {background:'#6695d6'},
    resetButton : {background:'#d66666'},
    nextButton : {background:'#e1d441'},
    workTime : {background: 'rgba(99, 224, 255, 0.2)'} 
}



const themeReducer=(state=darkTheme,action) => {
    switch(action.type) {
        case ActionTypes.theme.LIGHT_THEME:
            return lightTheme;
        case ActionTypes.theme.DARK_THEME:
            return darkTheme;
        case ActionTypes.theme.BLUE_THEME:
            return blueTheme;
        case ActionTypes.theme.RED_THEME:
            return redTheme;
        case ActionTypes.theme.MIDNIGHT_THEME:
            return midnightTheme;
        default:
            return state;
    }
}

export default themeReducer;