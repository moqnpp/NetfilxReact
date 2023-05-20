import React from 'react'

import KidsImg from '../../assets/kids.png'
import { KidsCon, KidsContentText, KidsContentTextH3, KidsContentTextP } from './KidsStyle'

function Kids() {
    return (
        <KidsCon>
            <div style={{ width: "100%" }}>
                <img style={{ width: "100%" }} src={KidsImg} />
            </div>
            <KidsContentText>
                <div>
                    <KidsContentTextH3>Create profiles for kids</KidsContentTextH3>
                    <KidsContentTextP>Send kids on adventures with their favorite <br />
                        characters in a space made just for them <br />
                        free with your membership.
                    </KidsContentTextP>
                </div>
            </KidsContentText>
        </KidsCon>
    )
}

export default Kids