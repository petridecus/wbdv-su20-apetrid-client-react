import React from 'react';
import { Link } from 'react-router-dom';

class CourseRowComponent extends React.Component {
    removeCourse = (id) => {
        // will probably be needed to update the course list of the parent component
    }

    render() {
        return (
            <div className="wbdv-course wbdv-row align-items-center d-flex flex-row">
                <div className="col-11">
                    <div className="row align-items-center">
                        <button className="btn wbdv-row wbdv-title mr-auto">
                            <Link to={`/editor/${this.props._id}`}>
                                {this.props.title}
                            </Link>
                        </button>
                        <div className="wbdv-row wbdv-owner mr-auto">{this.props.owner}</div>
                        <div className="wbdv-row wbdv-modified-date mr-auto">{this.props.modified}</div>
                    </div>
                </div>
                <button className="col-1 wbdv-row wbdv-button wbdv-delete mr-auto btn rounded-circle"
                        onClick={() => this.removeCourse(this.props._id)}>
                    &times;</button>
            </div>
        );
    }
}

export default CourseRowComponent;