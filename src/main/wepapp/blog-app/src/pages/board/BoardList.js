import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";   

import styled from "styled-components";
import Status from "../../components/Status";



const ChatStyle = styled.div``;

const BoardStyle = styled.div`
display: grid;
grid-template-columns: auto auto auto;
justify-content: space-between;
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
  `;
const FlogimgStyle = styled.img`
width: 500px;
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
        <BoardStyle>
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
    );
};

export default BoardList;
