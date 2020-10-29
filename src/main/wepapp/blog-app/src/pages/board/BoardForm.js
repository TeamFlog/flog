import React, {useState} from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';

const BoardForm = (props) => {

 const { quill, quillRef } = useQuill();
 
  console.log(quill);    // undefined > Quill Object
  console.log(quillRef); // { current: undefined } > { current: Quill Editor Reference }
	

	const [board, setBoard] = useState({
		title: "",
		content: ""
	});
	

	const submitBoard = (e) => {
		e.preventDefault();
		fetch("http://localhost:8000/write", {
			method: "post",
			headers: {
				'Content-Type':"application/json; charset=utf-8",
				"Authorization": localStorage.getItem("Authorization")
			}, body: JSON.stringify(board)
		}).then(res=>res.text())
		.then((res)=> {
			if(res === "ok") {
				alert("게시글이 등록되었습니다!");
				props.history.push("/boardList");
			} else {
				alert("게시글 등록실패");
			}

		});
	}

	const changeValue = (e) => {
		setBoard({...board, 
			[e.target.name]: e.target.value });
	}
 
	return (

		<div>
			<h1>글쓰기</h1>
			<input type="text" name="title" placeholder="title 입력" onChange={changeValue} />
		
			<div style={{ width: 500, height: 300 }}>
      			<input type="quill" name="content" onChange={changeValue} ref={quillRef} style={{ width: 500, height: 300 }}/>
	

			<button type="submit" onClick={submitBoard}>등록하기</button>
			</div>
		</div>
	);
};

export default BoardForm;