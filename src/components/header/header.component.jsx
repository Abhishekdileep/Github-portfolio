import React from 'react'
import styled from 'styled-components'

const HeaderWrapp = styled.div`
    background-color: grey;
    height: 25vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;
const Logo = styled.img`
    height: 64px;
    justify-content: start;
    pointer-events: none;
`;


export default function Header({logo }) {
    return (
        <HeaderWrapp >
        <Logo src={logo} className="App-logo" alt="logo" />
        <h1>My Github Portfolio
            </h1>               
      </ HeaderWrapp>
    )
}
