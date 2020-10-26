import React, { useEffect } from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Nav from "./components/Nav";
import Join from "./pages/person/Join";
import Login from "./pages/person/Login";
import styled from "styled-components";

const AppFont = styled.div`
  font-family : 'Cafe24Simplehae';
`;

const AppBackgroundStyle = styled.div`
  background-image: url("../images/background.jpg");
  height: 600px;
  weight: 1200px;
  background-repeat: no-repeat;
  background-position: center
`;
const AppTitleStyle = styled.div`
font-weight: 800;
font-size:40px;
text-align:center;
`;
function App() {

  

  return (
    <AppFont>
   <AppBackgroundStyle>
     <Nav/>
   <AppTitleStyle><br/><br/>가족블로그</AppTitleStyle>
  <Route path="/join" exact={true} component={Join}></Route>
  <Route path="/login" exact={true} component={Login}></Route>
 
   </AppBackgroundStyle>
   </AppFont>
  );
}

export default App;
