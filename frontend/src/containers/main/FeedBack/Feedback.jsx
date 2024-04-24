import React from "react";
import image from "../../../ressources/svg/Layer 1.svg"
import "./Feedback.scss"
import mediocre from "../../../ressources/svg/shy_465262 1.svg"
import happy from  "../../../ressources/svg/happy 1.svg"
import Majestic from "../../../ressources/svg/sunglasses 1.svg"

const  Feedback = () => {

    const feedbackData = [
        { name: 'malak ', comment: 'Great website!', emoji: '😊' },
        { name: 'User 1', comment: 'Great website!', emoji: '😊' },
        { name: 'User 2', comment: 'Very helpful!', emoji: '😂' },
        { name: 'User 3', comment: 'Awesome design!', emoji: '😎' },
        { name: 'User 3', comment: 'Awesome design!', emoji: '😎' },
        { name: 'User 3', comment: 'Awesome design!', emoji: '😎' },
        { name: 'User 3', comment: 'Awesome design! ........shuhsxbqfyuqv xsvyugsxv gxsqv xgyqx ', emoji: '😎' },
        // Add more feedback data as needed
    ];

    const cards = feedbackData.map((feedback, index) => (
        <div className="card2" key={index}>
            <div className="card-title2">
                <h2>{feedback.name}</h2>
            </div>
            <div className="card-body">
                <span className="emoji-2">{feedback.emoji}</span>
                <p>{feedback.comment}</p>

            </div>
        </div>
    ));

    const groupedCards = [];
    for (let i = 0; i < cards.length; i += 2) {
        groupedCards.push(
            <div className="card-pair" key={i}>
                {cards[i]}
                {cards[i + 1] && cards[i + 1]} {/* Render the second card only if it exists */}
            </div>
        );
    }

    return(
        <div className="feedback-container">
            <div className="parent">
                <div className="imag">
                    <img  src={image} alt=""/>
                    <h1><b>FEEDBACKS</b></h1>
                </div>

            </div>
            <div className="card-container">
                <div className="card">
                    <div className="card-title"> <h2> Don't Forget to give us a feedback </h2>
                        <div className="emojis">
                            <div className="emoji">
                                <span className="emoji-icon">
                                    <img src={mediocre} alt=""/>
                                </span>
                                <span className="emoji-name">Mediocre</span>
                            </div>
                            <div className="emoji">
                                <span className="emoji-icon">
                                    <img src={happy} alt=""/>
                                </span>
                                <span className="emoji-name">Good</span>
                            </div>
                            <div className="emoji">
                                <span className="emoji-icon">
                                    <img src={Majestic} alt=""/>
                                </span>
                                <span className="emoji-name">Majestic</span>
                            </div>
                        </div>

                    </div>
                    <div className="card-body">
                        <textarea placeholder="How can we improve our website..." />
                        <button type="submit">Submit</button>
                    </div>
                </div>


            </div>

            <div className="parent-container">
                <div className="card-container2">
                    {groupedCards}
                </div>
            </div>

        </div>
    );

}
export default Feedback;