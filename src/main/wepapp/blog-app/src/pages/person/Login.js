import React, { useEffect, useState } from 'react';
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
    width: 70px;
    height: 25px;
    font-size: 15px;
    font-weight: 700;
    border-radius: 6px;
    border: 0;
    cursor: pointer;
    margin-top: 20px;
    font-family: 'Cafe24Simplehae'
  `;

const Login = (props) => {
  
  const [member, setMember] = useState({
    membername: "",
    password: "",
  });
  function inputHandle(e) {
    console.log(e.target.value);
    setMember({ ...member, [e.target.name]: e.target.value });
    console.log(member);
  }



  function loginBtn () {    
      fetch("http://localhost:8000/loginProc", {
        method: "post",
        body: JSON.stringify(member),
        headers: {
          'Content-Type': "application/json; charset=utf-8"
        }
      }).then(res => {
        console.log(1, res);
        for (let header of res.headers.entries()) {
          if (header[0] === "authorization") {
            localStorage.setItem("authorization", header[1]);
          }

        }
        return res.text();
      }).then(res => {
        if(res==="ok"){ // ==두개는 값비교 === 세개는 값과 타입비교

          props.history.push("/floglist"); //라우터에서 역사를 찾아서 푸쉬를 하면 URL 이동가능
            //push는 이전페이지를 기억하고  replace는 초기값으로 되돌림.
        }

      });
}
      //localStorage.setItem("jwt","asdfabsdf");
      //let jwtToken = localStorage.getItem("jwt");
      //console.log(jwtToken);
    
  
  return (
    <FormStyle>
      <JoinStyle>
        <JoinSubTitleStyle >아이디</JoinSubTitleStyle>
        <JoinInputStyle type="text" name="membername" value={member.membername} onChange={inputHandle} />
        <JoinSubTitleStyle >비밀번호</JoinSubTitleStyle>
        <JoinInputStyle type="password" name="password" value={member.password} onChange={inputHandle} />
        <JoinButtonStyle onClick={loginBtn}>로그인</JoinButtonStyle>
      </JoinStyle>
    </FormStyle>
  );
};

export default Login;