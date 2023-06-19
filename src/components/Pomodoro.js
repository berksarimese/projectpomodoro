import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Actions from '../redux/actions'
import { LuChevronsUp, LuChevronsDown, LuMinus } from "react-icons/lu";
import '../styles/pomodoro.css'

const Timer = () => {

  //REDUX
  const timer = useSelector(state => state.timerReducers);
  const theme = useSelector(state => state.themeReducer);
  const dispatch = useDispatch();

  const tSecond = (timer.second).toString().padStart(2, '0');
  const tMinute = (timer.minute).toString().padStart(2, '0');
  const tHour = (timer.hour).toString().padStart(2, '0');

 

  //STATE
  const [start, setStart] = useState(false);
  const [startButton, setStartButton] = useState('START');
  const [strike, setStrike] = useState({
    strike:1,
    text:'#1',
    status:'WORK TIME',
    break:false
  });


  //START STOP
  useEffect(() => {
    if(start ? setStartButton('PAUSE') : setStartButton('START')); 
  }, [start])
  
  //INTERVAL
  useEffect(() => {
    let interval = '';

    if(start) {
     interval = setInterval(() => {
      dispatch(Actions.timerActions.decreaseSecond(1));
    }, 1000); } else {
        clearInterval(interval);
       }
    return () => {
      clearInterval(interval);
    };
  }, [dispatch,start]);

  //TIMER AND STRIKE CHECK
  useEffect(() => {
    if(start === true) {
      if(tSecond !== '00' || tMinute !== '00' || tHour !== '00') {
        if(tSecond <= 0) {
          dispatch(Actions.timerActions.increaseSecond(59));
          dispatch(Actions.timerActions.decreaseMinute(1));
          if(tMinute <= 0) {
            dispatch(Actions.timerActions.increaseMinute(60));
            dispatch(Actions.timerActions.decreaseHour(1));
          }
        }
      } else { 
        
        if(strike.strike < 4) {
          if(strike.break) {
            setStrike({...strike,strike: strike.strike + 1,status:'WORK TIME',text:`#${strike.strike + 1}`,break:false});
            dispatch(Actions.timerActions.timerReset());
          } else {
            setStrike({...strike,status:'SHORT BREAK',break:true});
            dispatch(Actions.timerActions.shortBreak());
          }          
        } else {
          if(strike.break) {
            setStrike({...strike,strike: 1,status:'WORK TIME',text:'#1',break:false});
            dispatch(Actions.timerActions.timerReset());
          } else {
            setStrike({...strike,status:'LONG BREAK',break:true});
            dispatch(Actions.timerActions.longBreak());
          }     
        }
       }
    }
  })

  //RESET
  const reset = () => {
    dispatch(Actions.timerActions.timerReset());
    setStrike({...strike,strike: 1,text:'#1', status:'WORK TIME',break:false});
    setStart(false);
  }
  

  return (
    <div className='timer-container'>
      <div className='title' style={theme.title}>PROJECT POMODORO</div>
      <div className='status' style={theme.title}>{strike.status} #{strike.strike}</div>
      <div className='container'>
        <div className='item' style={theme.timerItem}>
          <button className='button' disabled={start ? true : false} style={start ? theme.disableButton : {}} onClick={() => (tHour < 23 && dispatch(Actions.timerActions.increaseHour(1)))}>{start ? <LuMinus /> : <LuChevronsUp /> }</button>
          <div className='text'>{tHour}</div>
          <button className='button' disabled={start ? true : false} style={start ? theme.disableButton : {}} onClick={() => (tHour > 0 && dispatch(Actions.timerActions.decreaseHour(1)))}>{start ? <LuMinus /> : <LuChevronsDown /> }</button>
        </div>
        <div className='dot'>:</div>
        <div className='item' style={theme.timerItem}>
          <button className='button' disabled={start ? true : false} style={start ? theme.disableButton : {}} onClick={() => (tMinute < 59 && dispatch(Actions.timerActions.increaseMinute(1)))}>{start ? <LuMinus /> : <LuChevronsUp /> }</button>
          <div className='text'>{tMinute}</div>
          <button className='button' disabled={start ? true : false} style={start ? theme.disableButton : {}} onClick={() => (tMinute > 0 && dispatch(Actions.timerActions.decreaseMinute(1)))}>{start ? <LuMinus /> : <LuChevronsDown /> }</button>
        </div>
        <div className='dot'>:</div>
        <div className='item' style={theme.timerItem}>
          <button className='button' disabled={start ? true : false} style={start ? theme.disableButton : {}} onClick={() => (tSecond < 59 && dispatch(Actions.timerActions.increaseSecond(1)))}>{start ? <LuMinus /> : <LuChevronsUp /> }</button>
          <div className='text'>{tSecond}</div>
          <button className='button' disabled={start ? true : false} style={start ? theme.disableButton : {}} onClick={() => (tSecond > 0 && dispatch(Actions.timerActions.decreaseSecond(1)))}>{start ? <LuMinus /> : <LuChevronsDown /> }</button>
        </div>
      </div>
      
        <div className='control-button' style={start ? theme.startButtonActive : theme.startButton } onClick={() => setStart(!start)}>{startButton}</div>

        <div style={{display:'flex',flexDirection:'row',width:'100%',gap:'20px'}}>
          <div className='control-mini-button' style={theme.resetButton} onClick={() => reset()}>RESET</div>
          <div className='control-mini-button' style={theme.nextButton} onClick={() => (dispatch(Actions.timerActions.setZero()), setStart(true))}>NEXT</div>
        </div>
      
      
    
    </div>
  )
}

export default Timer