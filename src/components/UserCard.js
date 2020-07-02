import React from "react"
import { Card } from 'react-bootstrap';

const UserCard = (props) => (
    <div>
        <Card className="questionCard leaderboardCard w-50 ml-auto mr-auto mb-4">
            <span className="user-place">{props.place + 1}</span>
            <div className="container">
                <div className="row">
                    <div className="col-md-2 img-con pl-0">
                        <Card.Img src={props.avatarURL} />
                    </div>
                    <Card.Body className="col-md-7">
                            <div className="infoSection">
                                <h3>{props.name}</h3>
                                <div className="container-fluid p-0">
                                    <div className="row">
                                    <p className="col-9">Answered questions</p>
                                    <p className="col-3">{props.answered}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="container-fluid p-0">
                                    <div className="row">
                                    <p className="col-9">created questions</p>
                                    <p className="col-3">{props.created}</p>
                                    </div>
                                </div>
                            </div>
                    </Card.Body>
                    <Card.Body className="col-md-3 scoreSection">
                        <div className="scoreContainer text-center">
                            <p>score</p>
                            <div className="score text-center">
                                <p>{props.score}</p>
                            </div>
                        </div>
                    </Card.Body>
                </div>
            </div>
        </Card>
    </div>
)


export default UserCard;
