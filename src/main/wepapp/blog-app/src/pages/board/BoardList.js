<<<<<<< HEAD
import React, { useEffect,useState } from 'react';
=======
import React, { useState, useEffect } from 'react';
>>>>>>> ec437b7f940e06e2a212a88f94e8a77026416798
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


const BoardList = (props) => {

    const [boards, setBoards] = useState([]);
        // 페이징은 아직 안했음.

    useEffect(()=>{
        fetch("http://localhost:8000/boardList")
        .then((res)=>res.json())
        .then((res)=>
        {setBoards(res.content);
        console.log(res);
        console.log(res.content);
        }
        );
    },[]);

    return (
        <div>
        <BoardStyle>
<<<<<<< HEAD
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
=======
        <Status>
        
        </Status>
        {boards.map((board) => (
        <BoardListStyle>           
            <div>글제목:{board.title}</div>
            <FlogimgStyle src="images/background.jpg"/>
            <div>글내용:{board.content}</div>
            <div>작성일:{board.reg_date}</div>
            <div>작성자:</div>
            <Link to={"/updateForm/"+board.bno} style={{ textDecoration: "none", color: "black" }}>수정</Link>

        </BoardListStyle>
        ))}
                    <ChatStyle>ss</ChatStyle> 
        </BoardStyle>
>>>>>>> ec437b7f940e06e2a212a88f94e8a77026416798
    );
};

export default BoardList;
