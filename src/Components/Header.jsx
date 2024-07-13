import React  from  'react';
import { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import BurgerNavComponent from './Header/BurgerNav';


function Header() {
  const [OpenBurger , SetOpenBurger] = useState(false);
  return (
    <Container>
      <a>
        <img src='/images/logo.svg'/>
      </a>
      <Menu>
        <p><a href="#">Model S</a></p>
        <p><a href="#">Model 3</a></p>
        <p><a href="#">Model X</a></p>
        <p><a href="#">Model Y</a></p>
        
      </Menu>
      <RightMenu>
        <a href="#">shop</a>
        <a href="#">Tesla account</a>
        <CustomMenu  onClick={()=>SetOpenBurger(true)}/>

      </RightMenu>
      <BurgerNavComponent  OpenBurger={OpenBurger} SetOpenBurger={SetOpenBurger} />
    </Container>
  )
}

export default Header;

const Container=styled.div`
min-height:60px;
position:fixed;
display: flex;
align-items:center;
justify-content: space-between;
padding: 0 20px;
top: 0;
right: 0;
left: 0;
z-index:1;

`

const Menu=styled.div`
display:flex;
align-items: center;
justify-content: center;
flex: 1;


 a{
   font-weight : 600;
   text-transform:uppercase;
   padding: 0 10px;
   flex-wrap:nowrap;
   
 }

 @media(max-width: 768px){
  display: none;
 }
`

const RightMenu=styled.div`
display:flex;
align-items:center;
a{
  font-weight : 600;
  text-transform:uppercase;
 margin-right:10px;
  flex-wrap:nowrap;
  
}

`

const CustomMenu=styled(MenuIcon)`
cursor:pointer;
`



