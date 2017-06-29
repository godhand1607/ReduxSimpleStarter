import React, { PropTypes } from 'react';

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading...</div>;
    }

    const tag = video.tag;
    const title = video.snippet.title;
    const description = video.snippet.description;
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe
                    className="embed-responsive-item"
                    title={tag}
                    src={url}
                />
            </div>
            <div className="details">
                <div>{title}</div>
                <div>{description}</div>
            </div>
        </div>
    );
};

VideoDetail.defaultProps = {
    video: null,
};

VideoDetail.propTypes = {
    video: PropTypes.any,
};

export default VideoDetail;
