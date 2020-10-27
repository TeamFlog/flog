import React, { useEffect,useState } from 'react';
import { Link } from "react-router-dom";   
import styled from "styled-components";
import Status from "../../components/Status";
import Chat from "../../components/Chat";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const BoardStyle = styled.div`
display: grid;
grid-template-columns: auto auto auto;
justify-content: space-around;
min-height: 680px;
`;

const BoardListStyle = styled.div`
    display:grid;
    grid-template-rows : auto auto auto auto auto;
    background-color:#EAEAEA;
    grid-gap: 15px;
    position: relative;
    border-radius: 6px;
    padding: 20px 30px;
    box-shadow: 0 8px 8px 0 rgb(214, 214, 214);
    margin-bottom:30px;
    
  `;
const FlogimgStyle = styled.img`
max-width:500px; //보드이미지최대너비
`;


const BoardList = () => {
    return (
        <div>
        <BoardStyle>
        <Status/>
        <div>
        <BoardListStyle>
            <div>글제목: 두둥실글자</div>
            <FlogimgStyle src="images/background.jpg"/>
            <div>글내용: 아이가 넷</div>
            <div>작성일: 2020-10-26</div>
            <div>작성자: 마스터</div>
        </BoardListStyle>
        <BoardListStyle>
            <div>글제목: 두둥실글자</div>
            <FlogimgStyle src="images/background.jpg"/>
            <div>글내용: 아이가 넷</div>
            <div>작성일: 2020-10-26</div>
            <div>작성자: 마스터</div>
        </BoardListStyle>
        <BoardListStyle>
            <div>글제목: 두둥실글자</div>
            <FlogimgStyle src="images/background.jpg"/>
            <div>글내용: 아이가 넷</div>
            <div>작성일: 2020-10-26</div>
            <div>작성자: 마스터</div>
        </BoardListStyle>
        <BoardListStyle>
            <div>글제목: 두둥실글자</div>
            <FlogimgStyle src="images/background.jpg"/>
            <div>글내용: 아이가 넷</div>
            <div>작성일: 2020-10-26</div>
            <div>작성자: 마스터</div>
        </BoardListStyle>
        <BoardListStyle>
            <div>글제목: 두둥실글자</div>
            <FlogimgStyle src="images/background.jpg"/>
            <div>글내용: 아이가 넷</div>
            <div>작성일: 2020-10-26</div>
            <div>작성자: 마스터</div>
        </BoardListStyle>
        </div>
        <Chat/>
        </BoardStyle>
        </div>
    );
};

export default BoardList;
