import React from 'react';
import { Link } from 'react-router-dom';

import CourseTableComponent from '../components/CourseTableComponent';
import CourseGridComponent from '../components/CourseGridComponent';

import CourseService from '../services/CourseService';

class CourseManagerContainer extends React.Component {
    state = {
        layout: 'table',
        courses: []
    }

    componentDidMount() {
        CourseService.findAllCourses()
            .then(courseArray => {
                this.setState({courses: courseArray});
            })
    }

    setLayout = (layout) =>
        this.setState(
            {layout: layout}
        );

    addCourse = courseTitle => {
        const newCourse = {
            title: courseTitle,
            owner: 'me'
        }

        return CourseService.createCourse(newCourse)
            .then(course => console.log(course))
    }

    removeCourse = id => {
        return CourseService.deleteCourse(id)
            .then(console.log('deleting course'))
    }

    render() {
        return (
            <div>
                <div className="collapse" id="navbarLinks">
                    <ul className="row nav nav-pills bg-dark homepage-button-group">
                        <li className="nav-item">
                            <a className="nav-link btn btn-dark" href="./login/login.template.client.html">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link btn btn-dark" href="./profile/profile.template.client.html">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link btn btn-dark" href="./register/register.template.client.html">Register</a>
                        </li>
                        <li className="nav-item">
                            <form className="wbdv-field wbdv-new-course form-inline">
                                <input className="form-control" placeholder="New Course"/>
                            </form>
                        </li>
                        <li className="nav-item float-right">
                            <button className="wbdv-button wbdv-add-course nav-link btn btn-dark"
                                    onClick={() => this.addCourse('test')}>
                                {'\u002b'}
                            </button>
                        </li>
                    </ul>
                </div>

                <nav className="navbar navbar-dark bg-dark">
                    <div className="d-flex flex-row home-nav">
                        <button className="wbdv-field wbdv-hamburger navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarLinks" aria-controls="navbarLinks" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="wbdv-label wbdv-course-manager navbar-brand ml-auto">Course Manager</div>
                    </div>
                </nav>

                <div className="headers nav align-items-center">
                    <li className="wbdv-header wbdv-title mr-auto nav-item">Title</li>
                    <li className="wbdv-header wbdv-owner mr-auto nav-item">Owner</li>
                    <li className="wbdv-header wbdv-last-modified mr-auto nav-item">Last Modified</li>
                    {
                        this.state.layout === 'table' &&
                        <li className="nav-item float-right">
                            <button className="wbdv-button wbdv-grid-layout btn editor-btn"
                                    onClick={() => this.setLayout('grid')}>
                                Grid
                            </button>
                        </li>
                    }
                    {
                        this.state.layout === 'grid' &&
                        <li className="nav-item float-right">
                            <button className="wbdv-button wbdv-grid-layout btn editor-btn"
                                    onClick={() => this.setLayout('table')}>
                                Table
                            </button>
                        </li>
                    }
                    <li className="nav-item float-right">
                        <a className="wbdv-header wbdv-sort btn">{'\u2191\u2193'}</a>
                    </li>
                </div>
                <span>
                    {
                        this.state.layout === 'table' &&
                        <CourseTableComponent courses={this.state.courses}
                                                removeCourse={this.removeCourse}/>
                    }
                    {
                        this.state.layout === 'grid' &&
                        <CourseGridComponent courses={this.state.courses}/>
                    }
                </span>
            </div>
        );
    }
}

export default CourseManagerContainer;