import React , {useState} from 'react';
import styled from 'styled-components';
import CloseIcon from "@mui/icons-material/Close"


function BurgerNavComponent({OpenBurger , SetOpenBurger }) {
 const [list, setList]=useState([
     {
       title: "exiting inventory",
       href: ""
     },
     {
       title: "Used inventory",
       href: ""
     },
     {
       title: "trade in",
       href: ""
     },
     {
       title: "cyber truck",
       href: ""
     },
     {
       title: "Roadaster",
       href: ""
     },
     {
       title: "exiting inventory",
       href: ""
     },
     {
       title: "exiting inventory",
       href: ""
     },
     {
       title: "exiting inventory",
       href: ""
     },
     {
       title: "exiting inventory",
       href: ""
     },])
  return (
     <BurgerNaav show={OpenBurger}>
     <CurserClose>
     <CustomClose onClick={()=>SetOpenBurger(false)}/>
   </CurserClose>
   <ul>
     {
       list.map((item, index)=>(
         <li key={index}><a href={item.href}>{item.title}</a></li>
       ))
     }
   </ul>
   </BurgerNaav>
  )
}

export default BurgerNavComponent;


const BurgerNaav=styled.div`
background-color:white;
width: 300px;
position:fixed;
top: 0;
right: 0;
bottom: 0;
border-bottom: solid 1px #eeeeee;
z-index:10;

transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
trnsition: transform .2s; 
ul {
list-style-type: none;
li{
          padding:17px 0px;
          border-bottom: solid 1px #eeeeee;
          list-style-type: none;
        
     a{
            font-weight:600;
          }
        
        }
   }

display:flex;
padding:20px;
flex-direction:column;
justify-content:flex-start;

`

const CustomClose=styled(CloseIcon)`
 cursor:pointer;
`
const CurserClose=styled.div`
display:flex;
justify-content: flex-end;

`


