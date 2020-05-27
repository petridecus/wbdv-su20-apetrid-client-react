import React from 'react';
import CourseRowComponent from './CourseRowComponent';

class CourseTableComponent extends React.Component {
    render() {
        return (
            <tbody className="all-classes">
                <tr className="bg-dark wbdv-table-title-row">
                    <th colSpan="4">Today</th>
                </tr>
                {
                    this.props.courses.map(course =>
                        <CourseRowComponent course={course}
                                            key={course._id}
                                            removeCourse={this.props.removeCourse}/>
                        )
                }

                <tr className="bg-dark wbdv-table-title-row">
                    <th colSpan="4">Yesterday</th>
                </tr>
                {
                    this.props.courses.map(course =>
                        <CourseRowComponent course={course}
                                            key={course._id}
                                            removeCourse={this.props.removeCourse}/>
                    )
                }

                <tr className="bg-dark wbdv-table-title-row">
                    <th colSpan="4">Previous</th>
                </tr>
                {
                    this.props.courses.map(course =>
                        <CourseRowComponent course={course}
                                            key={course._id}
                                            removeCourse={this.props.removeCourse}/>
                    )
                }
            </tbody>
        );
    }
}

export default CourseTableComponent;