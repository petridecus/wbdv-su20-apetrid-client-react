import React from 'react';

import TopicPillComponent from './TopicPillComponent';

class TopicPillsComponent extends React.Component {
    state = {
        newTopicTitle: 'New Topic Title'
    }

    componentDidMount() {
        this.props.findTopicsForLesson(this.props.params.lessonId)
    }

    render() {
        return (
            <div>
                {
                    this.props.params.lessonId !== undefined &&
                    this.props.topics.map(topic =>
                        <TopicPillComponent topic={topic}
                                        key={topic._id}/>)
                }
                <input className="form-control module-add-title mr-auto" onChange={(event) =>
                    this.setState({
                        newTopicTitle: event.target.value
                    })}
                        value={this.state.newTopicTitle}/>
                <button onClick={() => this.props.createTopic(
                            this.props.params.lessonId,
                            {
                                title: this.state.newTopicTitle
                            }
                        )}
                        className="wbdv-new-page-btn btn editor-btn light-text ml-auto">{'\u002b'}</button>
            </div>
        );
    }
}

export default TopicPillsComponent