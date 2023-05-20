import React from 'react'
import TVimg from '../../assets/tv.png'
import TVvdo from '../../assets/video-tv.mp4'
import { EnjoyCon, EnjoyContentImg, EnjoyContentText, EnjoyContentTextH3, EnjoyContentTextP } from './StyleEnjoy'

function Enjoy() {
    return (
        <EnjoyCon>
            <EnjoyContentText>
                <div>
                    <EnjoyContentTextH3>Enjoy on your TV</EnjoyContentTextH3>
                    <EnjoyContentTextP>Watch on Smart TVs, Playstation, Xbox,<br />
                        Chromecast, Apple TV, Blu-ray players,<br />
                        and more.</EnjoyContentTextP>
                </div>
            </EnjoyContentText>
            <EnjoyContentImg>
                <img src={TVimg} alt='tv img' />
                <video autoPlay playsInline muted loop>
                    <source src={TVvdo} type='video/mp4' />
                </video>
            </EnjoyContentImg>
        </EnjoyCon>
    )
}

export default Enjoy