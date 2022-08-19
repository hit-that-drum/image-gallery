import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Loading from './Loading';

const PhotoListOutBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 85%;
  margin: 3vh auto;
`
const PhotoListInnerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
  height: 150px;
  padding: 2vh;
  cursor: pointer;

  :hover {
    img:nth-of-type(1) {
      width: 85px;
      height: 85px;
    }
    div:nth-of-type(1) {
      color: black;
    }
  }
`
const PhotoTitle = styled.div`
  width: 75px;
  overflow: visible;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 700;
  color: grey;
  margin-top: 1vh;
`

const PhotoList = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/photos")
        // console.log("data", response.data);
        setPhotos(response.data);
      } catch (error) {
        console.log("error", error);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <Loading />
  };

  if (!photos) {
    return null;
  }

  return (
    <PhotoListOutBox>
      {photos.map((photo) => 
        <PhotoListInnerBox key={photo.id}>
          <img alt="thumbnail" src={photo.thumbnailUrl}
            style={{width: "75px", height: "75px"}}
          />
          <PhotoTitle>{photo.title}</PhotoTitle>
        </PhotoListInnerBox>
      )}
    </PhotoListOutBox>
  );
};

export default PhotoList;