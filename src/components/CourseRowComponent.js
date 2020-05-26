import React from 'react';
import { Link } from 'react-router-dom';

import CourseService from '../services/CourseService'

class CourseRowComponent extends React.Component {
    state = {
        editing: false,
        course: {
            _id: this.props._id,
            title: this.props.title,
            owner: this.props.owner,
            modified: this.props.modified
        }
    }

    setEditing = (editing) =>
        this.setState({editing: editing})

    ok = () =>
        CourseService.updateCourse(
            this.state.course._id,
            this.state.course
        )
            .then(status => this.setEditing(false))

    updateCourseTitle = newTitle =>
        this.setState(prevState => ({
            course: {
                ...prevState.course,
                title: newTitle
            }
        }))

    render() {
        return (
            <li className="list-group-item">
            <div className="wbdv-course wbdv-row align-items-center d-flex flex-column">
                <div className="d-flex w-100 justify-content-between align-items-center">
                <Link className="btn wbdv-row wbdv-title mr-auto" to={`/editor/${this.state.course._id}`}>
                    {this.state.course.title}
                </Link>
                <div className="wbdv-row wbdv-owner mr-auto">{this.state.course.owner}</div>
                <div className="wbdv-row wbdv-modified-date mr-auto">{}</div>
                <button className="wbdv-row wbdv-button wbdv-delete ml-auto btn rounded-circle"
                        onClick={() => this.props.removeCourse(this.state.course._id)}>
                    &times;
                </button>
                </div>
            </div>
            </li>
        );
    }
}

export default CourseRowComponent;