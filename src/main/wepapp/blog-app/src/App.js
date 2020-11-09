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

import BoardForm from './pages/board/BoardForm';
import Status from "./components/Status";
import UpdateForm from './pages/board/UpdateForm';
import { useDispatch } from 'react-redux';
import { login } from './store';

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

  const dispatch = useDispatch();



  useEffect(()=> {
    let jwtToken = localStorage.getItem("Authorization");
    /*
    if (jwtToken !== null) {
      dispatch(login());
    }
    */
   
    const loggedInfo = JSON.parse(localStorage.getItem("user")); // 로그인 정보를 로컬스토리지에서 가져옵니다.
    if(!loggedInfo) return; // 로그인 정보가 없다면 여기서 멈춥니다.

    dispatch(login());
    

  
  },[]);

  


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
    <Route path="/updateForm/:bno" exact={true} component={UpdateForm}></Route>
    <Route path="/boardForm" exact={true} component={BoardForm}></Route>
    </AppBodyStyle>

   <Footer/>
   </AppFont>
  );
}

export default App;
