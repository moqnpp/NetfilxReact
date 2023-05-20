import styled from "styled-components";
import BgHeader from '../../assets/bgheader.jpeg'

export const HeaderCon = styled.section`
    height: 720px;
    background: url(${BgHeader});
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.5);
    border-bottom: 8px solid #222;
    background-position: center;
    background-size: cover;
`

export const NavCon = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 2rem 4rem;
    svg {
        fill: rgba(229, 9, 20, 1);
        width: 150px;
    }
`
export const Menu = styled.ul`
    display: flex;
    list-style: none;
    li {
        margin: 0rem 2rem;
        a{
            color: rgba(255, 255, 255, 1);
            text-decoration: none;
        }
    }
`
export const BtnEng = styled.a`
    border: 1px solid rgba(255, 255, 255, 1);
    border-radius: 2px;
    background: transparent;
    padding: 0.5rem 1rem;
    color: var(--white);
`

export const BtnSignin = styled.a`
    /* border: 1px solid #ffff; */
    border-radius: 3px;
    background: var(--red);
    color: var(--white);
    padding: 0.5rem 1rem;
`

export const MainContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
    text-align: center; 
`

export const ContentHead1 = styled.h1`
    font-size: 4rem;
    font-weight: 900px;
    color: var(--white);
`
export const ContentHead3 = styled.h1`
    font-size: 1.5rem;
    font-weight: 500px;
    color: var(--white);
    margin-top: 16px;
`
export const ContentP = styled.h1`
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.875rem;
    color: var(--white);
    margin-top: 16px;
`
export const ContentEmail = styled.div`
    margin-top: 1rem;
`
export const EmailInput = styled.input`
    padding: 1.5rem;
    width:500px;
`
export const BtnSubmit = styled.button`
    background-color: var(--red);
    color: var(--white);
    padding: 20px 1rem;
    width: 200px;
    font-size: 1.5rem;
    border: none;
    position: relative;
    top: 4px;
`
