import React, { useState } from 'react';
import YouTube from '../api/YouTube';

const SearchBar = ({searchData}) => {
    let [searchTerm, setSearchTerm] = useState('');

    function getYouTubeVideos() {
        YouTube.get('/search', {
            params: {
                q: searchTerm,
                part: 'snippet',
                maxResults: 5,
                type: 'video',
                videoEmbeddable: true,
            }
        })
        .then(response => {
            searchData(response.data.items);
            console.log(response.data.items);
        })
        .catch(error => {
            console.log(error);
        });
    }

    return (
        <div className='searchBox'>
            <input type="text" onChange = {e => setSearchTerm(e.target.value)}/>
            <button onClick={getYouTubeVideos}>Search</button>
        </div>
    );
}

export default SearchBar;