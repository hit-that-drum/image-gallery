import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
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
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);

  const [pageNum, setPageNum] = useState(1);

  const fetchPhotos = async (pageNum) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/photos`);
    // console.log("response", response.data);
    const data = response.data;

    if (pageNum === 1) {
      setPhotos(data.slice(0, 100));
    } else if (pageNum !== 1) {
      setPhotos([...photos, ...data.slice((((pageNum - 1) * 100) + 1), ((pageNum * 100) + 1))]);
    }
    // setPhotos(photos => [...photos, ...data]);
  }

  useEffect(() => {
    fetchPhotos(pageNum);
    console.log("pageNum", pageNum);
    console.log("photos", photos);
  }, [pageNum]);

  
  const loadMore = () => {
    setPageNum(pageNum => pageNum + 1);
  }
  
  
  const pageEnd = useRef();
  useEffect(() => {
    if (loading) {
      const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      }, {threshold: 1});
      observer.observe(pageEnd.current);
    }
  }, [loading]);


  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await axios.get("https://jsonplaceholder.typicode.com/photos")
  //       // console.log("data", response.data);
  //       // const data = response.data;
  //       setPhotos(response.data.slice(0, 100));
  //       console.log("100", photos.slice(0,100));
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //     setLoading(false);
  //   }
  //   fetchData();
  // }, []);

  // if (loading) {
  //   return <Loading />
  // };

  if (!photos) {
    return null;
  }


  return (
    <div>
    <div>
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
    </div>
      <button onClick={loadMore} ref={pageEnd}>Load More</button>
    </div>
  );
};

export default PhotoList;