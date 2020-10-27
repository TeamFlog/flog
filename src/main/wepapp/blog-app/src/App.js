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




const AppFont = styled.div`
  font-family : 'Cafe24Simplehae';  
`;

const AppBodyStyle = styled.div`
position: relative;
min-height:690px;
`;

const AppTitleStyle = styled.div`
font-weight: 800;
font-size:40px;
text-align:center;
margin-top: 50px;
`;

function App() {

  

  return (
    <AppFont>
     <Header/>
     <AppBodyStyle>
   <AppTitleStyle>
     가족블로그
     </AppTitleStyle>
  <Route path="/join" exact={true} component={Join}></Route>
  <Route path="/login" exact={true} component={Login}></Route>
  <Route path="/floglist" exact={true} component={FlogList}></Route>
  <Route path="/boardlist" exact={true} component={BoardList}></Route>
   </AppBodyStyle>
   <Footer/>
   </AppFont>
  );
}

export default App;
