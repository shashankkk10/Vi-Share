import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Box, Typography, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import ReactPlayer from 'react-player';

const VideoDetail = () => {
  const [ videoDetail, setVideoDetails ] = useState(null);
  const [ videos, setVideos ] = useState(null); 
  const { id } =useParams();
  useEffect(()=>{
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=>{
      return setVideoDetails(data?.items[0])
    });
    fetchFromAPI(`search?part=snippet&relatedToVideo=${id}&type=video`)
    .then((data)=>{
      console.log('data: ',data);
      return setVideos(data?.items)
    })
  },[id]);
  // console.log(videoDetail);
  // if(!videos?.items) return 'Loading...';
  

  return (
    <Box minHeight='95vh'>
        <Stack direction={{xs:'column', md:'row'}}>
          <Box flex={1}>
            <Box sx={{width:'100%', position:'sticky', top:'86px'}}>
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
                          className="react-player" controls playing/>
              <Typography color="#fff" variant='h5' fontWeight='bold' p={2}>
                {videoDetail?.snippet?.title}
              </Typography>
              <Stack direction='row' justifyContent='space-between' sx={{color:'#fff'}} py={1} px={2}>
                <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
                  <Typography variant={{sm:'subtitle1', md:'h6'}} color='#fff'>
                    {videoDetail?.snippet?.channelTitle}
                    <CheckCircle sx={{fontSize:'12px',color:'gray',ml:'5px'}}/>
                  </Typography>
                </Link>
                <Stack direction="row" gap="20px">
                  <Typography variant='body1' sx={{opacity:0.7}}>
                    {parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} views
                  </Typography>
                  <Typography variant='body1' sx={{opacity:0.7}}>
                    {parseInt(videoDetail?.statistics?.likeCount).toLocaleString()} likes
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
          <Box px={2} py={{md:1,xs:5}} justifyContent='center' alignItems='center'>
            {videos ? <Videos videos={videos} direction="column"/>:null}
          </Box>
        </Stack>
    </Box>
  )
}

export default VideoDetail;
