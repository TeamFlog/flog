
import userEvent from '@testing-library/user-event';
import React, { memo,useEffect,useState } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

const StatusStyle = styled.div`
    display: grid;
    position: relative;
    width:240px;
    text-align:center;
  `;
const SubStatusStyle = styled.div`
    position:fixed;
`;
const UserStyle = styled.div`
    display :grid;
    grid-template-columns: 1fr 2fr ;
    width: 250px;
    height: 75px;
    background-color: honeydew;
    position: relative;
    border-radius: 6px;
    padding: 20px 15px;
    margin:5px 0 0px 10px;
    box-shadow: 0 8px 8px 0 rgb(214, 214, 214);
    &:hover {
      background-color: white;

    }
    
`;
const UserImgStyle = styled.img`
width:80px;
height:80px;
border-radius:35px;

`;
const UserImgStyle2 = styled.label`
width:80px;
height:80px;
border-radius:40px;

cursor: pointer;
`;

const UserTextStyle = styled.div`
display : grid;
grid-template-rows : auto auto;
font-weight:800;
border: ridge 5px;
`;

const UserTextSetStyle = styled.div`
display : grid;
grid-template-rows : auto auto;
font-weight:500;

`;
const NicknameStyle = styled.div`
margin : 5px 5px 0 0;
`;
const NicknameStyle2 = styled.input`
margin : 5px 5px 0 0;
width: 50px;
`;
const UserCardStyle = styled.div`
display : grid;
grid-template-columns: 2fr 1fr 1fr;
`;

const StatusText = styled.div`
font-size:15px;
`;

const StatusText2 = styled.input`
width:150px;
font-size:12px;
`;

const Status = () => {
    
    JSON.parse(localStorage.getItem("user"));
    console.log(JSON.parse(localStorage.getItem("user")));
    
    const user = JSON.parse(localStorage.getItem("user"));
    const usermno = user.mno
    console.log(usermno);
    const [updateUser, setUpdateUser] = useState({
        mno: usermno,
        nickname: "",
        profile_image: "",
        emotion: "",
        home_io: "",
        state_message: ""
        });
     
        useEffect(()=>{
            
        fetch("http://localhost:8000/user/"+user.username, {
            method: "GET",
			headers:{
                "Authorization": localStorage.getItem("Authorization")
			}
		}).then(res=>res.json()).then(res=>{
            setUpdateUser(res); 
        });
        setMembers(user.flog.member);
        
    },[]);
        
    const [members, setMembers] = useState([]);

    
    
    //setMembers(user.flog.member); 
    console.log(user.flog.member);
    
    const changeValue = (e)=> {
		setUpdateUser({ ...updateUser, [e.target.name]: e.target.value });
		console.log(e.target.value);
	}	


    const CreateFlogBtnStart = (props) => {
        var userStatusOut = document.querySelector("#userStatusOut");

        if(userStatusOut.style.display=="none"){
        userStatusOut.style.display="grid";
        alert("프로필을 수정해보세요!");
        alert("프로필을 다시 클릭하시면 저장됩니다!");
         }else if(userStatusOut.style.display=="grid"){
        userStatusOut.style.display="none";

        let form = document.getElementById("form2");
        const formData = new FormData(form);
        
        fetch("http://localhost:8000/user/"+updateUser.mno, {
			method: "POST",
			body: formData
		}).then(res => res.text())
		.then(res => {
			if(res === "ok"){
                alert("프로필 수정성공!");
			} else {
				alert("수정 실패");
			}
		});
		
          }else{}
         }


    return (
        
        <StatusStyle>
            <SubStatusStyle>
            <form id="form2" >
            <input name="mno" value={updateUser.mno} hidden readOnly></input>
            <UserStyle id="userStatusOut" style={{display:"none"}}>
            <UserImgStyle2 htmlfor="file" ><UserImgStyle src="images/profileimages/notfoundimage.jpg"/></UserImgStyle2>
            <input style={{display:"none"}} name="profile_image" onChange={changeValue} id="file" type="file"/>
            <UserTextSetStyle>
            <UserCardStyle >     
            <NicknameStyle2 placeholder="닉네임" type="text" name="nickname" value={updateUser.nickname} onChange={changeValue}></NicknameStyle2>    
            <select className="emotion" name="emotion" value={updateUser.emotion} onChange={changeValue} >
                <option value="😐">😐</option>
                <option value="😍">😍</option>
                <option value="🤬">🤬</option>
                <option value="🤓">🤓</option>
                <option value="🤑">🤑</option>
                <option value="😭">😭</option>
                <option value="🤧">🤧</option>
                <option value="😇">😇</option>
                <option value="😈">😈</option>
                <option value="🤡">🤡</option>
                <option value="🤓">🤓</option>
            </select>
            <select className="UserStatus"  name="home_io" value={updateUser.home_io} onChange={changeValue}>
                <option value="🟢">🟢</option>
                <option value="⚪">⚪</option>
                </select>
            </UserCardStyle>
            <StatusText2 placeholder="상태메시지" type="text" name="state_message" value={updateUser.state_message} onChange={changeValue}></StatusText2>
            </UserTextSetStyle>
            </UserStyle>
            </form>
            
            <UserStyle onClick={CreateFlogBtnStart}>
            <UserImgStyle name="profile_image" src={"images/profileimages/"+updateUser.profile_image}/>
            
            <UserTextStyle>
            <UserCardStyle>     
    <NicknameStyle name="nickname">{updateUser.nickname}</NicknameStyle>    
            <div className="emotion" name="emotion">{updateUser.emotion}</div>
    <div className="UserStatus" name="home_io">{updateUser.home_io}</div>
            </UserCardStyle>
    <StatusText name="state_message">{updateUser.state_message}</StatusText>
            </UserTextStyle>
            </UserStyle>

        {members.map((member) => ( 
            member.username==updateUser.username ? "" : 
            <UserStyle>
                   <UserImgStyle name="profile_image" src={"images/profileimages/"+member.profile_image}/>
                   <UserTextStyle>
                   <UserCardStyle>     
                   <NicknameStyle name="nickname">{member.nickname}</NicknameStyle>    
                   <div className="emotion" name="emotion">{member.emotion}</div>
                   <div className="UserStatus" name="home_io">{member.home_io}</div>
                   </UserCardStyle>
                     <StatusText name="state_message">{member.state_message}</StatusText>
                   </UserTextStyle>
            </UserStyle>
            ))}
            </SubStatusStyle>
        </StatusStyle>
    );
};

export default Status;