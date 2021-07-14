import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CssBody = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #000;
    font-family: sans-serif;
    margin: 0;
    padding-top: 50px;
    color: #fff;
`

export const CssMainContent = styled.div`
    display: flex;
    height: 80%;
    justify-content: space-around;
    background-color: #282c34;
`

export const CssContainer = styled.div`
    padding: 1rem 4rem 1rem 4rem;
`

export const CssH1 = styled.h1`
    font-weight: 300;
    font-size: 70px;
    text-transform: uppercase;
`

export const CssH2 = styled.h2`
    font-weight: 300;
    font-size: 35px;
    text-transform: uppercase;
`

export const CssP = styled.p`
    font-weight: 300;
`

export const CssStrong = styled.strong`
    font-weight: 600;
`

export const CssFormulario = styled.div`
    margin: 0 auto;
    background-color: #5b5b5b;
    width: 25%;
    padding: 2rem;
`
export const CssForm = styled.form`
    width: 25%;
    padding: 0.5rem;
`

export const CssLabel = styled.label`
    display: inline-block;
    text-align: right;
`

export const CssInput = styled.input`
    font: 1em sans-serif;
    width: 300px;
    box-sizing: border-box;
    border: 1px solid #5b5b5b;
`


export const CssButton = styled.button`
    background-color: #4CAF50;
    border: #4CAF50;
    color: white;
    padding: 10px 24px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 4px;
    margin: 15px;
`

export const CssUl = styled.ul`
    display: flex;
    list-style: none;
`

export const CssLi = styled.li`
    padding: .5em;
`

export const CssImg = styled.img`
    padding: .5em;
    width: 125px;
    height: auto;
`

export const CssLink = styled(Link)`
    display: flex;
    width: 100%;
    text-align: center;
    margin: 2rem auto;
    background-color: #000;
    padding: .5rem 0;
    color: #fff;
    text-decoration: none;
`