import React, { useState, useEffect } from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import styled from "styled-components";

const BoardFormStyle = styled.div`
display:grid;
grid-template-rows: auto auto auto auto;
justify-content:center;
font-weight:600;
`;

const BoardInputStyle = styled.input`
	height: 25px;
    width: 100%;
    color: rgb(100, 100, 100);
    font-size: 12px;
    border: 1px solid rgb(230, 230, 230);
`;
const WriteBtnStyle = styled.button`

	background-color: black;
	margin-left: 670px;
	margin-top:50px;
    color: white;
    height: 25px;
	width:100px;
    font-size: 15px;
    font-weight: 400;
    border-radius: 6px;
    border: 0;
    cursor: pointer;
    font-family: 'Cafe24Simplehae';
`;

const UpdateForm = (props) => {
	
	const { quill, quillRef } = useQuill();
 
	console.log(quill);    // undefined > Quill Object
	console.log(quillRef); // { current: undefined } > { current: Quill Editor Reference }
	  

	let boardNo = props.match.params.bno;

	const [board, setBoard] = useState({
		title: "",
		content: ""
	});

	
	const UpdateBoard = (e) => {
		e.preventDefault();

		fetch("http://localhost:8000/board/update/" + boardNo, {
			method: "PUT",
			headers: {
				"Content-Type":"application/json; charser=utf-8",
				//"Authorization":localStorage.getItem("Authorization")
			}, body: JSON.stringify(board)
		}).then(res => res.text())
		.then(res => {
			if(res === "ok"){
				alert("게시글 수정 성공!");
				props.history.push("/boardList");
			} else {
				alert("수정 실패");
			}
		});
		
	}
/*
	const changeValue = (e)=> {
		setBoard({ ...board, [e.target.name]: e.target.value });
	}	
*/
	useEffect(() => {
		fetch("http://localhost:8000/board/" + boardNo, {
			method: "GET",
			headers: {
				"Authorization":localStorage.getItem("Authorization")
			}
		}).then(res=>res.json())
		.then(res => {
			setBoard(res);
		});
	}, []);
	
	const changeValue = (e) => {
		setBoard({
			...board,
			[e.target.name]: e.target.value
		});
		console.log(board.content)
	}
		

	return (
		<BoardFormStyle>
			<h1>글 수정하기</h1>
			<div>
			제목 <BoardInputStyle type="text" name="title" value={board.title} onChange={changeValue} />
			</div>
			<div>내용
				<div name="content"value={board.content} onChange={changeValue} style={{ height: 300 }}>
      				<div ref={quillRef}/>
				</div>
			</div>
			<div>
			<WriteBtnStyle variant="primary" type="submit" onClick={UpdateBoard}>수정하기</WriteBtnStyle>
			</div>
		</BoardFormStyle>
		/*
			<form>
				<div>
					<input type="text" name="title" value={board.title} onChange={changeValue} />
					<textarea name="content" value={board.content} onChange={changeValue}></textarea>
					<button variant="primary" type="submit" onClick={UpdateBoard}>수정하기</button>
				</div>
			</form>
		*/
	);

};

export default UpdateForm;
