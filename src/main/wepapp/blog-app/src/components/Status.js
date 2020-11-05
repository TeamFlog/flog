import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

const StatusStyle = styled.div`
    display: grid;
    position: relative;
    width:240px;
  `;
const SubStatusStyle = styled.div`
    position:fixed;
`;
const UserStyle = styled.div`
    display :grid;
    grid-template-columns: 1fr 2fr ;
    width: 200px;
    height: 45px;
    background-color: honeydew;
    position: relative;
    border-radius: 6px;
    padding: 20px 15px;
    margin:5px 0 10px 10px;
    box-shadow: 0 8px 8px 0 rgb(214, 214, 214);
    &:hover {
      background-color: white;
    }
    
`;
const UserImgStyle = styled.img`
width:50px;
height:50px;
border-radius:30px;
`;
const UserImgStyle2 = styled.label`
width:50px;
height:50px;
border-radius:30px;
`;

const UserTextStyle = styled.div`
display : grid;
grid-template-rows : auto auto;
font-weight:800;

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
font-size:12px;
`;

const StatusText2 = styled.input`
width:150px;
`;

const CreateFlogBtnStart = () => {
    var userStatusOut = document.querySelector("#userStatusOut");
    if(userStatusOut.style.display=="none"){
        userStatusOut.style.display="grid";
        alert("프로필을 수정해보세요!");
        alert("프로필을 다시 클릭하시면 저장됩니다!");
    }else if(userStatusOut.style.display=="grid"){
        userStatusOut.style.display="none";
        alert("프로필이 저장되었습니다!");
    }else{}
  }
  


const Status = () => {
    return (
        <StatusStyle>
            <SubStatusStyle>
            <UserStyle id="userStatusOut" style={{display:"none"}}>
            <UserImgStyle2 for="file" ><UserImgStyle src="../images/logo.jpg"/></UserImgStyle2>
            <input style={{display:"none"}} id="file" type="file"/>
            <UserTextStyle>
            <UserCardStyle >     
            <NicknameStyle2 placeholder="닉네임"></NicknameStyle2>    
            <div className="emotion">😭</div>
            <div className="UserStatus">🟢</div>
            </UserCardStyle>
            <StatusText2 placeholder="상태메시지"></StatusText2>
            </UserTextStyle>
            </UserStyle>
            <UserStyle onClick={CreateFlogBtnStart}>
            <UserImgStyle src="../images/logo.jpg"/>
            <UserTextStyle>
            <UserCardStyle>     
            <NicknameStyle>제준서</NicknameStyle>    
            <div className="emotion">😭</div>
            <div className="UserStatus">🟢</div>
            </UserCardStyle>
            <StatusText>안녕하세요 준서에요asdfasdsadas</StatusText>
            </UserTextStyle>
            </UserStyle>
          
            </SubStatusStyle>
        </StatusStyle>
    );
};

export default Status;