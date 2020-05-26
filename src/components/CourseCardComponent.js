import React from 'react';
import {Link} from 'react-router-dom';

class CourseCardComponent extends React.Component {
    state = {
        course: {
            title: this.props.title,
            owner: this.props.owner,
            _id: this.props._id
        }
    }
    render () {
        return (
            <div className="card course-card text-center">
                <div class="card-body">
                    <h5 class="card-title">{this.state.course.title}</h5>
                    <p class="card-text">{'owner: ' + this.state.course.owner}</p>
                    <Link to={`/editor/${this.state.course._id}`} class="btn btn-dark">Edit</Link>
                </div>
            </div>
        );
    }
}

export default CourseCardComponent;