import React from 'react'
import { DownladContentTextH3, DownloadCon, DownloadContentDownload, DownloadContentDownloadText, DownloadContentImg, DownloadContentText, DownloadContentTextP } from './StyleDownload'

import MobileImg from '../../assets/mobile.jpeg'
import boxshot from '../../assets/boxshot.png'
import downloadIcon from '../../assets/download-icon.gif'

function Download() {
    return (
        <DownloadCon>
            <DownloadContentImg>
                <img src={MobileImg} />
                <DownloadContentDownload>
                    <img src={boxshot} />
                    <DownloadContentDownloadText>
                        <p>
                            Stranger Things <br />
                            <span style={{ color: '#0071eb', fontSize: '0.9rem', }}>Downloading...</span>
                        </p>
                    </DownloadContentDownloadText>
                    <img src={downloadIcon} />
                </DownloadContentDownload>
            </DownloadContentImg>
            <DownloadContentText>
                <div>
                    <DownladContentTextH3>
                        Download your shows <br/> to watch offline.
                    </DownladContentTextH3>
                    <DownloadContentTextP>
                        Save your favorites easily and always  <br />
                        have something to watch.
                    </DownloadContentTextP>
                </div>
            </DownloadContentText>
        </DownloadCon>
    )
}

export default Download