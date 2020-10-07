import React from 'react';
import './VideoItem.css';
import App from '../App';

//video is from props, defined by video att from videoList
const VideoItem = ({video, onVideoSelect})=>{
    return  (
        //the following piece can be iVideotem from videolist
        <div onClick= {()=>onVideoSelect(video)} 
        className = "video-item item">
            <img  className="ui image" src={video.snippet.thumbnails.medium.url}  alt={video.snippet.title}></img>
           <div className = "content">
                 <div className="header">{video.snippet.title} </div> 
          </div>
        </div>
    )
}

  
export default VideoItem;