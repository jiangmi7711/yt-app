import React from 'react';
import App from '../App';
import VideoItem from './VideoItem';
//onVideoSelect is defined by videoList att in app.js, now from props passing to videoList!! see how this pass!
const VideoList =({videos, onVideoSelect})=> {
    const renderList = videos.map(video =>{
                return  (
                    <VideoItem video={video}  key={video.id.videoId} 

                    // this att is for passing the fn to VideoItem
                    onVideoSelect={onVideoSelect}/> 
                 
                )
            })  
                     
         
            return (
                <div className="ui relaxed divided list">
                    {renderList} 
                </div>
                
            )
        }
     
    
     
     
    export default VideoList;