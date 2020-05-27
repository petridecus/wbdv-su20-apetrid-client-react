import React from 'react';

import TopicPillComponent from '../components/TopicPillComponent';

class TopicPillsContainer extends React.Component {
    render() {
        return (
            <div className="wbdv-topic-pill-list d-flex flex-row align-items-center">
                {
                    this.props.topics.map(topic =>
                        <TopicPillComponent topic={topic}
                                            key={topic.title}/>
                    )
                }
                <button className="wbdv-topic-add-btn btn rounded-circle dark-text ml-auto" >{'\u002b'}</button>
            </div>
        );
    }
}

export default TopicPillsContainer