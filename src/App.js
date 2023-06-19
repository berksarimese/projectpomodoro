import React from 'react'
import Pomodoro from './components/Pomodoro'
import Burger from './components/Burger'
import './styles/pomodoro.css'
import { useSelector } from 'react-redux';

const App = () => {

  const theme = useSelector(state => state.themeReducer);


  return (
    <div className='main-container' style={theme.mainBackground}> 
        <Pomodoro />
        <Burger />
    </div>
  )
}

export default App