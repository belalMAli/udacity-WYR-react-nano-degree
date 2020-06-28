import React from "react"
import { NavLink } from 'react-router-dom'

const QuestionCard = (props) => (
    <div>
        <div className="person">
            <p>{props.author} asks:</p>
        </div>
        <div>
            <div className="imgSection">
                <img></img>
            </div>
            <div className="questionSection">
                <h3>would you rather...</h3>
                <h4>
                    ...
                    {props.hint.substring(0, 15)}
                    ...
                </h4>
                <button>
                    <NavLink to={`/questions/${props.id}`}>
                        view poll
                    </NavLink>
                </button>
            </div>
        </div>
    </div>
)


export default QuestionCard;
