import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import './Features.css'

const featureitems = [
    {
        icon: <VerifiedIcon className='feature-icon' color='primary' sx={{fontSize: 50}} />,
        title: "High Quality",
        description: "We ensure the highest quality in all our products."
    },
    {
        icon: <TrendingUpIcon className='feature-icon' color='primary' sx={{fontSize: 50}} />,
        title: "Fast Delivery",
        description: "We deliver your orders quickly and efficiently."
    },
    {
        icon: <SupportAgentIcon className='feature-icon' color='primary' sx={{fontSize: 50}} />,
        title: "Customer Support",
        description: "Our support team is available 24/7 to assist you."
    }
]
const Features = () => {
  return (
    <>
      <Box className='features-section'>
        <Typography className='feature-title' variant='h4' component='h2' gutterBottom>
            Our Features
        </Typography>
        <Grid container spacing={4} justifyContent='center'>
            {featureitems.map((feature) =>(
        <Grid item xs={12} sm={6} md={4}>
                <Box className='feature-item'>
              {feature.icon}  
            <Typography>{feature.title}</Typography>
            <Typography>{feature.description}</Typography>
        </Box>
        </Grid>
            ))}
          
        </Grid>
      </Box>
    </>
  )
}

export default Features
