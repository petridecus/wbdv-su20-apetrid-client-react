import React from 'react';

class CourseRowComponent extends React.Component {
    removeCourse = (id) => {
        // will probably be needed to update the course list of the parent component
    }

    render() {
        return (
            <div class="wbdv-course wbdv-row align-items-center d-flex flex-row">
                <div class="col-11">
                    <div class="row align-items-center">
                        <button class="btn wbdv-row wbdv-title mr-auto">{this.props.title}</button>
                        <div class="wbdv-row wbdv-owner mr-auto">{this.props.owner}</div>
                        <div class="wbdv-row wbdv-modified-date mr-auto">{this.props.modified}</div>
                    </div>
                </div>
                <button class="col-1 wbdv-row wbdv-button wbdv-delete mr-auto btn rounded-circle"
                        onClick={() => this.removeCourse(this.props._id)}>
                    &times;</button>
            </div>
        );
    }
}

export default CourseRowComponent;