import React from 'react';
import CourseRowComponent from './CourseRowComponent';

class CourseTableComponent extends React.Component {
    render() {
        return (
            <div>
                <div className="container-fluid all-classes">
                    <div className="d-flex flex-column class-list">
                        <h6>Today</h6>
                        <ul className="list-group justify-content-center">
                        {
                            this.props.courses.map(course => {
                                let today = new Date();
                                let month = today.getMonth();
                                return (
                                    <li className="list-group-item">
                                        {
                                            true &&
                                            <CourseRowComponent _id={course._id}
                                                                title={course.title}
                                                                owner={course.owner}
                                                                modified={course.modified}/>
                                        }
                                    </li>
                                )})
                        }
                        </ul>
                    </div>
                    <div className="d-flex flex-column class-list">
                        <h6>Yesterday</h6>
                        <ul className="list-group justify-content-center">
                        {
                            this.props.courses.map(course =>
                                <li className="list-group-item">
                                    {
                                        true &&
                                        <CourseRowComponent _id={course._id}
                                                            title={course.title}
                                                            owner={course.owner}
                                                            modified={course.modified}/>
                                    }
                                </li>
                            )
                        }
                        </ul>
                    </div>
                    <div className="class-list">
                        <h6>Previous 7 days</h6>
                        <ul className="list-group justify-content-center">
                        {
                            this.props.courses.map(course =>
                                <li className="list-group-item">
                                    {
                                        true &&
                                        <CourseRowComponent _id={course._id}
                                                            title={course.title}
                                                            owner={course.owner}
                                                            modified={course.modified}/>
                                    }
                                </li>
                            )
                        }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default CourseTableComponent;