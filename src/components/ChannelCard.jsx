import React from 'react';
import { Typography, Box, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail, marginTop }) => {
  console.log(channelDetail);
  return (
    <Box sx={{
      boxShadow: 'none', borderRadius: '20px', display: 'flex', justifyContent: 'center',
      alignItems: 'center', width: { xs: '356px', md: '320px' }, height: '326px', margin: 'auto', marginTop,
    }}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center',
          color: '#fff'
        }}>
          <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2,mx:'auto', border: '1px solid #e3e3e3' }} />
          <Typography variant='h6'>
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 16, color: 'gray', ml: '5px' }} />
          </Typography>
          <Box display="flex" justifyContent="center">
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Suscribers
            </Typography>
          )}
          {channelDetail?.statistics?.videoCount && (
            <Typography>
              {parseInt(channelDetail?.statistics?.videoCount).toLocaleString()} Videos
            </Typography>
          )}
          {channelDetail?.statistics?.viewCount && (
            <Typography>
              {parseInt(channelDetail?.statistics?.viewCount).toLocaleString()} Views
            </Typography>
          )}
          </Box>
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard
