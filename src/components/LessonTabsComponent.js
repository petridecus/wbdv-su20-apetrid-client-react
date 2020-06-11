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
            {
                this.props.params.moduleId !== undefined &&
                this.props.lessons.map(lesson =>
                    <LessonTabComponent lesson={lesson}
                                    key={lesson._id}
                                    courseId={this.props.params.courseId}
                                    moduleId={this.props.params.moduleId}
                                    deleteLesson={this.props.deleteLesson}/>)
            }
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
                    className="wbdv-new-page-btn btn editor-btn light-text ml-auto">{'\u002b'}</button>
        </div>
        )
    }
}

export default LessonTabsComponent;