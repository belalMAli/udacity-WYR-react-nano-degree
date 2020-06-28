import React from "react"

const UserCard = (props) => (
    <div>
        <div className="imgSection">
            <img src={props.avatarURL}></img>
        </div>
        <div className="infoSection">
            <h3>{props.name}</h3>
            <div>
                <p>answered questions</p>
                <p>{props.answered}</p>
            </div>
            <div>
                <p>asked questions</p>
                <p>{props.created}</p>
            </div>
        </div>
        <div className="scoreSection">
            <div className="scoreContainer">
                <p>score</p>
                <div className="score">
                    <p>{props.score}</p>
                </div>
            </div>
        </div>
    </div>
)


export default UserCard;
