import React from 'react';
import styled from 'styled-components';
import folderImg from '../Component/folder.png';

const FolderBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 150px;
  padding: 2vh;
  /* margin: auto; */

  :hover {
    img:nth-of-type(1) {
      width: 80px;
      height: 80px;
    }
    div:nth-of-type(1) {
      font-size: 0.9rem;
      color: black;
    }
  }
`
const FolderImg = styled.img`
  width: 75px;
  height: 75px;
`
const FolderTitle = styled.div`
  width: 75px;
  overflow: visible;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 700;
  color: grey;
`

const Album = ({ photos }) => {
  return (
    <FolderBox>
      <FolderImg src={folderImg} />
      <FolderTitle>
        {photos.title}
      </FolderTitle>
    </FolderBox>
  );
};

export default Album;