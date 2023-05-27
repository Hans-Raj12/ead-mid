import React, {useEffect, useLayoutEffect, useState} from 'react'
import './style.css'
import UserParticipation from './UserParticipation'
const poll_questions = [
    {

        "question": "What is your favorite programming language?",
        "choices": [         
          { "id": 1, "label": "JavaScript", "votes": 0 },         
          { "id": 2, "label": "Python", "votes": 0 },
          { "id": 3, "label": "Java", "votes": 0 },
          { "id": 4, "label": "C#", "votes": 0 }
        ]
    }
]
export default function PollDisplay() {

    const [question, setQuestion] = useState({

        "question": "What is your favorite programming language?",
        "choices": [         
          { "id": 1, "label": "JavaScript", "votes": 0 },         
          { "id": 2, "label": "Python", "votes": 0 },
          { "id": 3, "label": "Java", "votes": 0 },
          { "id": 4, "label": "C#", "votes": 0 }
        ]
    })
    const [vote, setVote] = useState()

    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target)
    }

      
  return (
     <>   
        <form  name='votes-form'>
            <h3>{`1. ${question.question}`}</h3>
            <fieldset name="choices">
            {question.choices&& question.choices.map((choice)=>{
                    return(
                        <div className='choice'>
                            <label htmlFor={choice.label}>{`${choice.id}. ${choice.label}`}</label>
                        </div>
                    )
            })}
            </fieldset>
    </form>
    <div>
        <h1>Votes</h1>
            {question.choices&& question.choices.map((choice)=>{
                    return(
                        <div className='votes'>
                            <p>{`${choice.id}. ${choice.label}:`}</p>
                            <p>{`${choice.votes} votes`}</p>
                        </div>
                    )
            })}
    </div>

    <UserParticipation data={question}/>
    </>
  )
}
