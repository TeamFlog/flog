import React from 'react';
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


const BoardList = () => {
    return (
        <BoardStyle>
        <Status>
        
        </Status>
        <BoardListStyle>
            <div>글제목:</div>
                            <FlogimgStyle src="images/background.jpg"/>
            <div>글내용:</div>
            <div>작성일:</div>
            <div>작성자:</div>
        </BoardListStyle>
                    <ChatStyle>ss</ChatStyle> 
            </BoardStyle>
    );
};

export default BoardList;
