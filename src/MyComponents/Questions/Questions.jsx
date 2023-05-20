import React, { useState } from 'react'
import { QuestionsCon, QuestionsContent, QuestionsInfo, QuestionsInfoText, QuestionsTitlBtn, QuestionsTitlH3, QuestionsTitle } from './QuestionsStyle';

function Questions({ title, info }) {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <QuestionsCon>
            <QuestionsContent>
                <QuestionsTitle>
                    <QuestionsTitlH3>{title}</QuestionsTitlH3>
                    <QuestionsTitlBtn onClick={() => setShowInfo(!showInfo)}>
                        {showInfo ? '-' : '+'}
                    </QuestionsTitlBtn>
                </QuestionsTitle>
            </QuestionsContent>
            <QuestionsInfo>
                {showInfo && <QuestionsInfoText>{info}</QuestionsInfoText>}
            </QuestionsInfo>
        </QuestionsCon>
    )
}

export default Questions