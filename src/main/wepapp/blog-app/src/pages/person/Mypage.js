import React, { useState } from 'react';

const Mypage = () => {

	const [profile, setProfile] = useState({
		state_message:"",
		emotion:"",
		home_io:"",
		profile_img:""
	})

	const saveBtn = (e) => {
		e.preventDefault();
		fetch("http://localhost:8000/create_profile", {
			method:"post",
			headers: {
				"Content-Type":"application/json; charset=utf-8"
			}, body: JSON.s
		})
	}

	return (
		<div>
			<input type="text" name="state_message" placeholder="상테메시지 입력" /><br />
			<input type="text" name="emotion" /><br />
			귀가 <input type="radio" name="home_io" value="true"/>
			외출 <input type="radio" name="home_io" value="false"/><br />
			<input type="file" name="profile_img"/>
			<button type="submit" onClick={saveBtn}>저장</button>
		</div>
	);
};

export default Mypage;