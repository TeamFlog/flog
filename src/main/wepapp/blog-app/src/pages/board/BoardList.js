import React, { useEffect,useState } from 'react';
import { Link } from "react-router-dom";   
import styled from "styled-components";
import Status from "../../components/Status";
import Chat from "../../components/Chat";
import 'react-calendar/dist/Calendar.css';
import FamilyMotto from '../../components/FamilyMotto';


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

const WriteStyle = styled.button`
display:grid;
grid-template-columns: auto;
background-color: black;
margin-left: 500px;
    color: white;
    height: 25px;
    font-size: 15px;
    font-weight: 400;
    border-radius: 6px;
    border: 0;
    cursor: pointer;
    font-family: 'Cafe24Simplehae';
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
        .then((res)=>{
            setBoards(res.content);
            }
        );

        /*
        fetch("http://localhost:8000/board/"+props.match.params.bno, {
			method: "GET",
			headers:{
				"Authorization": localStorage.getItem("Authorization")
			}
		}).then(res=>res.json()).then(res=>{
			setPost(res); 
		});
        */
    },[]);

    const deleteBoard =(bno) => {
        
        fetch("http://localhost:8000/board/"+ bno, {
            method: "DELETE",
            headers: {
               "Authorization": localStorage.getItem("Authorization")
            }
        }).then(res=>res.text())
        .then(res => {
            if (res === "ok") {
                alert("삭제성공!");
                props.history.push("/boardList");
            } else {
                alert("삭제실패");
            }
        });
    }

    return (

        <div>
        <BoardStyle>
        <Status/>
        <div>
            <FamilyMotto/>
            <WriteStyle>
                <Link to={"/boardForm/"} style={{ textDecoration: "none", color: "white",marginTop:"5px" }}>
                글쓰기
            </Link>
            </WriteStyle>
            {boards.map((board) => (    
            <BoardListStyle>
                <div>글제목: {board.title}</div>
                <FlogimgStyle src="images/background.jpg"/>
                <div>글내용: {board.content}</div>
                <div>작성일: {board.reg_date}</div>
                <div>작성자: 마스터</div>
                <Link to={"/updateForm/"+board.bno} style={{ textDecoration: "none", color: "black" }}>수정</Link>
                <button onClick={()=>deleteBoard(board.bno)}>삭제</button>
            </BoardListStyle>
            ))}
        </div>
        <Chat/>
        </BoardStyle>
        </div>
    );
}

export default BoardList;
