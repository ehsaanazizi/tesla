import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';



function Section({title , description , lefttext , righttext , backgroundImage}) {
  return (
    <Wrap bgimg={backgroundImage}>
     <Fade  direction="up">
       <ItemText>
           <h1>{title}</h1>
           <p>{description} </p>
       </ItemText>
     </Fade>
    <Buttons>
    <Fade  direction="up">
      <Buttongroup>
           <LeftButton>
           {lefttext}
           </LeftButton>
           <RightButton>
             {righttext}
           </RightButton>
      </Buttongroup>
      </Fade>
     <DownArrow src="/images/down-arrow.svg" />
    </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap=styled.div`
width: 100vw;
height: 100vh;
background-size:cover;
background-position: center;
background-image: ${({ bgimg }) => `url(${bgimg})`};
display:flex;
align-items: center;
justify-content:space-between;
flex-direction:column;
`
const ItemText=styled.div`
padding-top: 15vh;
text-align:center;
`

const Buttongroup=styled.div`
display:flex;
margin-bottom: 30px;
@media (max-width: 768px){
  flex-direction:column;
}
`
const LeftButton=styled.div`
background-color: #222222;
width: 256px;
height: 40px;
border-radius: 20px;
align-items: center;
display:flex;
justify-content: center;
color:white;
opacity:0.85;
text-transform: uppercase;
font-size:12px;
curser:pointer;
`


const RightButton=styled(LeftButton)`
background-color:white;
color:black;
opacity:0.85;
`

const DownArrow=styled.img`
margin:auto;
height:40px;
display: flex;
justify-content: center; /* برای وسط‌چین کردن افقی */
animation: animateDown infinite 1.5s;
`

const Buttons=styled.div``