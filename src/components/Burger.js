import React, { useState } from 'react'
import '../styles/pomodoro.css'
import Actions from '../redux/actions';
import { useSelector, useDispatch } from 'react-redux'
import { LuAlignJustify } from "react-icons/lu";

const Themeselect = () => {

  const theme = useSelector(state => state.themeReducer)
  const dispatch = useDispatch();
  
  const [burger, setBurger] = useState(false);
  console.log(burger)

  const burgerStyle = {
    burgerButton: {right: '10px'},
    burgerBox: {left:'0'}
  }

  return (
    <div className='burger-main' style={burger ? burgerStyle.burgerBox : {}}>
      <div className='burger' style={burger ? burgerStyle.burgerButton : {}} onClick={()=>setBurger(!burger)}><LuAlignJustify style={theme.title}/></div>
      <div className='theme-container' style={burger ? burgerStyle.burgerBox : {}}>
        <div className='column'>
          <div className='title' style={{marginTop:'60px'}}><span style={theme.title}>WHAT IS POMODORO</span></div>
          <div className='text' style={theme.title}>The Pomodoro technique is a time management method that 
          involves breaking your work periods into short intervals, aiming to enhance productivity. It was developed 
          by Francesco Cirillo from Italy. In this technique, typically, you work for 25 minutes followed by a 5-minute 
          break. This cycle of focused work and short breaks is repeated regularly. The Pomodoro technique is used as 
          an effective tool to improve concentration skills, manage time better, and work efficiently.</div>
        </div>

        <div className='column'>
          <div className='title' style={theme.title}>THEMES</div>
          <div className='theme-box' onClick={() => dispatch(Actions.themeAction.lightTheme())} style={{background:'#f8f9fa'}}></div>
          <div className='theme-box' onClick={() => dispatch(Actions.themeAction.darkTheme())} style={{background:'#212529'}}></div>
          <div className='theme-box' onClick={() => dispatch(Actions.themeAction.redTheme())} style={{background:'#bd4747'}}></div>
          <div className='theme-box' onClick={() => dispatch(Actions.themeAction.blueTheme())} style={{background:'#317baf'}}></div>
          <div className='theme-box' onClick={() => dispatch(Actions.themeAction.midnightTheme())} style={{background:'linear-gradient(45deg, #1c2052, #410e6b, #502570)'}}></div>
        </div>

        <div className='column'>
          <div className='text' style={{opacity:'0.1', fontWeight:'800', marginBottom:'70px'}}><span style={theme.title}>BERK SARIMEŞE</span></div>
        </div>
      </div>
    </div>
  )
}

export default Themeselect