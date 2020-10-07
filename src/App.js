import React from 'react';
import youtube from './api/youtube';
import SearchBar from './Component/SearchBar'
import VideoList from './Component/VideoList';
import VideoDetail from './Component/VideoDetail';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
          params: {
            q: term
          }
         
        });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };
  // video here can be anyhing, it is a symbol later defined by video list and item
  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
    // console.log(video)
  };

    render() {
        return (
          <div className ='ui container'>
          <SearchBar onSubmit = {this.onTermSubmit}/>
          <div className="ui grid">
            <div className="ui row">
            <div className="eleven wide column">
            <VideoDetail selectedVideo={this.state.selectedVideo}/>
            </div>
            <div className="five wide column">
            <VideoList videos={this.state.videos}   onVideoSelect={this.onVideoSelect}/>
            </div>
            </div>
            </div>
            </div>
        )
    }
}


export default App