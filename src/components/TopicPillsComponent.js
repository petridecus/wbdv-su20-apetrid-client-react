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
                <div className="pills-frame">
                    {
                        this.props.params.lessonId !== undefined &&
                        this.props.topics.map(topic =>
                            <TopicPillComponent topic={topic}
                                            key={topic._id}
                                            courseId={this.props.params.courseId}
                                            moduleId={this.props.params.moduleId}
                                            lessonId={this.props.params.lessonId}
                                            deleteTopic={this.props.deleteTopic}/>)
                    }
                </div>
                <input className="form-control topic-add-title mr-auto" onChange={(event) =>
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
                        className="wbdv-new-page-btn btn">{'\u002b'}</button>
            </div>
        );
    }
}

export default TopicPillsComponent