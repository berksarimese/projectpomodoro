import ActionTypes from "../actionTypes";

const lightTheme = (val) => {
    return {
        type:ActionTypes.theme.LIGHT_THEME,payload:val
    }
}

const darkTheme = (val) => {
    return {
        type:ActionTypes.theme.DARK_THEME,payload:val
    }
}

const redTheme = (val) => {
    return {
        type:ActionTypes.theme.RED_THEME,payload:val
    }
}

const blueTheme = (val) => {
    return {
        type:ActionTypes.theme.BLUE_THEME,payload:val
    }
}

const midnightTheme = (val) => {
    return {
        type:ActionTypes.theme.MIDNIGHT_THEME,payload:val
    }
}

const themeAction = {
    lightTheme,
    darkTheme,
    redTheme,
    blueTheme,
    midnightTheme
}

export default themeAction;