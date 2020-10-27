import React from 'react';
import Calendar from 'react-calendar';
import { Link } from "react-router-dom";
import styled from "styled-components";

const ChatStyle = styled.div`
    display:grid;
    position: relative;
    width:250px;
  `;

const SubChatStyle = styled.div`
 position: fixed;
 background-color:#EAEAEA;
 border-radius: 6px;
 padding: 15px 15px;
 box-shadow: 0 8px 8px 0 rgb(214, 214, 214);
 margin-right:150px;
 margin-top:70px;
 grid-template-rows : 4fr 1fr;
`;

const UserImgStyle = styled.img`
width:50px;
height:50px;
border-radius:30px;
display: block;
margin : auto;
`;
const UserStyle = styled.div`
    display :grid;
    grid-template-columns: 1fr 2fr ;
    width:250px;
    background-color: honeydew;
    position: relative;
    border-radius: 6px;
    margin-bottom: 10px;
    padding: 5px 0 5px 0;
`;
const UserTextStyle = styled.div`
display : grid;
grid-template-rows : auto auto;
font-weight:800;
font-size:12px;
`;
const NicknameStyle = styled.div`
margin : 5px 5px 0 0;
width:60px;
`;

const UserCardStyle = styled.div`
display : grid;
grid-template-columns: 1fr 2fr;
`;

const StatusText = styled.div`
font-size:12px;
background-color: white;
margin: 5px 5px 5px 0;
border: 1px solid black;
width : 150px;
line-height: 150%;
word-break: break-all;
`;
const ChatButtonStyle = styled.button`
    background-color: black;
    color: white;
    height: 25px;
    font-size: 15px;
    font-weight: 400;
    border-radius: 6px;
    border: 0;
    cursor: pointer;
    margin-top: 5px;
    font-family: 'Cafe24Simplehae';
    width:250px;
  `;
const DateStyle = styled.div`
margin : 5px 5px 0 0;
`;
const ChatTextStyle = styled.textarea`
width:250px;
`;
const UserChatStyle = styled.div`
display: inline-block;
position: relative;
`;

const CalendarBoxStyle = styled.div`
 position: fixed;
 background-color:#EAEAEA;
 border-radius: 6px;
 padding: 5px 10px;
 box-shadow: 0 8px 8px 0 rgb(214, 214, 214);
 margin: 0 110px;
 font-weight: 800;
 cursor:pointer;
 
`;

const ScheduleText = styled.div`
font-size:13px;
background-color: honeydew;
margin: 5px 5px 5px 0;
border-radius: 6px;
width : 150px;
line-height: 150%;
word-break: break-all; 
`;

const Chat = () => {

    const CalendarBox = () =>{
        
        var cb = document.querySelector("#cbcb");
        console.log(cb);
        if(cb.style.display="none"){
            cb.style.display="block";
            cb.style.position="fixed";
        }else if(cb.style.display="block"){
            cb.style.display="none";
            
        }else{
            
        }
        
    } 

  return (
      <div>
      <ChatStyle>
          <div id="cbcb" style={{display:"none"}}>
          <Calendar />
          </div>
              <CalendarBoxStyle onClick={CalendarBox}><div>이 달의 일정</div><ScheduleText>
              <div>10/30 누구누구의 생일ㅇㅇ</div>
              </ScheduleText></CalendarBoxStyle>
          <SubChatStyle>
<UserChatStyle>
<UserStyle>
<UserImgStyle src="../images/logo.jpg"/>
    <UserTextStyle>
            <UserCardStyle>     
            <NicknameStyle>제준서</NicknameStyle>    
            <DateStyle>2020-10-27 10:17</DateStyle>
            </UserCardStyle>
            <StatusText>여기는 방명록 작성란입니다.아 오오오영ㅈㄷㄱ머져댝;ㅣㄴ멱ㄴㅇ먀;ㄱㅁ폄ㅍㄱsadsadsadsadsadasdsadasd</StatusText>
    </UserTextStyle>
</UserStyle>
<UserStyle>
<UserImgStyle src="../images/logo.jpg"/>
    <UserTextStyle>
            <UserCardStyle>     
            <NicknameStyle>제준서</NicknameStyle>    
            <DateStyle>2020-10-27 10:17</DateStyle>
            </UserCardStyle>
            <StatusText>여기는 방명록 작성란입니다.</StatusText>
    </UserTextStyle>
</UserStyle>
</UserChatStyle>
<ChatTextStyle placeholder="방명록을 작성해보세요." rows="3"></ChatTextStyle>
<ChatButtonStyle>방명록 남기기</ChatButtonStyle>
</SubChatStyle>
</ChatStyle>
</div>
  );
};

export default Chat;
