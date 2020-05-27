import React from 'react';
import { Link } from 'react-router-dom';

import CourseService from '../services/CourseService'

class CourseRowComponent extends React.Component {
    state = {
        editing: false,
        course: this.props.course
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
            <tr className="wbdv-course wbdv-table-row">
                <th scope="row">
                    {
                        !this.state.editing &&
                        <Link className="btn wbdv-title" to={`/editor/${this.state.course._id}`}>
                            {this.state.course.title}
                        </Link>
                    }
                    {
                        this.state.editing &&
                        <input
                        className="form-control"
                        onChange={(event) => this.updateCourseTitle(event.target.value)}
                        value={this.state.course.title}/>
                    }
                </th>
                <td className="wbdv-owner">{this.state.course.owner}</td>
                <td className="wbdv-modified-date">{this.state.course.modified}</td>
                {
                    this.state.editing === false &&
                    <td className='btn'
                        onClick={()=> this.setEditing(true)}>
                            {'\u270E'}
                    </td>
                }
                {
                    this.state.editing === true &&
                    <span>
                        <td className="btn"
                                onClick={() => this.ok()}>
                            {'\u2713'}
                        </td>
                        <td className="btn"
                                onClick={() => this.props.removeCourse(this.state.course)}>
                            &times;
                        </td>
                    </span>
                }
            </tr>
        );
    }
}

export default CourseRowComponent;