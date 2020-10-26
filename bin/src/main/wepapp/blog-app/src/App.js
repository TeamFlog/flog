import React, { useEffect } from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Join from "./pages/person/Join";
import BoardList from "./pages/board/BoardList";
import FlogList from "./pages/flog/FlogList"
import Login from "./pages/person/Login";
import styled from "styled-components";
import Status from "./components/Status";

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
     <Header/>
   <AppBackgroundStyle>
   <AppTitleStyle><br/><br/>가족블로그</AppTitleStyle>
  <Route path="/join" exact={true} component={Join}></Route>
  <Route path="/login" exact={true} component={Login}></Route>
  <Route path="/floglist" exact={true} component={FlogList}></Route>
  <Route path="/boardlist" exact={true} component={BoardList}></Route>
   </AppBackgroundStyle>
   <Footer/>
   </AppFont>
  );
}

export default App;
