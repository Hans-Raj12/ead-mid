import React, {useState} from 'react'
import AnotherUserParticipation from './AnotherUserParticipation'
import ThankYouMessage from './ThankYouMessage'

export default function UserParticipation(props) {
    

    const {question, choices} = props.data
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault() 
        setSubmitted(true)
    }

    return (
    <div>
        {submitted?(<ThankYouMessage/>): ( <form name='votes-form' onSubmit={handleSubmit}>
            <h1>{question}</h1>
            <fieldset id='choice-group' name='choices'>
                {choices&& choices.map((choice)=>{
                        return(
                            <div className='choice'>
                                <label htmlFor={choice.label}>{`${choice.id}. ${choice.label}`}</label>
                                <input type='radio' id={choice.label} name={choice.label} value={choice.label}/>
                            </div>
                        )
                })}
                <button type='submit'>Submit</button>
            </fieldset>
            
        </form>
        )
        }

        <AnotherUserParticipation/>
    </div>
  )
}
