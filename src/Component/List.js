import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Album from './Album.js'

const ListOutBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  cursor: pointer;
  width: 85%;
  margin: 3vh auto;
`

const List = () => {
  const [photos, setPhotos] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/albums")
        console.log("data", response.data);
        // console.log("title", response.data[0].title);
        setPhotos(response.data);
      } catch (error) {
        console.log("error", error);
      }
      // setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <>
    <ListOutBox>
      {photos.map((photo) => 
        <Album key={photo.id} photos={photo} />
      )}
    </ListOutBox>
    </>
  );
};

export default List;