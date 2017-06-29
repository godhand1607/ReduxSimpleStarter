import React, { PropTypes } from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
    const title = video.snippet.title;
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img
                        className="media-object"
                        alt={title}
                        src={imageUrl}
                    />
                </div>
                <div className="media-body">
                    <div className="media-heading">{title}</div>
                </div>
            </div>
        </li>
    );
};

VideoListItem.defaultProps = {
    onVideoSelect: null,
};

VideoListItem.propTypes = {
    video: PropTypes.any.isRequired,
    onVideoSelect: PropTypes.func,
};

export default VideoListItem;
