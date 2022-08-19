import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Album from './Album.js'
import Loading from './Loading.js';

const ListOutBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 85%;
  margin: 3vh auto;
`

const List = () => {
  const [folders, setFolders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/albums")
        // console.log("data", response.data);
        setFolders(response.data);
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

  if (!folders) {
    return null;
  }

  return (
    <>
      <ListOutBox>
        {folders.map((folder) => 
          <Link to="/photos" key={folder.id} style={{textDecoration: "none"}}>
            <Album key={folder.id} folders={folder} />
          </Link>
        )}
      </ListOutBox>
    </>
  );
};

export default List;