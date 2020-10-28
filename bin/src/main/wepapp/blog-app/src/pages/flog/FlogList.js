import React, { useEffect,useState } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
  
const FloglistStyle = styled.div`
display : grid;
grid-template-columns: auto auto auto auto auto auto;
grid-gap : 10px; 
justify-content: center;
`;

const FlogWriteStyle = styled.div`
display :grid;
justify-content : end;
margin-right: 10px;
`;
const FlogStyle = styled.div`
    display:grid;
    grid-template-columns: auto;
    background-color:#EAEAEA;
    grid-gap: 15px;
    position: relative;
    border-radius: 6px;
    padding: 20px 30px;
    box-shadow: 0 8px 8px 0 rgb(214, 214, 214);
  `;
const Flogimage = styled.img`
  width:100px;
  height:100px;
`;

const FlogList = (props) => {

  const [flogs, setFlogs] = useState([]);
  const [pages, setPages] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:8000/flogList")
    .then((res)=>res.json())
    .then((res)=>
    {setFlogs(res.content);
      setPages(res.pageable);
      console.log(res);
      console.log(res.content);
      console.log(res.pageable);
    }
    );
  },[]);


  return (
    <div>
    <FlogWriteStyle><button>블로그 생성</button></FlogWriteStyle>
    <FloglistStyle>
      {flogs.map((flog)=>(
        <FlogStyle>
        <Flogimage src="images/background.jpg"></Flogimage>
        <div>Flog :{flog.flog_name}</div><button>신청하기</button>      
        </FlogStyle>
      ))}
      
      </FloglistStyle>
      </div>
  );
};

export default FlogList;