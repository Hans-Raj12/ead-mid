import React, {useState, useEffect} from 'react'

export default function Timer(props) {

    const [timer, setTimer] = useState(props.initial)
    const [message, setMessage] = useState('')
    const countDown=()=>{
        if(timer>0)
            setTimer(timer-1)
        else
            setMessage("Time's up")
    }

    useEffect(()=>{
        setTimeout(countDown,1000)    
    
    },[timer])



  return (
    <div>
      countdown timer: {timer}
      {message && message.length>0 ? (<p>{message}</p>): ''}
    </div>
  )
}
