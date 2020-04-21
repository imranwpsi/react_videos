import React from 'react';
import SearchBar from './SearchBar';
import youtube, { API_DEFAULT_PARAMS } from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = { videos: [], onVideoSelect: null };

    componentDidMount(){
        this.onTermSubmit('React JS');
    }

    onTermSubmit = async (term) => {
        const res = await youtube.get('/search', {
            params: {
                ...API_DEFAULT_PARAMS,
                q: term
            }
        });

        this.setState({ 
            videos: res.data.items,
            onVideoSelect: res.data.items[0],
        });
    }

    onVideoSelect = (video) => {
        this.setState({onVideoSelect: video});
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail  video={this.state.onVideoSelect} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;