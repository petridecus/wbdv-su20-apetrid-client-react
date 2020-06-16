import React from 'react';
import LessonTabComponent from './LessonTabComponent';

import {findLessonsForModule, createLesson} from "../services/LessonService";

class LessonTabsComponent extends React.Component {
    state = {
        newLessonTitle: 'New Lesson',
        editingLesson: {}
    }

    componentDidMount() {
        this.props.findLessonsForModule(this.props.params.moduleId)
    }
    
    render() {
        return (
        <div>
            <div className="lesson-tabs">
                {
                    this.props.params.moduleId !== undefined &&
                    this.props.lessons.map(lesson =>
                        <LessonTabComponent lesson={lesson}
                                        key={lesson._id}
                                        courseId={this.props.params.courseId}
                                        moduleId={this.props.params.moduleId}
                                        deleteLesson={this.props.deleteLesson}/>)
                }
            </div>
            <div className="lesson-form d-flex flex-row w-100">
                <input className="form-control module-add-title mr-auto" onChange={(event) =>
                    this.setState({
                        newLessonTitle: event.target.value
                    })}
                        value={this.state.newLessonTitle}/>
                <button onClick={() => this.props.createLesson(
                            this.props.params.moduleId,
                            {
                                title: this.state.newLessonTitle
                            }
                        )}
                        className="btn editor-btn light-text">{'\u002b'}</button>
            </div>
        </div>
        )
    }
}

export default LessonTabsComponent;