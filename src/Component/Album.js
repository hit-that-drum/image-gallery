import React from 'react';
import styled from 'styled-components';
import folderImg from '../Component/folder.png';

const FolderImg = styled.img`
  width: 100px;
  height: 100px;
`

const Album = ({ photos }) => {
  return (
    <>
      <div>
      <FolderImg src={folderImg} />
      </div>
      {photos.title}
    </>
  );
};

export default Album;