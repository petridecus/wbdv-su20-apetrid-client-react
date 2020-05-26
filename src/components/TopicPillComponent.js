import React from 'react';

class TopicPillComponent extends React.Component {
    render() {
        return (
            <a className="wbdv-topic-pill active-topic btn btn-dark" href="#" role="button">{this.props.topic.title}</a>
        );
    }
}

export default TopicPillComponent;