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
margin-right:60px;
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
    justify-content:  right;
    background-color: black;
    color: white;
    height: 25px;
    
    padding:5px 15px;
    font-weight: 400;
    border-radius: 6px;
    border: 0;
    cursor: pointer;
    font-family: 'Cafe24Simplehae';
`;
const FlogimgStyle = styled.img`
max-width:800px; //보드이미지최대너비
`;

const JoinButtonStyle = styled.button`
    background-color: black;
    color: white;
    height: 25px;
    font-size: 15px;
    font-weight: 700;
    border-radius: 6px;
    border: 0;
    cursor: pointer;
    font-family: 'Cafe24Simplehae';
  `;
const BtnStyle = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: right;
`;

const BoardList = (props) => {

    let boardNo = props.match.params.bno;

    const [boards, setBoards] = useState([]);
        // 페이징은 아직 안했음.
    const [post, setPost] = useState({
        bno:"",
        title:"",
        content:"",
        reg_date:"",
        member: {
            mno:0
        }
    });

    const [reply, setReply] = useState({
        content:"",
    });
    
    /*
    // 로그인해야 게시물 등록/수정/삭제 가능.
    const isLogin = useSelector((store)=> store.isLogin);
    
    */
    useEffect(()=>{
        /*
		if(!isLogin){
			alert('로그인 후 이용할 수 있습니다.');
			props.history.push("/");  
		}
        */

        fetch("http://localhost:8000/board/" + boardNo, {
			method: "GET",
			headers:{
				"Authorization": localStorage.getItem("Authorization")
			}
		}).then(res=>res.json()).then(res=>{
			setPost(res); 
        });
        
        fetch("http://localhost:8000/boardList")
        .then((res)=>res.json())
        .then((res)=>{
            setBoards(res.content);
            }
        );
    

    },[]);

    const deleteBoard =(boardNo) => {
        fetch("http://localhost:8000/board/"+ boardNo, {
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
        }).catch((error) => {
                console.log(error);
            });
    }

    const replySave = (boardNo) => {
        fetch("http://localhost:8000/board/"+boardNo+"/reply", {
            method: "post",
            headers: {
                'Content-Type':"application/json; charset=utf-8",
				"Authorization": localStorage.getItem("Authorization")
            },
            body: JSON.stringify(reply)
        })
        .then(res => res.text())
        .then(res => {
            if(res === "ok") {
                alert("댓글등록 성공!");
                props.history.push("/boardList");
            } else {
                alert("댓글등록 실패");
            }
        });
    }


    const changeValue = (e)=> {
        setReply({...reply, 
	 		[e.target.name]: e.target.value });
    }

    return (

        <div>
        <BoardStyle>
        <Status/>
        <div>
            <FamilyMotto/>
            <BtnStyle>
                <Link to={"/boardForm/"} style={{ textDecoration: "none", color: "white"}}>
            <WriteStyle>
                글쓰기
            </WriteStyle>
            </Link>
            </BtnStyle>
            {boards.map((board) => (    
            <BoardListStyle>
                <div>글제목: {board.title} </div>
                <FlogimgStyle src="images/background.jpg"/>
                <div dangerouslySetInnerHTML={ {__html: board.content} }></div>
                <div>작성일: {board.reg_date}</div>
                <div>작성자: 마스터</div>
                <textarea name="content" placeholder="댓글입력" onChange={changeValue}></textarea>
                <button onClick={()=>replySave(board.bno)}>등록</button>

                <BtnStyle>
                <Link to={"/updateForm/"+board.bno} style={{ textAlign:"center",textDecoration: "none", backgroundColor:"black",borderRadius:"6px"}}>
                <JoinButtonStyle>수정</JoinButtonStyle></Link>
                <JoinButtonStyle onClick={()=>deleteBoard(board.bno)}>삭제</JoinButtonStyle>
                </BtnStyle>

            </BoardListStyle>
            ))}

        </div>
        <Chat/>
        </BoardStyle>
        </div>
    );
}

export default BoardList;
