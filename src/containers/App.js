import React from 'react';
import logo from '../logo.svg';
import styled , {createGlobalStyle } from 'styled-components'
import Header from '../components/header/header.component'
import Profile from './profile'

const GlobalStyle = createGlobalStyle`
  body{
    margin : 0 ; 
    padding : 0;
    font-family : -apple-system , BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans" ,"Helvetica Neue",
 sans-serif;
  }
`;

const AppWrapper = styled.div`
text-align: center;
`

function App() {
  return (
    <AppWrapper className="App">
      <Header logo = {logo} />
      <Profile />
    </AppWrapper>
  );
}

export default App;
