import React from 'react'
import getByCategoryStackScreen from '../routes/CategoryStackScreen'
import getByTimeStackScreen from '../routes/TimeStackScreen'
import VideoLibraryStackScreen from '../routes/VideoPlayerStackScreen'
const tags=[
    {
      name: 'By Category',
      component: getByCategoryStackScreen
    },
    {
      name: 'By Time',
      component: getByTimeStackScreen
    },
    {
      name: 'Library',
      component: VideoLibraryStackScreen
    },
  
  ];
  

export default tags;