import styled from "styled-components";

export const DownloadCon = styled.section`
    display: flex;
    justify-content: space-between;
    background: var(--black);
    padding: 5rem 15rem;
    color: var(--white);
    border-bottom: 8px solid var(--borderbottom);
`

export const DownloadContentImg = styled.div`
    position: relative;
    width: 100%;
    img {
        width: 100%;
    }

`
export const DownloadContentDownload = styled.div`
    position: absolute;
    border: 2px solid hsla(0,0%,100%,.25);
    border-radius: 10px;
    background: var(--black);
    display: flex ;
    padding: 0.5rem;
    width: 24vw;
    height: 90px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,80%);
    justify-content: space-between;
    img {
        max-width: 3.5vw;
    }
`
export const DownloadContentDownloadText= styled.div`
    display: flex;
    align-items: center;
    margin-left: -60px;
`
export const DownloadContentText= styled.div`
    width: 100%;
    display: flex;
    align-items: center;

`
export const DownladContentTextH3 = styled.h3`
    font-size: 2.5rem;
`
export const DownloadContentTextP = styled.p`
    font-size: 1rem;
    margin-top: 1rem;
`