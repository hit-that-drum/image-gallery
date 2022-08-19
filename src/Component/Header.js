import React from 'react';
import styled from 'styled-components';

const HeaderBox = styled.div`
  background: rgb(247,202,202);
  background: linear-gradient(90deg, rgba(247,202,202,1) 0%, rgba(147,169,209,1) 100%);

  width: 100%;
  height: 14vh;
  text-align: center;
`
const HeaderText = styled.div`
  padding: 1.5vh;
  font-size: 4rem;
  color: white;
  font-family: 'Silkscreen', cursive;
  text-shadow: 0px 4px 3px rgba(0,0,0,0.4),
              0px 8px 13px rgba(0,0,0,0.1),
              0px 18px 23px rgba(0,0,0,0.1);
`

const Header = () => {
  return (
    <HeaderBox>
      <HeaderText>
        PHOTO GALLERY
      </HeaderText>
    </HeaderBox>
  );
};

export default Header;