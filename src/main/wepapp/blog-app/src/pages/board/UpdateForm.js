import React, { useState, useEffect } from 'react';

const UpdateForm = (props) => {

	let boardNo = props.match.params.bno;

	const [board, setBoard] = useState({
		title: "",
		content: ""
	});


	const UpdateBoard = (e) => {
		e.preventDefault();
		fetch("http://localhost:8000/board/" + boardNo, {
			method: "PUT",
			headers: {
				"Content-Type":"application/json; charset=utf-8",

			}, body: JSON.stringify(board)
		}).then(res=> {
			return res.text();
		}).then((res)=> {
			if(res === "ok") {
				alert("게시글 수정이 완료되었습니다!");
				props.history.push("/boardList");
			} else {
				alert("게시글 수정실패");
			}
		});
	}
	
	useEffect( () => {
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
	}

	return (

		<div>
			<h1>글 수정하기</h1>
			<div>
				<input type="text" name="title" value={board.title} onChange={changeValue} />
				<textarea name="content" value={board.content} onChange={changeValue}></textarea>
				<button variant="primary" type="submit" onClick={UpdateBoard}>수정하기</button>
			</div>
		</div>
	);
};

export default UpdateForm;
