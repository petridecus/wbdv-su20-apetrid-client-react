import React from 'react';

import TopicPillComponent from '../components/TopicPillComponent';

class TopicPillsContainer extends React.Component {
    render() {
        return (
            <div className="wbdv-topic-pill-list d-flex flex-row align-items-center">
                {
                    this.props.topics.map(topic =>
                        <TopicPillComponent topic={topic}/>
                    )
                }
                <a className="wbdv-topic-add-btn btn rounded-circle dark-text ml-auto" href="#" role="button">{'\u002b'}</a>
            </div>
        );
    }
}

export default TopicPillsContainer