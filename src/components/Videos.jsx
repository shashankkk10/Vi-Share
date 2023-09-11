import React from 'react';
import { Stack, Box } from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({videos, direction}) => {
//   console.log(videos);
const Scrollfn=()=>{
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}

    return (
    <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent="start" gap={2}>
      {videos.map((item, idx)=>(
        <Box key={idx} onClick={Scrollfn}>
            {item.id.videoId && <VideoCard video={item}/>}
            {item.id.channelId && <ChannelCard channelDetail={item}/>}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos
