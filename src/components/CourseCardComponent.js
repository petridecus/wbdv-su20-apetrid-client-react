import React from 'react';
import {Link} from 'react-router-dom';

class CourseCardComponent extends React.Component {
    render () {
        return (
            <div className="card course-card text-center">
                <div className="card-body">
                    <h5 className="card-title">{this.props.course.title}</h5>
                    <p className="card-text">{'owner: ' + this.props.course.owner}</p>
                    <Link to={`/editor/${this.props.course._id}`} className="btn btn-dark">Edit</Link>
                </div>
            </div>
        );
    }
}

export default CourseCardComponent;