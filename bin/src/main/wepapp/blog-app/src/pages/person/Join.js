import React, { useEffect,useState } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

const FormStyle = styled.div`
    display: grid;
    grid-template-columns: auto auto;
     justify-content: end;
  
  `;

  const JoinStyle = styled.div`
    display:gird;
    grid-template-columns: auto;
    justify-content: end;
    width: 200px;
    display: inline-block;
    background-color: white;
    position: relative;
    border-radius: 6px;
    padding: 20px 30px;
    box-shadow: 0 8px 8px 0 rgb(214, 214, 214);
  `;
const JoinMainTitleStyle = styled.td`
    padding: 10px 0;
    font-size: 22px;
    font-weight: 600;
  `;

  const JoinSubTitleStyle = styled.td`
    padding: 10px 0;
    font-size: 15px;
    font-weight: 600;
  `;
const JoinInputStyle = styled.input`
    height: 25px;
    width: 100%;
    color: rgb(100, 100, 100);
    font-size: 12px;
    border: 1px solid rgb(230, 230, 230);
  `;
  const JoinButtonStyle = styled.button`
    background-color: black;
    color: white;
    width: 200px;
    height: 25px;
    font-size: 15px;
    font-weight: 700;
    border-radius: 6px;
    border: 0;
    cursor: pointer;
    margin-top: 20px;
    font-family: 'Cafe24Simplehae';
  `;
  


const Join = () => {


  const [member, setMember] = useState({
    membername: "",
    password: "",
    email: "",
  });
  function inputHandle(e) {
    console.log(e.target.value);
    setMember({ ...member, [e.target.name]: e.target.value });
    console.log(member);
  }

  function createMember(e){
    e.preventDefault(); //submit 되지마라
    fetch("http://localhost:8000/joinProc",{
      method:"post",
      body: JSON.stringify(member),
      headers:{
        'Content-Type':"application/json; charset=utf-8"
      }
    }).then(res=>res.text())
    .then((res)=>{
      if(res === "ok"){

      
        alert("회원가입이 완료되었습니다.");
      }
    },[]);
  }
    
  return (
    
    <FormStyle>
      
      <JoinStyle>
<JoinMainTitleStyle>여기는 가족블로그</JoinMainTitleStyle><br></br>
      <JoinSubTitleStyle >아이디</JoinSubTitleStyle>
         <JoinInputStyle type="text" name="membername" onChange={inputHandle}/>
         <JoinSubTitleStyle >닉네임</JoinSubTitleStyle>
         <JoinInputStyle type="text" name="nickname"/>
  <JoinSubTitleStyle >비밀번호</JoinSubTitleStyle>             
       <JoinInputStyle type="password" name="password" onChange={inputHandle}/>
        <JoinSubTitleStyle >비밀번호 확인</JoinSubTitleStyle>             
       <JoinInputStyle type="password" name="password2" />
        <JoinSubTitleStyle >이메일</JoinSubTitleStyle>
        <JoinInputStyle type="email" name="email" onChange={inputHandle} />
        <JoinSubTitleStyle >가족코드</JoinSubTitleStyle>
        <JoinInputStyle type="code" name="code"  placeholder="미입력시 코드생성화면으로 이동"/>
        <JoinButtonStyle onClick={createMember}>회원가입하겠습니다.</JoinButtonStyle>
          
          </JoinStyle>
    </FormStyle>
  );
};

export default Join;