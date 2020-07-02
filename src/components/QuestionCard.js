import React from "react"
import { NavLink } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap';

const QuestionCard = (props) => (
    <Card className="questionCard">
        <div className="container-fluid">
            <div className="row">
                <Card.Img className="col-md-3" src={props.avatar} />
                <Card.Body className="col-md-9">
                    <Card.Title>{props.author} asks:</Card.Title>
                    <h3>would you rather...</h3>
                    <Card.Text>
                        ...
                    {props.hint.substring(0, 15)}
                    ...
      </Card.Text>
                    <Button className="w-100 p-0" variant="outline-secondary">
                        <NavLink className="w-100 d-inline-block p-1" to={`/questions/${props.id}`}>
                            view poll
                    </NavLink>
                    </Button>
                </Card.Body>
            </div>
        </div>
    </Card>
)


export default QuestionCard;
