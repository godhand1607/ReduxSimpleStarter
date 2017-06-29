import React, { PropTypes } from 'react';

import VideoListItem from './VideoListItem';

const VideoList = ({ videos, onVideoSelect }) => {
    const videoItems = videos.map(video => (
        <VideoListItem
            key={video.etag}
            video={video}
            onVideoSelect={onVideoSelect}
        />
    ));

    return (
        <ul className="list-group col-md-4">
            {videoItems}
        </ul>
    );
};

VideoList.defaultProps = {
    onVideoSelect: null,
};

VideoList.propTypes = {
    videos: PropTypes.array.isRequired,
    onVideoSelect: PropTypes.func,
};

export default VideoList;
