import React from 'react'

export default function UserParticipation(props) {
    

    const {question, choices} = props.data
    

    const handleSubmit = (e) => {
        e.preventDefault()        
    }

    return (
    <div>
        <form name='votes-form' onSubmit={handleSubmit}>
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
    </div>
  )
}
