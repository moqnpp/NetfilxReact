import styled from "styled-components";

export const EnjoyCon = styled.section`
    background: var(--black);
    display: flex;
    justify-content: space-between;
    height: auto;
    color: var(--white);
    padding: 5rem 15rem;
    border-bottom: 8px solid var(--borderbottom);
`
export const EnjoyContentText = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`
export const EnjoyContentImg = styled.div`
    width: 100%;
    position: relative;
    img {
        position: relative;
        z-index: 1;
        width: 100%;
    }
    video {
        position: absolute;
        top:50%;
        left:50%;
        width: 73%;
        transform: translate(-50%,-54%);
    }
    
`
export const EnjoyContentTextH3 = styled.h3`
    font-size: 3rem;
    color: var(--white);
`
export const EnjoyContentTextP = styled.p`
    font-size: 1rem;
    color: var(--white);
    margin-top: 1rem;
`